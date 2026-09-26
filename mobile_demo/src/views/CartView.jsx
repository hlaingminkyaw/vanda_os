import React, { useState } from 'react';
import { Trash2, Tag, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartView({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onBrowseProducts
}) {
  const [selectedItemIds, setSelectedItemIds] = useState(
    cartItems.map((item) => `${item.id}-${item.selectedColor}`)
  );
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState(null);

  // Toggle item selection
  const toggleSelect = (key) => {
    setSelectedItemIds((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItemIds.length === cartItems.length) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(cartItems.map((item) => `${item.id}-${item.selectedColor}`));
    }
  };

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    if (voucherCode.trim().toUpperCase() === 'VANDA10' || voucherCode.trim().toUpperCase() === 'LUMINA10' || voucherCode.trim().toUpperCase() === 'SHOPEE10') {
      setAppliedDiscount(10.00);
      setVoucherMessage({ type: 'success', text: '$10.00 discount voucher applied!' });
    } else if (voucherCode.trim().toUpperCase() === 'FREESHIP') {
      setAppliedDiscount(5.00);
      setVoucherMessage({ type: 'success', text: 'Free shipping voucher applied!' });
    } else {
      setVoucherMessage({ type: 'error', text: 'Invalid code. Try "VANDA10"' });
    }
  };

  // Selected items calculation
  const activeItems = cartItems.filter((item) =>
    selectedItemIds.includes(`${item.id}-${item.selectedColor}`)
  );

  const subtotal = activeItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = subtotal > 50 || subtotal === 0 ? 0 : 4.50;
  const total = Math.max(0, subtotal + shippingFee - appliedDiscount);

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          padding: '60px 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'var(--bg-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-tertiary)',
            marginBottom: 16
          }}
        >
          <ShoppingBag size={32} />
        </div>
        <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: 6 }}>
          Your Cart is Empty
        </h3>
        <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', maxWidth: 240, marginBottom: 20 }}>
          Explore curated products, flash sale items, and seasonal accessories.
        </p>
        <button
          className="btn-primary-action"
          style={{ padding: '12px 24px', flex: 'none' }}
          onClick={onBrowseProducts}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '14px', paddingBottom: '140px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
          Shopping Cart ({cartItems.length})
        </h2>
        <button
          onClick={toggleSelectAll}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--primary)',
            cursor: 'pointer'
          }}
        >
          {selectedItemIds.length === cartItems.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      {/* Free Shipping Alert banner */}
      <div
        style={{
          background: subtotal >= 50 ? 'var(--success-bg)' : 'var(--bg-subtle)',
          border: `1px solid ${subtotal >= 50 ? 'var(--success-border)' : 'var(--border-default)'}`,
          padding: '10px 14px',
          borderRadius: 'var(--radius-md)',
          fontSize: '11.5px',
          fontWeight: 600,
          color: subtotal >= 50 ? 'var(--success)' : 'var(--text-body)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 14
        }}
      >
        <ShieldCheck size={16} />
        <span>
          {subtotal >= 50
            ? '✓ You qualified for Free Standard Delivery!'
            : `Add $${(50 - subtotal).toFixed(2)} more to unlock Free Delivery.`}
        </span>
      </div>

      {/* Cart Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {cartItems.map((item) => {
          const itemKey = `${item.id}-${item.selectedColor}`;
          const isSelected = selectedItemIds.includes(itemKey);

          return (
            <div
              key={itemKey}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                padding: '12px',
                display: 'flex',
                gap: 10,
                alignItems: 'center'
              }}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleSelect(itemKey)}
                style={{
                  width: 18,
                  height: 18,
                  accentColor: 'var(--primary)',
                  cursor: 'pointer'
                }}
              />

              {/* Product Thumbnail */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: 'var(--bg-subtle)',
                  flexShrink: 0
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Details & Controls */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: 'var(--text-main)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.title}
                </h4>

                {item.selectedColor && (
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 2 }}>
                    Variant: <span style={{ fontWeight: 600 }}>{item.selectedColor}</span>
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 8
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>
                    ${item.price.toFixed(2)}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div className="quantity-stepper">
                      <button
                        className="stepper-btn"
                        style={{ width: 26, height: 26 }}
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="stepper-value" style={{ width: 24, fontSize: '12px' }}>
                        {item.quantity}
                      </span>
                      <button
                        className="stepper-btn"
                        style={{ width: 26, height: 26 }}
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedColor)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: 'var(--text-tertiary)',
                        cursor: 'pointer',
                        padding: 4,
                        display: 'flex'
                      }}
                      title="Remove Item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Voucher Input */}
      <form onSubmit={handleApplyVoucher} style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <div
            className="search-input-wrapper"
            style={{ flex: 1, padding: '7px 12px', background: '#fff' }}
          >
            <Tag size={15} color="#94a3b8" />
            <input
              type="text"
              placeholder="Promo code (e.g. VANDA10)"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              background: 'var(--text-main)',
              color: '#fff',
              border: 'none',
              padding: '0 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Apply
          </button>
        </div>
        {voucherMessage && (
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              marginTop: 5,
              color: voucherMessage.type === 'success' ? 'var(--success)' : 'var(--primary)'
            }}
          >
            {voucherMessage.text}
          </div>
        )}
      </form>

      {/* Summary Box */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          fontSize: '12.5px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>Selected Subtotal</span>
          <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>${subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
          <span>Estimated Shipping</span>
          <span style={{ fontWeight: 600, color: shippingFee === 0 ? 'var(--success)' : 'var(--text-main)' }}>
            {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
          </span>
        </div>
        {appliedDiscount > 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)' }}>
            <span>Voucher Discount</span>
            <span style={{ fontWeight: 700 }}>-${appliedDiscount.toFixed(2)}</span>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-light)',
            paddingTop: 10,
            marginTop: 4,
            fontSize: '14px',
            fontWeight: 800,
            color: 'var(--text-main)'
          }}
        >
          <span>Total Payment</span>
          <span style={{ color: 'var(--primary)', fontSize: '18px' }}>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Sticky Bottom Checkout Action Bar */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'var(--bg-bottom-nav)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-default)',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 45,
          boxShadow: '0 -4px 16px rgba(15, 23, 42, 0.06)'
        }}
      >
        <div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Total ({activeItems.length} items)</div>
          <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)' }}>${total.toFixed(2)}</div>
        </div>

        <button
          className="btn-primary-action"
          style={{ flex: 'none', padding: '12px 24px' }}
          disabled={activeItems.length === 0}
          onClick={() =>
            onProceedToCheckout({
              items: activeItems,
              subtotal,
              shippingFee,
              discount: appliedDiscount,
              total
            })
          }
        >
          <span>Checkout</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
