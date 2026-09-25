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
    accentColor: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    tag: 'NEW ARRIVALS',
    title: 'Nordic Studio Furniture',
    subtitle: 'Crafted solid wood & ergonomic home studio pieces',
    badge: 'Verified Mall',
    bgGradient: 'from-amber-950 to-amber-900',
    accentColor: '#d97706',
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

export const DELIVERY_OPTIONS = [
  {
    id: 'std',
    name: 'Standard Doorstep Delivery',
    carrier: 'NinjaVan Express',
    estimatedDays: '2 - 3 business days',
    price: 0,
    tag: 'FREE'
  },
  {
    id: 'exp',
    name: 'Priority Courier Dispatch',
    carrier: 'DHL eCommerce',
    estimatedDays: 'Next Day Delivery',
    price: 4.50,
    tag: 'FASTEST'
  }
];

export const PAYMENT_METHODS = [
  {
    id: 'cod',
    name: 'Cash on Delivery (COD)',
    desc: 'Pay cash directly to courier upon arrival',
    icon: 'Banknote',
    recommended: true,
    extraFee: 0
  },
  {
    id: 'online_card',
    name: 'Credit / Debit Card',
    desc: 'Instant secure checkout (Visa / Mastercard)',
    icon: 'CreditCard',
    recommended: false,
    extraFee: 0
  },
  {
    id: 'wallet',
    name: 'Digital QR / Mobile Banking',
    desc: 'Fast checkout via banking app or e-wallet',
    icon: 'QrCode',
    recommended: false,
    extraFee: 0
  }
];

// Initial orders modeling the 5-step customer flow in docs/ecommerce-visual-flow.png:
// Step 1: Browse & Select
// Step 2: Checkout
// Step 3: Make Payment
// Step 4: Order Confirmed
// Step 5: View Estimated Arrival Date
// Step 6: Order In Delivery
// Step 7: Order Completed
export const INITIAL_ORDERS = [
  {
    id: 'ORD-98421',
    date: 'Today, 11:30 AM',
    status: 'in_delivery',
    statusText: 'In Delivery',
    statusCode: 6, // Step 6 of Visual Flow
    estimatedArrival: 'Tomorrow, Sep 26 (by 6:00 PM)',
    carrier: 'NinjaVan Express',
    trackingNumber: 'NV-9942-8812',
    deliveryServiceNotice: 'Delivery service is en route to destination.',
    paymentMethod: 'Cash on Delivery (COD)',
    paymentStatus: 'Pending Collection ($189.00)',
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
      { step: 1, title: 'Order Placed', time: 'Sep 24, 09:15 AM', done: true, desc: 'Order submitted by customer' },
      { step: 2, title: 'Order Confirmed', time: 'Sep 24, 10:30 AM', done: true, desc: 'Verified item availability in Warehouse stock' },
      { step: 3, title: 'Estimated Arrival Date Set', time: 'Sep 24, 02:00 PM', done: true, desc: 'Shop scheduled delivery with NinjaVan' },
      { step: 4, title: 'Order In Delivery', time: 'Sep 25, 08:45 AM', done: true, desc: 'Parcel handed over to courier (Tracking: NV-9942-8812)' },
      { step: 5, title: 'Order Completed', time: 'Pending Delivery', done: false, desc: 'Awaiting courier drop-off & customer confirmation' }
    ],
    subtotal: 189.00,
    shippingFee: 0.00,
    discount: 0.00,
    total: 189.00
  },
  {
    id: 'ORD-94102',
    date: 'Sep 22, 2026',
    status: 'completed',
    statusText: 'Completed',
    statusCode: 7, // Step 7 of Visual Flow
    estimatedArrival: 'Delivered on Sep 24',
    carrier: 'DHL eCommerce',
    trackingNumber: 'DHL-33910-X',
    deliveryServiceNotice: 'Package handed directly to resident. Order closed by admin.',
    paymentMethod: 'Credit / Debit Card',
    paymentStatus: 'Paid',
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
      { step: 1, title: 'Order Placed', time: 'Sep 22, 01:20 PM', done: true, desc: 'Customer placed order online' },
      { step: 2, title: 'Order Confirmed', time: 'Sep 22, 02:10 PM', done: true, desc: 'Inventory deducted from physical shop stock' },
      { step: 3, title: 'Estimated Arrival Date Set', time: 'Sep 22, 04:30 PM', done: true, desc: 'Arrival date scheduled for Sep 24' },
      { step: 4, title: 'Order In Delivery', time: 'Sep 23, 09:00 AM', done: true, desc: 'Dispatched via DHL eCommerce' },
      { step: 5, title: 'Order Completed', time: 'Sep 24, 03:15 PM', done: true, desc: 'Delivered successfully and closed in admin portal' }
    ],
    subtotal: 72.00,
    shippingFee: 0.00,
    discount: 5.00,
    total: 67.00
  }
];
