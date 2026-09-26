import React from 'react';
import {
  CheckCircle2,
  Calendar,
  Truck,
  ArrowRight,
  PackageCheck,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

export default function OrderConfirmedModal({
  order,
  onViewTracking,
  onContinueShopping,
  onSimulateAdminAdvance
}) {
  if (!order) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--bg-app)',
        zIndex: 75,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'slideUp 240ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Content Container */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px', paddingBottom: '30px' }}>
        
        {/* Step 4 Confirmation Card */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-default)',
            padding: '24px 18px',
            textAlign: 'center',
            marginBottom: 16,
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--success-bg)',
              color: 'var(--success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
              border: '2px solid var(--success-border)'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              color: 'var(--primary)',
              background: 'var(--primary-light)',
              padding: '3px 10px',
              borderRadius: '999px',
              marginBottom: 8,
              border: '1px solid var(--primary-border)'
            }}
          >
            STEP 4: ORDER CONFIRMED
          </span>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: 4 }}>
            Order Confirmed!
          </h2>
          
          <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.4, maxWidth: 300, margin: '0 auto 12px' }}>
            Customer receives order confirmation. The shop has received your order and is verifying inventory.
          </p>

          <div
            style={{
              background: 'var(--bg-app)',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 14px',
              border: '1px solid var(--border-light)',
              display: 'inline-block',
              fontSize: '12px',
              color: 'var(--text-body)'
            }}
          >
            Order ID: <strong style={{ color: 'var(--text-main)' }}>{order.id}</strong> • Total: <strong style={{ color: 'var(--primary)' }}>${order.total?.toFixed(2)}</strong>
          </div>
        </div>

        {/* 7-Step Visual Flow Stepper Status */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '16px',
            marginBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-main)' }}>
              Customer Mobile App Flow
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-secondary)' }}>
              visual flow.png
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Steps 1-3 Completed */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12px' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                ✓
              </div>
              <span style={{ color: 'var(--text-secondary)' }}>
                1. Browse & Select • 2. Checkout • 3. Make Payment ({order.paymentMethod})
              </span>
            </div>

            {/* Step 4 Current */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '8px 10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--primary-border)'
              }}
            >
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px', fontWeight: 800 }}>
                4
              </div>
              <div style={{ flex: 1 }}>
                <div>4. Order Confirmed (Current)</div>
                <div style={{ fontSize: '10.5px', fontWeight: 500, color: 'var(--text-body)', marginTop: 1 }}>
                  Shop received order. Verifying items in warehouse/shop stock.
                </div>
              </div>
            </div>

            {/* Step 5 Next */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--bg-subtle)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px', fontWeight: 700 }}>
                5
              </div>
              <div>
                <strong style={{ color: 'var(--text-main)' }}>5. View Estimated Arrival Date</strong>
                <div style={{ fontSize: '10.5px' }}>Delivery service will provide arrival date to shop</div>
              </div>
            </div>

            {/* Steps 6 & 7 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12px', color: 'var(--text-tertiary)' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--bg-subtle)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px', fontWeight: 700 }}>
                6-7
              </div>
              <span style={{ fontSize: '11px' }}>
                6. Order In Delivery → 7. Order Completed
              </span>
            </div>
          </div>
        </div>

        {/* Admin Operations Flow Preview (From visual flow.png) */}
        <div
          style={{
            background: 'var(--bg-app)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 16
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12.5px', fontWeight: 700, color: 'var(--text-main)', marginBottom: 6 }}>
            <PackageCheck size={16} color="var(--primary)" />
            <span>Behind The Scenes: Shop Admin Flow</span>
          </div>
          <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            1. Admin verifies order details & checks stock.<br />
            2. Admin picks products and prepares for delivery.<br />
            3. Admin arranges with delivery service manually.<br />
            4. Delivery service provides estimated arrival date.<br />
            5. Admin enters estimated date into system for you to view.
          </p>

          {/* Interactive Demo Action: Fast Forward Admin Arrangement */}
          {onSimulateAdminAdvance && (
            <button
              onClick={() => onSimulateAdminAdvance(order.id)}
              style={{
                marginTop: 12,
                width: '100%',
                background: 'var(--bg-surface)',
                border: '1px dashed var(--primary)',
                color: 'var(--primary-deep)',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '11.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              <span>Simulate Admin Setting Estimated Arrival Date</span>
            </button>
          )}
        </div>

        {/* Primary Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            className="btn-primary-action"
            style={{ width: '100%', padding: '12px' }}
            onClick={onViewTracking}
          >
            <span>View Order Status & Timeline</span>
            <ArrowRight size={16} />
          </button>

          <button
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-default)',
              background: 'var(--bg-surface)',
              color: 'var(--text-body)',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
            onClick={onContinueShopping}
          >
            <ShoppingBag size={15} />
            <span>Continue Browsing Products</span>
          </button>
        </div>
      </div>
    </div>
  );
}
