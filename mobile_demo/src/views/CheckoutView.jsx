import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Truck,
  CreditCard,
  Banknote,
  Tag,
  ShieldCheck,
  Info
} from 'lucide-react';
import { SAVED_ADDRESSES, PAYMENT_METHODS, DEFAULT_DELIVERY_INFO } from '../data/dummyData';

export default function CheckoutView({
  checkoutData,
  onBackToCart,
  onPlaceOrder
}) {
  const [selectedAddressId, setSelectedAddressId] = useState(SAVED_ADDRESSES[0].id);
  const [selectedPaymentId, setSelectedPaymentId] = useState(PAYMENT_METHODS[0].id);
  const [voucherCode, setVoucherCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(checkoutData?.discount || 0);
  const [voucherMsg, setVoucherMsg] = useState(
    checkoutData?.discount > 0 ? { type: 'success', text: `Voucher discount $${checkoutData.discount.toFixed(2)} applied` } : null
  );
  const [isPlacing, setIsPlacing] = useState(false);

  const currentAddress = SAVED_ADDRESSES.find((a) => a.id === selectedAddressId) || SAVED_ADDRESSES[0];
  const currentPayment = PAYMENT_METHODS.find((p) => p.id === selectedPaymentId) || PAYMENT_METHODS[0];

  const subtotal = checkoutData?.subtotal || 0;
  const shippingFee = DEFAULT_DELIVERY_INFO.price;
  const grandTotal = Math.max(0, subtotal + shippingFee - discountAmount);

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    const code = voucherCode.trim().toUpperCase();
    if (code === 'VANDA10' || code === 'LUMINA10' || code === 'SAVE10') {
      setDiscountAmount(10.00);
      setVoucherMsg({ type: 'success', text: '$10.00 discount voucher applied!' });
    } else if (code === 'FREESHIP') {
      setDiscountAmount(5.00);
      setVoucherMsg({ type: 'success', text: '$5.00 discount voucher applied!' });
    } else {
      setVoucherMsg({ type: 'error', text: 'Invalid code. Try "VANDA10"' });
    }
  };

  const handleConfirmOrder = () => {
    setIsPlacing(true);
    setTimeout(() => {
      onPlaceOrder({
        address: currentAddress,
        delivery: DEFAULT_DELIVERY_INFO,
        payment: currentPayment,
        items: checkoutData.items,
        subtotal,
        shippingFee,
        discount: discountAmount,
        total: grandTotal
      });
      setIsPlacing(false);
    }, 500);
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--bg-app)',
        zIndex: 65,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Top Header */}
      <div className="detail-nav-top">
        <button className="icon-btn-ghost" onClick={onBackToCart} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', display: 'block' }}>
            Checkout & Payment
          </span>
          <span style={{ fontSize: '10.5px', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Steps 2 & 3 of Customer Flow
          </span>
        </div>
        <div style={{ width: 38 }} />
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px', paddingBottom: '90px' }}>
        
        {/* Step 2 in Visual Flow: Delivery Address */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700 }}>
              <MapPin size={16} color="var(--primary)" />
              <span>Select Delivery Address</span>
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
            >
              Step 2: Checkout
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {SAVED_ADDRESSES.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              return (
                <div
                  key={addr.id}
                  onClick={() => setSelectedAddressId(addr.id)}
                  style={{
                    border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                    background: isSelected ? 'var(--primary-light)' : '#ffffff',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10
                  }}
                >
                  <input
                    type="radio"
                    name="addressSelection"
                    checked={isSelected}
                    onChange={() => setSelectedAddressId(addr.id)}
                    style={{ marginTop: 2, accentColor: 'var(--primary)' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {addr.recipientName}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{addr.phone}</span>
                      {addr.isDefault && (
                        <span
                          style={{
                            fontSize: '9px',
                            background: '#e2e8f0',
                            color: '#334155',
                            padding: '1px 5px',
                            borderRadius: '3px',
                            fontWeight: 700
                          }}
                        >
                          {addr.label}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-body)', marginTop: 3 }}>
                      {addr.street}, {addr.district}
                    </div>
                    {addr.notes && (
                      <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: 2 }}>
                        Note: {addr.notes}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Flow Note Card (Per docs/visual flow.png: Delivery service & arrival date arranged by shop) */}
        <div
          style={{
            background: 'var(--bg-app)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '12px 14px',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10
          }}
        >
          <Truck size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div style={{ fontSize: '11.5px', lineHeight: 1.4, color: 'var(--text-body)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 2 }}>
              Delivery Arranged by Shop (Doorstep Delivery)
            </div>
            Delivery is arranged manually with a delivery service once items are prepared. You will be able to view the estimated arrival date once scheduled.
          </div>
        </div>

        {/* Step 2: Discount Voucher (if available) */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700 }}>
              <Tag size={16} color="var(--primary)" />
              <span>Apply Discount (If Available)</span>
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
            >
              Step 2: Discount
            </span>
          </div>

          <form onSubmit={handleApplyVoucher} style={{ display: 'flex', gap: 8 }}>
            <div
              className="search-input-wrapper"
              style={{ flex: 1, padding: '6px 12px', background: 'var(--bg-subtle)' }}
            >
              <input
                type="text"
                placeholder="Discount code (e.g. VANDA10)"
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
          </form>

          {voucherMsg && (
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                marginTop: 6,
                color: voucherMsg.type === 'success' ? 'var(--success)' : 'var(--primary)'
              }}
            >
              {voucherMsg.text}
            </div>
          )}
        </div>

        {/* Step 3 in Visual Flow: Make Payment */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700 }}>
              <Banknote size={16} color="var(--primary)" />
              <span>Choose Payment Method</span>
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
            >
              Step 3: Make Payment
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {PAYMENT_METHODS.map((pm) => {
              const isSelected = selectedPaymentId === pm.id;
              const IconComp = pm.type === 'cod' ? Banknote : CreditCard;

              return (
                <div
                  key={pm.id}
                  onClick={() => setSelectedPaymentId(pm.id)}
                  style={{
                    border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                    background: isSelected ? 'var(--primary-light)' : '#ffffff',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <input
                    type="radio"
                    name="paymentMethodSelection"
                    checked={isSelected}
                    onChange={() => setSelectedPaymentId(pm.id)}
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      background: isSelected ? 'var(--primary)' : 'var(--bg-subtle)',
                      color: isSelected ? '#ffffff' : 'var(--text-body)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {pm.name}
                      </span>
                      {pm.recommended && (
                        <span
                          style={{
                            fontSize: '9px',
                            background: 'var(--warning-bg)',
                            color: 'var(--warning)',
                            padding: '1px 5px',
                            borderRadius: '3px',
                            fontWeight: 800
                          }}
                        >
                          COD OPTION
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 2 }}>
                      {pm.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ordered Items Preview */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
            Order Items ({checkoutData.items?.length || 0})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {checkoutData.items?.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: '12px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 42, height: 42, borderRadius: 6, objectFit: 'cover' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '10.5px', color: 'var(--text-tertiary)' }}>
                    Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor}` : ''}
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            fontSize: '12.5px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
            <span>Item Subtotal</span>
            <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
            <span>Delivery Fee</span>
            <span style={{ fontWeight: 600, color: 'var(--success)' }}>FREE</span>
          </div>
          {discountAmount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)' }}>
              <span>Discount Voucher</span>
              <span style={{ fontWeight: 700 }}>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--border-light)',
              paddingTop: 8,
              marginTop: 4,
              fontSize: '14.5px',
              fontWeight: 800,
              color: 'var(--text-main)'
            }}
          >
            <span>Total Payment</span>
            <span style={{ color: 'var(--primary)', fontSize: '18px' }}>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'var(--bg-bottom-nav)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-default)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 40
        }}
      >
        <div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Total Payable</div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)' }}>
            ${grandTotal.toFixed(2)}
          </div>
        </div>

        <button
          className="btn-primary-action"
          style={{ flex: 'none', padding: '12px 24px' }}
          onClick={handleConfirmOrder}
          disabled={isPlacing}
        >
          {isPlacing ? (
            <span>Processing...</span>
          ) : (
            <>
              <ShieldCheck size={16} />
              <span>
                {currentPayment.type === 'cod' ? 'Confirm (Cash on Delivery)' : 'Pay Online & Confirm'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
