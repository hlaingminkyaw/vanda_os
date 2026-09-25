import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Truck,
  CreditCard,
  Banknote,
  QrCode,
  ShieldCheck
} from 'lucide-react';
import { SAVED_ADDRESSES, DELIVERY_OPTIONS, PAYMENT_METHODS } from '../data/dummyData';

export default function CheckoutView({
  checkoutData,
  onBackToCart,
  onPlaceOrder
}) {
  const [selectedAddressId, setSelectedAddressId] = useState(SAVED_ADDRESSES[0].id);
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(DELIVERY_OPTIONS[0].id);
  const [selectedPaymentId, setSelectedPaymentId] = useState(PAYMENT_METHODS[0].id);
  const [isPlacing, setIsPlacing] = useState(false);

  const currentAddress = SAVED_ADDRESSES.find((a) => a.id === selectedAddressId) || SAVED_ADDRESSES[0];
  const currentDelivery = DELIVERY_OPTIONS.find((d) => d.id === selectedDeliveryId) || DELIVERY_OPTIONS[0];
  const currentPayment = PAYMENT_METHODS.find((p) => p.id === selectedPaymentId) || PAYMENT_METHODS[0];

  const subtotal = checkoutData?.subtotal || 0;
  const shippingFee = currentDelivery.price;
  const discount = checkoutData?.discount || 0;
  const grandTotal = Math.max(0, subtotal + shippingFee - discount);

  const handleConfirmOrder = () => {
    setIsPlacing(true);
    setTimeout(() => {
      onPlaceOrder({
        address: currentAddress,
        delivery: currentDelivery,
        payment: currentPayment,
        items: checkoutData.items,
        subtotal,
        shippingFee,
        discount,
        total: grandTotal
      });
      setIsPlacing(false);
    }, 600);
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#f8fafc',
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
        <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>
          Checkout Order
        </span>
        <div style={{ width: 38 }} />
      </div>

      {/* Scrollable Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px', paddingBottom: '90px' }}>
        {/* Step 2 in Visual Flow: Delivery Address */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700 }}>
              <MapPin size={16} color="var(--primary)" />
              <span>Delivery Address</span>
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
              Step 2 of Visual Flow
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

        {/* Shipping Method Option */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700, marginBottom: 10 }}>
            <Truck size={16} color="var(--primary)" />
            <span>Shipping & Courier Service</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DELIVERY_OPTIONS.map((opt) => {
              const isSelected = selectedDeliveryId === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedDeliveryId(opt.id)}
                  style={{
                    border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                    background: isSelected ? 'var(--primary-light)' : '#ffffff',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => setSelectedDeliveryId(opt.id)}
                      style={{ accentColor: 'var(--primary)' }}
                    />
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-main)' }}>
                        {opt.name}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                        Carrier: <strong>{opt.carrier}</strong> ({opt.estimatedDays})
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: opt.price === 0 ? 'var(--success)' : 'var(--text-main)' }}>
                    {opt.price === 0 ? 'FREE' : `$${opt.price.toFixed(2)}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3 in Visual Flow: Make Payment */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 12
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700 }}>
              <Banknote size={16} color="var(--primary)" />
              <span>Select Payment Method</span>
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
              Step 3 of Visual Flow
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {PAYMENT_METHODS.map((pm) => {
              const isSelected = selectedPaymentId === pm.id;
              const IconComp = pm.id === 'cod' ? Banknote : pm.id === 'online_card' ? CreditCard : QrCode;

              return (
                <div
                  key={pm.id}
                  onClick={() => setSelectedPaymentId(pm.id)}
                  style={{
                    border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                    background: isSelected ? 'var(--primary-light)' : '#ffffff',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}
                >
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => setSelectedPaymentId(pm.id)}
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: isSelected ? 'var(--primary)' : 'var(--bg-subtle)',
                      color: isSelected ? '#ffffff' : 'var(--text-body)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={16} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-main)' }}>
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
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 1 }}>
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
            background: '#ffffff',
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
            background: '#ffffff',
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
            <span>Shipping Option ({currentDelivery.name})</span>
            <span style={{ fontWeight: 600, color: shippingFee === 0 ? 'var(--success)' : 'var(--text-main)' }}>
              {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
            </span>
          </div>
          {discount > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)' }}>
              <span>Voucher Savings</span>
              <span style={{ fontWeight: 700 }}>-${discount.toFixed(2)}</span>
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

      {/* Fixed Bottom Order Button */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
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
          style={{ flex: 'none', padding: '12px 28px' }}
          onClick={handleConfirmOrder}
          disabled={isPlacing}
        >
          {isPlacing ? (
            <span>Processing...</span>
          ) : (
            <>
              <ShieldCheck size={16} />
              <span>Place Order</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
