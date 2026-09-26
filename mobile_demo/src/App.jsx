import React, { useState, useEffect } from 'react';
import {
  PRODUCTS,
  INITIAL_ORDERS
} from './data/dummyData';

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ProductDetailModal from './components/ProductDetailModal';
import OrderTrackingModal from './components/OrderTrackingModal';
import OrderConfirmedModal from './components/OrderConfirmedModal';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import CartView from './views/CartView';
import CheckoutView from './views/CheckoutView';
import OrdersView from './views/OrdersView';
import ProfileView from './views/ProfileView';

import { CheckCircle } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      selectedColor: 'Matte Obsidian',
      quantity: 1
    }
  ]);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Navigation state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedOrderForTracking, setSelectedOrderForTracking] = useState(null);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);
  const [toast, setToast] = useState(null);

  // Appearance Theme State (persisted in localStorage)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('vanda_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('vanda_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  // Cart operations (Step 1: Browse & Select)
  const handleAddToCart = (productWithVariant) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === productWithVariant.id && item.selectedColor === productWithVariant.selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + productWithVariant.quantity
        };
        return next;
      } else {
        return [...prev, productWithVariant];
      }
    });

    showToast(`Added "${productWithVariant.title.slice(0, 24)}..." to cart!`);
    setSelectedProduct(null);
  };

  const handleBuyNow = (productWithVariant) => {
    handleAddToCart(productWithVariant);
    setSelectedProduct(null);
    setActiveTab('cart');
  };

  const handleUpdateQuantity = (id, color, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedColor === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, color) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedColor === color))
    );
    showToast('Item removed from cart', 'info');
  };

  // Step 2 & 3: Checkout and Make Payment
  const handleProceedToCheckout = (calcData) => {
    setCheckoutData(calcData);
  };

  const handlePlaceOrder = ({ address, delivery, payment, items, subtotal, shippingFee, discount, total }) => {
    const newOrderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const dateStr = 'Just now';

    // Deduct stock from dummy inventory
    setProducts((prev) =>
      prev.map((p) => {
        const matchingItem = items.find((it) => it.id === p.id);
        if (matchingItem) {
          const qty = matchingItem.quantity;
          const currentWarehouse = p.inventory?.warehouseStock || 10;
          return {
            ...p,
            inventory: {
              ...p.inventory,
              warehouseStock: Math.max(0, currentWarehouse - qty)
            }
          };
        }
        return p;
      })
    );

    // Initial new order starts at Step 4: Order Confirmed
    const newOrder = {
      id: newOrderId,
      date: dateStr,
      status: 'confirmed',
      statusText: 'Order Confirmed',
      stepNumber: 4,
      stepTitle: 'Step 4: Order Confirmed',
      estimatedArrival: 'Pending Shop Arrangement',
      deliveryService: 'Arranging with Delivery Service',
      deliveryServiceNotice: 'Customer received order confirmation. Shop is checking stock & arranging delivery.',
      paymentMethod: payment.name,
      paymentType: payment.type,
      paymentStatus: payment.type === 'cod' ? `Pending Collection ($${total.toFixed(2)})` : 'Paid Online',
      address: `${address.street}, ${address.district}`,
      items: items.map((it) => ({
        id: it.id,
        title: it.title,
        color: it.selectedColor,
        price: it.price,
        qty: it.quantity,
        image: it.image
      })),
      timeline: [
        {
          step: 1,
          title: 'Browse & Select',
          time: 'Just now',
          done: true,
          desc: 'Customer browsed, searched and added products to cart'
        },
        {
          step: 2,
          title: 'Checkout',
          time: 'Just now',
          done: true,
          desc: `Selected delivery address and discount ($${discount.toFixed(2)})`
        },
        {
          step: 3,
          title: 'Make Payment',
          time: 'Just now',
          done: true,
          desc: `Payment method: ${payment.name}`
        },
        {
          step: 4,
          title: 'Order Confirmed',
          time: 'Just now',
          done: true,
          desc: 'Customer received order confirmation. Shop is verifying order details & stock.'
        },
        {
          step: 5,
          title: 'View Estimated Arrival Date',
          time: 'Pending',
          done: false,
          desc: 'Shop will arrange with delivery service manually and enter estimated date'
        },
        {
          step: 6,
          title: 'Order In Delivery',
          time: 'Pending',
          done: false,
          desc: 'Customer will see order status "In Delivery" (with estimated date)'
        },
        {
          step: 7,
          title: 'Order Completed',
          time: 'Pending',
          done: false,
          desc: 'Once item arrives (confirmed with delivery service), admin closes order'
        }
      ],
      subtotal,
      shippingFee,
      discount,
      total
    };

    // Prepend new order
    setOrders((prev) => [newOrder, ...prev]);

    // Clear cart items that were ordered
    const orderedKeys = items.map((it) => `${it.id}-${it.selectedColor}`);
    setCartItems((prev) =>
      prev.filter((it) => !orderedKeys.includes(`${it.id}-${it.selectedColor}`))
    );

    // Close checkout
    setCheckoutData(null);

    // Step 4: Show Order Confirmed Modal
    setConfirmedOrder(newOrder);
    showToast(`Order ${newOrderId} confirmed!`);
  };

  // Interactive Admin Operations Simulation (Advancing orders through Steps 4 -> 5 -> 6 -> 7)
  const handleAdvanceOrderStep = (orderId) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order;

        if (order.status === 'confirmed') {
          // Advance to Step 5: View Estimated Arrival Date
          const updated = {
            ...order,
            status: 'date_set',
            statusText: 'Arrival Date Set',
            stepNumber: 5,
            stepTitle: 'Step 5: View Estimated Arrival Date',
            estimatedArrival: 'In 2 business days (Oct 2, 2026)',
            deliveryService: 'NinjaVan Express',
            deliveryServiceNotice: 'Delivery service provided estimated arrival date. Entered into system by shop.',
            timeline: order.timeline.map((t) =>
              t.step === 5
                ? { ...t, done: true, time: 'Just now', desc: 'Shop scheduled delivery. Estimated arrival: Oct 2, 2026' }
                : t
            )
          };
          showToast(`Admin scheduled delivery for ${order.id}: Oct 2, 2026`, 'info');
          if (confirmedOrder?.id === orderId) setConfirmedOrder(updated);
          if (selectedOrderForTracking?.id === orderId) setSelectedOrderForTracking(updated);
          return updated;
        }

        if (order.status === 'date_set') {
          // Advance to Step 6: Order In Delivery
          const updated = {
            ...order,
            status: 'in_delivery',
            statusText: 'In Delivery',
            stepNumber: 6,
            stepTitle: 'Step 6: Order In Delivery',
            deliveryServiceNotice: 'Parcel picked up by courier. Customer sees status "In Delivery".',
            timeline: order.timeline.map((t) =>
              t.step === 6
                ? { ...t, done: true, time: 'Just now', desc: 'Dispatched with courier. En route.' }
                : t
            )
          };
          showToast(`Order ${order.id} is now In Delivery!`, 'info');
          if (confirmedOrder?.id === orderId) setConfirmedOrder(updated);
          if (selectedOrderForTracking?.id === orderId) setSelectedOrderForTracking(updated);
          return updated;
        }

        if (order.status === 'in_delivery') {
          // Advance to Step 7: Order Completed
          const updated = {
            ...order,
            status: 'completed',
            statusText: 'Order Completed',
            stepNumber: 7,
            stepTitle: 'Step 7: Order Completed',
            deliveryServiceNotice: 'Item arrived (confirmed with delivery service). Admin closed order.',
            paymentStatus: order.paymentType === 'cod' ? 'Collected Upon Delivery' : 'Paid Online',
            timeline: order.timeline.map((t) =>
              t.step === 7
                ? { ...t, done: true, time: 'Just now', desc: 'Delivered and closed by admin in system' }
                : t
            )
          };
          showToast(`Order ${order.id} marked as Completed by admin!`);
          if (confirmedOrder?.id === orderId) setConfirmedOrder(updated);
          if (selectedOrderForTracking?.id === orderId) setSelectedOrderForTracking(updated);
          return updated;
        }

        return order;
      })
    );
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);
  const activeOrdersCount = orders.filter((o) => o.status !== 'completed').length;

  return (
    <div className="app-screen-container" data-theme={theme}>
      {/* Header on Home and Categories views */}
      {(activeTab === 'home' || activeTab === 'categories') && (
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          cartCount={totalCartCount}
          onOpenCart={() => setActiveTab('cart')}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      {/* Floating Toast Alert */}
      {toast && (
        <div className="floating-toast">
          <CheckCircle size={16} color="var(--primary)" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Active View Container */}
      <main className="app-scroll-content">
        {/* Step 1: Browse & Select (Home) */}
        {activeTab === 'home' && (
          <HomeView
            products={products}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={setSelectedProduct}
            searchQuery={searchQuery}
          />
        )}

        {/* Categories View */}
        {activeTab === 'categories' && (
          <CategoriesView
            products={products}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {/* Step 1 -> 2: Shopping Cart */}
        {activeTab === 'cart' && (
          <CartView
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onProceedToCheckout={handleProceedToCheckout}
            onBrowseProducts={() => setActiveTab('home')}
          />
        )}

        {/* Steps 4 to 7: My Orders & Timeline Tracking */}
        {activeTab === 'orders' && (
          <OrdersView
            orders={orders}
            onSelectOrder={setSelectedOrderForTracking}
          />
        )}

        {/* Profile View */}
        {activeTab === 'profile' && (
          <ProfileView
            orders={orders}
            onNavigateToOrders={(_filter) => setActiveTab('orders')}
            theme={theme}
            onToggleTheme={toggleTheme}
            onSetTheme={setTheme}
          />
        )}
      </main>

      {/* Persistent Bottom Nav Bar (Home, Categories, Cart, Orders, Profile) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== 'home') setSearchQuery('');
        }}
        cartCount={totalCartCount}
        activeOrdersCount={activeOrdersCount}
      />

      {/* Step 1: Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          cartCount={totalCartCount}
          onOpenCart={() => {
            setSelectedProduct(null);
            setActiveTab('cart');
          }}
        />
      )}

      {/* Steps 2 & 3: Checkout View */}
      {checkoutData && (
        <CheckoutView
          checkoutData={checkoutData}
          onBackToCart={() => setCheckoutData(null)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {/* Step 4: Order Confirmed Modal */}
      {confirmedOrder && (
        <OrderConfirmedModal
          order={confirmedOrder}
          onViewTracking={() => {
            setSelectedOrderForTracking(confirmedOrder);
            setConfirmedOrder(null);
            setActiveTab('orders');
          }}
          onContinueShopping={() => {
            setConfirmedOrder(null);
            setActiveTab('home');
          }}
          onSimulateAdminAdvance={handleAdvanceOrderStep}
        />
      )}

      {/* Steps 4, 5, 6, 7: Order Tracking & Status Timeline Modal */}
      {selectedOrderForTracking && (
        <OrderTrackingModal
          order={selectedOrderForTracking}
          onClose={() => setSelectedOrderForTracking(null)}
          onAdvanceStep={handleAdvanceOrderStep}
        />
      )}
    </div>
  );
}
