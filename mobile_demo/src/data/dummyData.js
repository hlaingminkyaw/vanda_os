export const CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'Sparkles', badge: 'Popular' },
  { id: 'electronics', name: 'Gadgets', icon: 'Smartphone', badge: 'Deals' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', badge: null },
  { id: 'home', name: 'Home Living', icon: 'Home', badge: 'Hot' },
  { id: 'beauty', name: 'Beauty & Care', icon: 'Heart', badge: null },
  { id: 'sports', name: 'Athletics', icon: 'Activity', badge: null },
  { id: 'audio', name: 'Sound & Audio', icon: 'Headphones', badge: 'New' }
];

export const BANNERS = [
  {
    id: 1,
    tag: 'LIMITED TIME OFFER',
    title: 'Autumn Tech Essentials',
    subtitle: 'Up to 40% off minimalist audio & desktop accessories',
    badge: 'Free Delivery',
    bgGradient: 'from-stone-900 to-stone-800',
    accentColor: '#e39d3d',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    tag: 'NEW ARRIVALS',
    title: 'Nordic Studio Furniture',
    subtitle: 'Crafted solid wood & ergonomic home studio pieces',
    badge: 'Verified Mall',
    bgGradient: 'from-amber-950 to-amber-900',
    accentColor: '#cb8527',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    tag: 'MEMBER PRIVILEGE',
    title: 'Weekend Flash Deals',
    subtitle: 'Extra 15% voucher applied at checkout with COD support',
    badge: 'Cash on Delivery',
    bgGradient: 'from-slate-900 to-slate-800',
    accentColor: '#2563eb',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80'
  }
];

