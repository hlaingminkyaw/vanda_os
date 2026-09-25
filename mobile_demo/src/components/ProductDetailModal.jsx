import React, { useState } from 'react';
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Truck,
  Check,
  MessageSquare,
  Layers
} from 'lucide-react';

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  cartCount,
  onOpenCart
}) {
  const [selectedImg, setSelectedImg] = useState(product?.gallery?.[0] || product?.image || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const totalStock = (product.inventory?.warehouseStock || 0) + (product.inventory?.physicalShopStock || 0);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor,
      quantity
    });
  };

  const handleBuyNow = () => {
    onBuyNow({
      ...product,
      selectedColor,
      quantity
    });
  };

  return (
    <div className="product-detail-page">
      {/* Top Sticky Header */}
      <div className="detail-nav-top">
        <button className="icon-btn-ghost" onClick={onClose} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
          Product Details
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="icon-btn-ghost" onClick={onOpenCart} aria-label="View Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="badge-counter">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Scrollable Product Details */}
      <div className="detail-scroll-area">
        {/* Main Gallery Image */}
        <div className="detail-gallery-box">
          <img src={selectedImg} alt={product.title} />
          {product.discount && (
            <span className="discount-tag-corner" style={{ fontSize: '11px', padding: '4px 8px' }}>
              {product.discount}
            </span>
          )}
        </div>

        {/* Thumbnail Strip */}
        {product.gallery && product.gallery.length > 1 && (
          <div className="gallery-thumbnails-strip">
            {product.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`gallery-thumb ${selectedImg === img ? 'active' : ''}`}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`Thumb ${idx}`} />
              </div>
            ))}
          </div>
        )}

        {/* Price & Title Card */}
        <div className="detail-info-card">
          <div className="detail-sku-badge">
            <Layers size={11} style={{ display: 'inline', marginRight: 4 }} />
            {product.sku}
          </div>

          <div className="detail-price-highlight">
            <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>$</span>
            <span style={{ fontSize: '26px', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.5px' }}>
              {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="price-original" style={{ fontSize: '14px' }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span
              style={{
                marginLeft: 'auto',
                fontSize: '11.5px',
                fontWeight: 700,
                color: 'var(--success)',
                background: 'var(--success-bg)',
                padding: '2px 8px',
                borderRadius: '999px',
                border: '1px solid var(--success-border)'
              }}
            >
              In Stock ({totalStock})
            </span>
          </div>

          <h2 style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1.35, marginBottom: 8 }}>
            {product.title}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '12px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, color: 'var(--text-main)' }}>
              <Star size={14} fill="#eab308" color="#eab308" />
              <span>{product.rating}</span>
            </div>
            <span>•</span>
            <span>{product.reviewCount} reviews</span>
            <span>•</span>
            <span>{product.soldCount}</span>
          </div>

          {/* Architecture Inventory Status (Per docs/ecommerce-visual-flow.png) */}
          <div className="inventory-stock-pill-group">
            <div className="stock-pill-item">
              <div className="stock-pill-label">Warehouse Stock</div>
              <div className="stock-pill-val">
                <span className="stock-dot" />
                {product.inventory?.warehouseStock} units
              </div>
            </div>
            <div className="stock-pill-item">
              <div className="stock-pill-label">Physical Shop Stock</div>
              <div className="stock-pill-val">
                <span className="stock-dot" style={{ background: '#0284c7' }} />
                {product.inventory?.physicalShopStock} units
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Delivery Guarantee Card */}
        <div className="detail-info-card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: 'var(--success-bg)',
                color: 'var(--success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Truck size={17} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                {product.shipping?.freeShipping ? 'Free Doorstep Delivery' : 'Standard Shipping ($4.00)'}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: 2 }}>
                Estimated delivery in <strong>{product.shipping?.estimatedDelivery}</strong> via{' '}
                <strong>{product.shipping?.carrier}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Color/Variant Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="detail-info-card">
            <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: 10 }}>
              Color Variant: <span style={{ color: 'var(--primary)' }}>{selectedColor}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {product.colors.map((c) => {
                const isSelected = selectedColor === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    style={{
                      border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border-default)',
                      background: isSelected ? 'var(--primary-light)' : '#ffffff',
                      color: isSelected ? 'var(--primary)' : 'var(--text-body)',
                      padding: '7px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6
                    }}
                  >
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: c.hex,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}
                    />
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quantity Stepper */}
        <div className="detail-info-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700 }}>Select Quantity</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: 2 }}>
              Max 10 units per order
            </div>
          </div>
          <div className="quantity-stepper">
            <button
              className="stepper-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="stepper-value">{quantity}</span>
            <button
              className="stepper-btn"
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            >
              +
            </button>
          </div>
        </div>

        {/* Product Description & Specifications */}
        <div className="detail-info-card">
          <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 8 }}>Overview</h4>
          <p style={{ fontSize: '12.5px', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: 12 }}>
            {product.description}
          </p>

          <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: 8 }}>Highlights</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {product.features?.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: '12px',
                  color: 'var(--text-body)'
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--success-bg)',
                    color: 'var(--success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Check size={11} />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sticky Bottom Action Dock */}
      <div className="product-bottom-action-dock">
        <button
          className="btn-dock-icon"
          onClick={() => alert('Support chat opened with Shop Store Representative.')}
          aria-label="Chat"
        >
          <MessageSquare size={18} />
          <span>Chat</span>
        </button>

        <button className="btn-secondary-action" onClick={handleAddToCart}>
          <ShoppingBag size={16} />
          <span>Add to Cart</span>
        </button>

        <button className="btn-primary-action" onClick={handleBuyNow}>
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
}
