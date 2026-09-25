import React, { useState, useEffect } from 'react';
import {
  PRODUCTS,
  INITIAL_ORDERS
} from './data/dummyData';

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import ProductDetailModal from './components/ProductDetailModal';
import OrderTrackingModal from './components/OrderTrackingModal';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import CartView from './views/CartView';
import CheckoutView from './views/CheckoutView';
import OrdersView from './views/OrdersView';
import ProfileView from './views/ProfileView';

import {
  Smartphone,
  Maximize2,
  Minimize2,
  CheckCircle,
  Wifi,
  Battery
} from 'lucide-react';

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
  const [checkoutData, setCheckoutData] = useState(null);
  
  // UI simulator settings
  const [isPhoneFrameMode, setIsPhoneFrameMode] = useState(true);
  const [toast, setToast] = useState(null);

  // Time for status bar
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours % 12 || 12}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  // Cart operations
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

  // Checkout & Order Placement (Directly implementing docs/ecommerce-visual-flow.png steps 2, 3, 4, 5)
  const handleProceedToCheckout = (calcData) => {
    setCheckoutData(calcData);
  };

  const handlePlaceOrder = ({ address, delivery, payment, items, subtotal, shippingFee, discount, total }) => {
    const newOrderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const dateStr = 'Just now';

    // Calculate Estimated Arrival Date (Step 5 of visual flow)
    const arrivalDateStr = delivery.id === 'exp' ? 'Tomorrow by 6:00 PM' : 'In 2 - 3 business days';

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

    const newOrder = {
      id: newOrderId,
      date: dateStr,
      status: 'in_delivery',
      statusText: 'In Delivery',
      statusCode: 6, // Step 6 of Visual Flow
      estimatedArrival: arrivalDateStr,
      carrier: delivery.carrier,
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      deliveryServiceNotice: `Dispatched with ${delivery.carrier}. Estimated arrival ${arrivalDateStr}.`,
      paymentMethod: payment.name,
      paymentStatus: payment.id === 'cod' ? `Pending Collection ($${total.toFixed(2)})` : 'Paid Online',
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
          title: 'Order Placed',
          time: 'Just now',
          done: true,
          desc: `Order placed via ${payment.name}`
        },
        {
          step: 2,
          title: 'Order Confirmed',
          time: 'Just now',
          done: true,
          desc: 'Verified inventory in Warehouse stock & stock reserved'
        },
        {
          step: 3,
          title: 'Estimated Arrival Date Set',
          time: 'Just now',
          done: true,
          desc: `Estimated arrival scheduled for ${arrivalDateStr}`
        },
        {
          step: 4,
          title: 'Order In Delivery',
          time: 'En Route',
          done: true,
          desc: `Handed over to ${delivery.carrier}`
        },
        {
          step: 5,
          title: 'Order Completed',
          time: 'Pending Drop-off',
          done: false,
          desc: 'Courier will deliver and admin will close order'
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

    // Direct user to Order Tracking Modal
    setSelectedOrderForTracking(newOrder);
    setActiveTab('orders');
    showToast(`Order ${newOrderId} placed successfully!`);
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);
  const activeOrdersCount = orders.filter((o) => o.status === 'in_delivery' || o.status === 'confirmed').length;

  return (
    <div className="desktop-viewport-canvas">
      {/* Desktop Helper Toolbar */}
      <div className="simulator-top-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Smartphone size={14} color="#f59e0b" />
          <span style={{ fontWeight: 700, color: '#f1f5f9' }}>Lumina Mobile UI</span>
          <span>• Shopee-Inspired Flow Demo</span>
        </div>

        <button
          className="simulator-toggle-btn"
          onClick={() => setIsPhoneFrameMode((prev) => !prev)}
        >
          {isPhoneFrameMode ? (
            <>
              <Maximize2 size={12} />
              <span>Full Screen</span>
            </>
          ) : (
            <>
              <Minimize2 size={12} />
              <span>Phone Frame</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Device Frame */}
      <div className={`device-phone-frame ${!isPhoneFrameMode ? 'full-screen-mode' : ''}`}>
        {/* Phone Top Status Bar & Dynamic Island */}
        <div className="phone-status-bar">
          <span>{currentTime}</span>

          <div className="phone-dynamic-island">
            <div className="camera-lens" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Wifi size={14} />
            <Battery size={16} />
          </div>
        </div>

        {/* App Main Shell */}
        <div className="app-screen-container">
          {/* Global Header (sticky on Home & Categories) */}
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
            {activeTab === 'home' && (
              <HomeView
                products={products}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onSelectProduct={setSelectedProduct}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'categories' && (
              <CategoriesView
                products={products}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onSelectProduct={setSelectedProduct}
              />
            )}

            {activeTab === 'cart' && (
              <CartView
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onProceedToCheckout={handleProceedToCheckout}
                onBrowseProducts={() => setActiveTab('home')}
              />
            )}

            {activeTab === 'orders' && (
              <OrdersView
                orders={orders}
                onSelectOrder={setSelectedOrderForTracking}
              />
            )}

            {activeTab === 'profile' && (
              <ProfileView
                orders={orders}
                onNavigateToOrders={(_filter) => setActiveTab('orders')}
              />
            )}
          </main>

          {/* Persistent Bottom Nav Bar */}
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              if (tab !== 'home') setSearchQuery('');
            }}
            cartCount={totalCartCount}
            activeOrdersCount={activeOrdersCount}
          />

          {/* Modals & Overlays */}
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

          {checkoutData && (
            <CheckoutView
              checkoutData={checkoutData}
              onBackToCart={() => setCheckoutData(null)}
              onPlaceOrder={handlePlaceOrder}
            />
          )}

          {selectedOrderForTracking && (
            <OrderTrackingModal
              order={selectedOrderForTracking}
              onClose={() => setSelectedOrderForTracking(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