export const PRODUCTS = [
  {
    id: 'prod-001',
    sku: 'SKU-AU-PRO9',
    title: 'AcousticStudio Pro ANC Wireless Headphones',
    category: 'audio',
    price: 189.00,
    originalPrice: 249.00,
    discount: '24% OFF',
    rating: 4.9,
    reviewCount: 382,
    soldCount: '1.2k sold',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Precision-engineered active noise cancellation with 40mm custom graphene drivers. Ultra-light memory foam ear cushions designed for all-day comfort and up to 45 hours playtime.',
    features: [
      'Hybrid Active Noise Cancellation (-38dB)',
      'High-Res Wireless Audio (LDAC & AAC)',
      '45-Hour Battery Life with USB-C Quick Charge',
      'Dual Device Bluetooth 5.3 Multipoint'
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#1e293b' },
      { name: 'Moon White', hex: '#e2e8f0' },
      { name: 'Warm Sand', hex: '#d4c5b9' }
    ],
    inventory: {
      warehouseStock: 84,
      physicalShopStock: 16,
      lowStockAlert: 10
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2 - 3 business days',
      carrier: 'NinjaVan Express'
    },
    isFlashDeal: true,
    flashProgress: 76,
    tags: ['Mall Verified', 'Free Shipping', 'COD Available']
  },
  {
    id: 'prod-002',
    sku: 'SKU-WT-CHRO',
    title: 'Horizon Minimalist Automatic Chronograph 40mm',
    category: 'fashion',
    price: 145.00,
    originalPrice: 195.00,
    discount: '25% OFF',
    rating: 4.8,
    reviewCount: 219,
    soldCount: '840 sold',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Sleek architectural timepiece featuring a 316L brushed stainless steel case, anti-reflective sapphire crystal, and vegetable-tanned genuine leather strap.',
    features: [
      'Japanese Miyota Quartz Movement',
      'Sapphire Crystal Scratch-Proof Glass',
      '5 ATM / 50M Water Resistance',
      'Quick-release Italian Calf Leather Band'
    ],
    colors: [
      { name: 'Silver Slate', hex: '#94a3b8' },
      { name: 'Rose Gold', hex: '#e2b3a3' }
    ],
    inventory: {
      warehouseStock: 32,
      physicalShopStock: 8,
      lowStockAlert: 5
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2 - 4 business days',
      carrier: 'DHL eCommerce'
    },
    isFlashDeal: true,
    flashProgress: 88,
    tags: ['Official Store', 'Top Choice']
  },
  {
    id: 'prod-003',
    sku: 'SKU-HM-OAK1',
    title: 'Nordic Oak Ergonomic Desktop Shelf & Dock',
    category: 'home',
    price: 78.00,
    originalPrice: 98.00,
    discount: '20% OFF',
    rating: 4.9,
    reviewCount: 164,
    soldCount: '530 sold',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Solid FSC-certified oak monitor riser with integrated cable management slot and anti-scratch cork pads. Elevates your screen to optimal ergonomic eye height.',
    features: [
      '100% Solid Natural American White Oak',
      'Holds displays up to 35kg (77 lbs)',
      'Dual device storage nook underneath',
      'Hand-finished with organic matte wax oil'
    ],
    colors: [
      { name: 'Natural Oak', hex: '#d6b88d' },
      { name: 'Smoked Walnut', hex: '#5c4333' }
    ],
    inventory: {
      warehouseStock: 25,
      physicalShopStock: 5,
      lowStockAlert: 8
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '3 - 5 business days',
      carrier: 'J&T Express'
    },
    isFlashDeal: false,
    flashProgress: 40,
    tags: ['Eco Crafted', 'COD Available']
  },
  {
    id: 'prod-004',
    sku: 'SKU-BT-BTL7',
    title: 'HydraPure Insulated Smart Flask 650ml',
    category: 'sports',
    price: 36.00,
    originalPrice: 48.00,
    discount: '25% OFF',
    rating: 4.7,
    reviewCount: 512,
    soldCount: '2.4k sold',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Triple-wall vacuum insulated bottle with built-in capacitive touch LED temperature indicator on the lid. Keeps beverages cold for 24 hours or piping hot for 14 hours.',
    features: [
      'Medical Grade 316 Stainless Steel Core',
      'Smart Touch Real-Time Temperature Display',
      'Leak-Proof Magnetic Flip Lid with Carry Loop',
      'BPA-Free, Condensation-Free Matte Powder Coat'
    ],
    colors: [
      { name: 'Nordic Sage', hex: '#849b89' },
      { name: 'Deep Navy', hex: '#1e3a5f' },
      { name: 'Onyx Black', hex: '#1a1a1a' }
    ],
    inventory: {
      warehouseStock: 120,
      physicalShopStock: 45,
      lowStockAlert: 15
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2 - 3 business days',
      carrier: 'NinjaVan Express'
    },
    isFlashDeal: true,
    flashProgress: 92,
    tags: ['Flash Deal', 'Free Delivery']
  },
  {
    id: 'prod-005',
    sku: 'SKU-ET-KEYB',
    title: 'Nuance 75% Mechanical Keyboard (Hot-Swap)',
    category: 'electronics',
    price: 119.00,
    originalPrice: 159.00,
    discount: '25% OFF',
    rating: 4.9,
    reviewCount: 420,
    soldCount: '1.8k sold',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Gasket-mounted acoustic typing sensation with factory-lubed linear switches and double-shot PBT keycaps. Seamless tri-mode connectivity (2.4GHz, BT 5.1, USB-C).',
    features: [
      'Gasket Mount with 5-Layer Acoustic Foam Dampening',
      'Hot-Swappable 5-Pin Switch Sockets',
      'Custom South-Facing Warm White RGB LEDs',
      '4000mAh Battery (up to 200 hours)'
    ],
    colors: [
      { name: 'Retro Grey', hex: '#9ca3af' },
      { name: 'Botanical Green', hex: '#4d7c0f' }
    ],
    inventory: {
      warehouseStock: 42,
      physicalShopStock: 14,
      lowStockAlert: 8
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: '2 - 4 business days',
      carrier: 'Flash Express'
    },
    isFlashDeal: false,
    flashProgress: 55,
    tags: ['Mall Verified', 'COD Available']
  },
  {
    id: 'prod-006',
    sku: 'SKU-BC-CARE',
    title: 'Botanical Restorative Facial Oil & Gua Sha Set',
    category: 'beauty',
    price: 42.00,
    originalPrice: 56.00,
    discount: '25% OFF',
    rating: 4.8,
    reviewCount: 310,
    soldCount: '950 sold',
    image: 'https://images.unsplash.com/photo-1608248597359-5613532b319b?w=600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608248597359-5613532b319b?w=600&auto=format&fit=crop&q=80'
    ],
    description: 'Cold-pressed organic rosehip and squalane replenishing facial oil paired with a hand-carved natural jade stone gua sha for daily lifting and lymphatic drainage rituals.',
    features: [
      '100% Plant-Derived Organic Ingredients',
      'Non-comedogenic, Fast Absorbing Texture',
      'Authentic Brazilian Green Aventurine Stone',
      'Dermatologically Tested for Sensitive Skin'
    ],
    colors: [
      { name: 'Jade Green', hex: '#52796f' }
    ],
    inventory: {
      warehouseStock: 65,
      physicalShopStock: 20,
      lowStockAlert: 10
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: '3 - 5 business days',
      carrier: 'NinjaVan Express'
    },
    isFlashDeal: false,
    flashProgress: 35,
    tags: ['Organic', 'Free Shipping over $50']
  }
];

