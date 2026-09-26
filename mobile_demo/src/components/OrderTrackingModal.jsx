import React from 'react';
import {
  ArrowLeft,
  Truck,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
  Info,
  Clock,
  Package
} from 'lucide-react';

export default function OrderTrackingModal({ order, onClose, onAdvanceStep }) {
  if (!order) return null;

  const isCompleted = order.status === 'completed';
  const isConfirmed = order.status === 'confirmed';
  const isDateSet = order.status === 'date_set';
  const isInDelivery = order.status === 'in_delivery';

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'var(--bg-app)',
        zIndex: 80,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'slideRightIn 200ms ease'
      }}
    >
      {/* Top Bar */}
      <div className="detail-nav-top">
        <button className="icon-btn-ghost" onClick={onClose} aria-label="Back">
          <ArrowLeft size={18} />
        </button>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)', display: 'block' }}>
            Order Status & Timeline
          </span>
          <span style={{ fontSize: '10.5px', color: 'var(--text-tertiary)', fontWeight: 600 }}>
            {order.id}
          </span>
        </div>
        <div style={{ width: 38 }} />
      </div>

      {/* Scrollable Timeline */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px', paddingBottom: '30px' }}>
        
        {/* Status Highlight Banner */}
        <div
          style={{
            background: isCompleted ? 'var(--success-bg)' : '#ffffff',
            border: `1px solid ${isCompleted ? 'var(--success-border)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginBottom: 14,
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: isCompleted ? 'var(--success)' : isConfirmed ? 'var(--info)' : 'var(--primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {isCompleted ? <CheckCircle2 size={20} /> : isConfirmed ? <Clock size={20} /> : <Truck size={20} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)' }}>
                {order.statusText}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                {order.deliveryServiceNotice || 'Shop has received order and is managing dispatch.'}
              </div>
            </div>
          </div>

          {/* Estimated Arrival Date Box (Step 5 of Customer Mobile App Flow) */}
          <div
            style={{
              background: 'var(--bg-app)',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 14px',
              border: '1px solid var(--border-light)',
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }}
          >
            <Calendar size={18} color="var(--primary)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                Estimated Arrival Date (Step 5 - Provided by Shop)
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)', marginTop: 2 }}>
                {order.estimatedArrival || 'Pending Shop Arrangement with Courier'}
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Flow Note (Direct quote & design from docs/visual flow.png) */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 14
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12.5px', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
            <Info size={16} color="var(--primary)" />
            <span>Delivery Flow (Scope Rules)</span>
          </div>

          <div style={{ fontSize: '11.5px', color: 'var(--text-body)', lineHeight: 1.45, background: 'var(--bg-subtle)', padding: '10px 12px', borderRadius: 'var(--radius-sm)' }}>
            <strong>Important Note from visual flow:</strong><br />
            • Admin arranges with delivery service manually.<br />
            • Delivery service provides estimated arrival date.<br />
            • Admin enters estimated date into system.<br />
            • <em>Customer can only see the estimated arrival date.</em><br />
            • When the item arrives, admin inquires the delivery service and closes the order.
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: 10 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Delivery Service:</span>
            <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{order.deliveryService || 'Arranged by Shop'}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: 6 }}>
            <span style={{ color: 'var(--text-secondary)' }}>Payment:</span>
            <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>
              {order.paymentMethod} • <span style={{ color: isCompleted || order.paymentType === 'online' ? 'var(--success)' : 'var(--warning)' }}>{order.paymentStatus}</span>
            </span>
          </div>

          {/* Interactive Fast Forward for Demo Testing */}
          {onAdvanceStep && !isCompleted && (
            <button
              onClick={() => onAdvanceStep(order.id)}
              style={{
                marginTop: 12,
                width: '100%',
                background: 'var(--primary-light)',
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
              <Sparkles size={14} />
              <span>
                {isConfirmed && 'Simulate Step 5: Admin Enters Estimated Arrival Date'}
                {isDateSet && 'Simulate Step 6: Package Handed to Courier (In Delivery)'}
                {isInDelivery && 'Simulate Step 7: Courier Delivers & Admin Closes Order'}
              </span>
            </button>
          )}
        </div>

        {/* 7-Step Visual Flow Stepper (docs/visual flow.png) */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '16px',
            marginBottom: 14
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
              7-Step Customer Mobile App Flow
            </h4>
            <span
              style={{
                fontSize: '9.5px',
                fontWeight: 700,
                color: 'var(--primary)',
                background: 'var(--primary-light)',
                padding: '2px 6px',
                borderRadius: 4
              }}
            >
              Flow Scope
            </span>
          </div>

          <div className="timeline-stepper">
            {order.timeline?.map((step, idx) => {
              let stepClass = '';
              if (step.done) stepClass = 'done';
              else if (
                (idx === 3 && isConfirmed) ||
                (idx === 4 && isDateSet) ||
                (idx === 5 && isInDelivery)
              ) {
                stepClass = 'active';
              }

              return (
                <div key={idx} className={`timeline-step-item ${stepClass}`}>
                  <div className="timeline-dot">
                    {step.done ? <CheckCircle2 size={12} /> : <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
                  </div>
                  <div className="timeline-step-title">{step.title}</div>
                  <div className="timeline-step-desc">{step.desc}</div>
                  <div className="timeline-step-time">{step.time}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Destination Address */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px',
            marginBottom: 14,
            display: 'flex',
            gap: 10
          }}
        >
          <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--text-main)' }}>
              Delivery Destination (Step 2)
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.4 }}>
              {order.address}
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div
          style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            padding: '14px'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: 10, color: 'var(--text-main)' }}>
            Items Summary
          </div>
          {order.items?.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                paddingBottom: 8,
                marginBottom: 8,
                borderBottom: idx < order.items.length - 1 ? '1px solid var(--border-light)' : 'none'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: 44, height: 44, borderRadius: 6, objectFit: 'cover' }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                  Qty: {item.qty} {item.color ? `• ${item.color}` : ''}
                </div>
              </div>
              <div style={{ fontSize: '12.5px', fontWeight: 700 }}>
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 8,
              borderTop: '1px dashed var(--border-default)',
              fontSize: '13.5px',
              fontWeight: 800
            }}
          >
            <span>Total Amount:</span>
            <span style={{ color: 'var(--primary)' }}>${order.total?.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