export const SAVED_ADDRESSES = [
  {
    id: 'addr-1',
    isDefault: true,
    label: 'Home',
    recipientName: 'Alex Morgan',
    phone: '+1 (555) 234-8901',
    street: '742 Evergreen Terrace, Apt 4B',
    district: 'Springfield Metro, CA 97477',
    notes: 'Leave at door if not home'
  },
  {
    id: 'addr-2',
    isDefault: false,
    label: 'Office',
    recipientName: 'Alex Morgan',
    phone: '+1 (555) 890-1234',
    street: '500 Tech Parkway, Suite 300',
    district: 'Silicon Park, CA 94025',
    notes: 'Deliver during reception hours 9am - 5pm'
  }
];

export const DEFAULT_DELIVERY_INFO = {
  name: 'Standard Doorstep Delivery',
  price: 0,
  tag: 'FREE',
  notice: 'Delivery service is arranged manually by shop. Estimated arrival date is provided upon confirmation.'
};

export const PAYMENT_METHODS = [
  {
    id: 'cod',
    name: 'Cash on Delivery (COD)',
    desc: 'Pay cash directly upon arrival (Step 3: Make Payment)',
    type: 'cod',
    icon: 'Banknote',
    recommended: true
  },
  {
    id: 'online',
    name: 'Online Payment',
    desc: 'Instant secure checkout via Card / Mobile Banking',
    type: 'online',
    icon: 'CreditCard',
    recommended: false
  }
];

// Initial orders modeling the 7-step customer mobile app flow from docs/visual flow.png:
// Step 1: Browse & Select
// Step 2: Checkout (Select address, payment method, discount)
// Step 3: Make Payment (Online or COD)
// Step 4: Order Confirmed (Customer receives confirmation)
// Step 5: View Estimated Arrival Date (Provided by the shop)
// Step 6: Order In Delivery (Status "In Delivery" with estimated date)
// Step 7: Order Completed (Once item arrives & confirmed with delivery service, admin closes order)
export const INITIAL_ORDERS = [
  {
    id: 'ORD-98421',
    date: 'Today, 11:30 AM',
    status: 'in_delivery',
    statusText: 'In Delivery',
    stepNumber: 6,
    stepTitle: 'Step 6: Order In Delivery',
    estimatedArrival: 'Tomorrow by 6:00 PM',
    deliveryService: 'NinjaVan Express',
    deliveryServiceNotice: 'Delivery arranged by shop. Customer sees estimated arrival date provided by shop.',
    paymentMethod: 'Cash on Delivery (COD)',
    paymentType: 'cod',
    paymentStatus: 'Pending Collection Upon Delivery ($189.00)',
    address: '742 Evergreen Terrace, Apt 4B, Springfield Metro, CA',
    items: [
      {
        id: 'prod-001',
        title: 'AcousticStudio Pro ANC Wireless Headphones',
        color: 'Matte Obsidian',
        price: 189.00,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80'
      }
    ],
    timeline: [
      { step: 1, title: 'Browse & Select', time: 'Sep 24, 09:15 AM', done: true, desc: 'Customer browsed, searched and added products to cart' },
      { step: 2, title: 'Checkout', time: 'Sep 24, 09:20 AM', done: true, desc: 'Selected delivery address and applied discount' },
      { step: 3, title: 'Make Payment', time: 'Sep 24, 09:22 AM', done: true, desc: 'Selected Cash on Delivery (COD)' },
      { step: 4, title: 'Order Confirmed', time: 'Sep 24, 09:25 AM', done: true, desc: 'Customer received order confirmation. Shop checked stock.' },
      { step: 5, title: 'View Estimated Arrival Date', time: 'Sep 24, 02:00 PM', done: true, desc: 'Shop arranged courier and set estimated arrival: Tomorrow by 6:00 PM' },
      { step: 6, title: 'Order In Delivery', time: 'Sep 25, 08:30 AM', done: true, desc: 'Customer sees order status "In Delivery" (with estimated date)' },
      { step: 7, title: 'Order Completed', time: 'Pending Delivery', done: false, desc: 'Admin closes order once confirmed with delivery service' }
    ],
    subtotal: 189.00,
    shippingFee: 0.00,
    discount: 0.00,
    total: 189.00
  },
  {
    id: 'ORD-98422',
    date: 'Yesterday, 04:15 PM',
    status: 'date_set',
    statusText: 'Arrival Date Set',
    stepNumber: 5,
    stepTitle: 'Step 5: View Estimated Arrival Date',
    estimatedArrival: 'Oct 2, 2026',
    deliveryService: 'Flash Express',
    deliveryServiceNotice: 'Shop entered delivery service estimated arrival date into system.',
    paymentMethod: 'Online Payment (Card)',
    paymentType: 'online',
    paymentStatus: 'Paid Online',
    address: '500 Tech Parkway, Suite 300, Silicon Park, CA',
    items: [
      {
        id: 'prod-005',
        title: 'Nuance 75% Mechanical Keyboard (Hot-Swap)',
        color: 'Botanical Green',
        price: 119.00,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&auto=format&fit=crop&q=80'
      }
    ],
    timeline: [
      { step: 1, title: 'Browse & Select', time: 'Sep 25, 04:00 PM', done: true, desc: 'Customer browsed and added keyboard to cart' },
      { step: 2, title: 'Checkout', time: 'Sep 25, 04:08 PM', done: true, desc: 'Selected office address and entered promo code' },
      { step: 3, title: 'Make Payment', time: 'Sep 25, 04:12 PM', done: true, desc: 'Paid online via credit card' },
      { step: 4, title: 'Order Confirmed', time: 'Sep 25, 04:15 PM', done: true, desc: 'Customer received order confirmation. Inventory reserved.' },
      { step: 5, title: 'View Estimated Arrival Date', time: 'Sep 25, 05:30 PM', done: true, desc: 'Customer sees estimated arrival date (Oct 2, 2026) provided by the shop' },
      { step: 6, title: 'Order In Delivery', time: 'Awaiting Pickup', done: false, desc: 'Courier will pick up parcel for transit' },
      { step: 7, title: 'Order Completed', time: 'Pending Arrival', done: false, desc: 'Admin closes order upon delivery confirmation' }
    ],
    subtotal: 119.00,
    shippingFee: 0.00,
    discount: 10.00,
    total: 109.00
  },
  {
    id: 'ORD-98423',
    date: 'Just Now',
    status: 'confirmed',
    statusText: 'Order Confirmed',
    stepNumber: 4,
    stepTitle: 'Step 4: Order Confirmed',
    estimatedArrival: 'Pending Shop Arrangement',
    deliveryService: 'Arranging with Delivery Service',
    deliveryServiceNotice: 'Customer received order confirmation. Shop is verifying order & preparing items.',
    paymentMethod: 'Online Payment',
    paymentType: 'online',
    paymentStatus: 'Paid Online',
    address: '742 Evergreen Terrace, Apt 4B, Springfield Metro, CA',
    items: [
      {
        id: 'prod-003',
        title: 'Nordic Oak Ergonomic Desktop Shelf & Dock',
        color: 'Natural Oak',
        price: 78.00,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=200&auto=format&fit=crop&q=80'
      }
    ],
    timeline: [
      { step: 1, title: 'Browse & Select', time: 'Just now', done: true, desc: 'Customer browsed and added desktop shelf' },
      { step: 2, title: 'Checkout', time: 'Just now', done: true, desc: 'Selected home address and checked total' },
      { step: 3, title: 'Make Payment', time: 'Just now', done: true, desc: 'Paid online successfully' },
      { step: 4, title: 'Order Confirmed', time: 'Just now', done: true, desc: 'Customer received order confirmation' },
      { step: 5, title: 'View Estimated Arrival Date', time: 'Pending', done: false, desc: 'Shop will arrange delivery service and enter estimated date' },
      { step: 6, title: 'Order In Delivery', time: 'Pending', done: false, desc: 'Awaiting dispatch' },
      { step: 7, title: 'Order Completed', time: 'Pending', done: false, desc: 'Awaiting delivery & closing' }
    ],
    subtotal: 78.00,
    shippingFee: 0.00,
    discount: 0.00,
    total: 78.00
  },
  {
    id: 'ORD-94102',
    date: 'Sep 22, 2026',
    status: 'completed',
    statusText: 'Order Completed',
    stepNumber: 7,
    stepTitle: 'Step 7: Order Completed',
    estimatedArrival: 'Delivered on Sep 24',
    deliveryService: 'DHL eCommerce',
    deliveryServiceNotice: 'Item arrived (confirmed with delivery service), admin closed the order.',
    paymentMethod: 'Cash on Delivery (COD)',
    paymentType: 'cod',
    paymentStatus: 'Paid Upon Delivery ($67.00)',
    address: '742 Evergreen Terrace, Apt 4B, Springfield Metro, CA',
    items: [
      {
        id: 'prod-004',
        title: 'HydraPure Insulated Smart Flask 650ml',
        color: 'Nordic Sage',
        price: 36.00,
        qty: 2,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&auto=format&fit=crop&q=80'
      }
    ],
    timeline: [
      { step: 1, title: 'Browse & Select', time: 'Sep 22, 01:20 PM', done: true, desc: 'Browsed and added flasks to cart' },
      { step: 2, title: 'Checkout', time: 'Sep 22, 01:25 PM', done: true, desc: 'Selected address and applied discount' },
      { step: 3, title: 'Make Payment', time: 'Sep 22, 01:28 PM', done: true, desc: 'Chose Cash on Delivery (COD)' },
      { step: 4, title: 'Order Confirmed', time: 'Sep 22, 01:30 PM', done: true, desc: 'Customer received order confirmation' },
      { step: 5, title: 'View Estimated Arrival Date', time: 'Sep 22, 03:00 PM', done: true, desc: 'Shop scheduled delivery date for Sep 24' },
      { step: 6, title: 'Order In Delivery', time: 'Sep 23, 08:30 AM', done: true, desc: 'Courier en route' },
      { step: 7, title: 'Order Completed', time: 'Sep 24, 02:45 PM', done: true, desc: 'Once item arrived, admin closed the order' }
    ],
    subtotal: 72.00,
    shippingFee: 0.00,
    discount: 5.00,
    total: 67.00
  }
];
