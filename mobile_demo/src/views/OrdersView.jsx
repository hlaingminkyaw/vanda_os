import React, { useState } from 'react';
import { Package, Truck, ChevronRight, Calendar, CheckCircle2, Clock } from 'lucide-react';

export default function OrdersView({ orders, onSelectOrder }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredOrders = orders.filter((o) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'confirmed') return o.status === 'confirmed' || o.status === 'date_set';
    if (activeFilter === 'in_delivery') return o.status === 'in_delivery';
    if (activeFilter === 'completed') return o.status === 'completed';
    return true;
  });

  return (
    <div style={{ padding: '14px', paddingBottom: '90px' }}>
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
          My Orders & Tracking
        </h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: 2 }}>
          Customer Mobile App Flow (Steps 4 to 7)
        </p>
      </div>

      {/* Filter Tabs matching visual flow states */}
      <div
        style={{
          display: 'flex',
          gap: 4,
          background: 'var(--bg-subtle)',
          padding: 3,
          borderRadius: 'var(--radius-full)',
          marginBottom: 16
        }}
      >
        <button
          className={`feed-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          style={{ flex: 1, padding: '7px 0', textAlign: 'center', fontSize: '11px' }}
          onClick={() => setActiveFilter('all')}
        >
          All ({orders.length})
        </button>
        <button
          className={`feed-tab-btn ${activeFilter === 'confirmed' ? 'active' : ''}`}
          style={{ flex: 1, padding: '7px 0', textAlign: 'center', fontSize: '11px' }}
          onClick={() => setActiveFilter('confirmed')}
        >
          Confirmed ({orders.filter((o) => o.status === 'confirmed' || o.status === 'date_set').length})
        </button>
        <button
          className={`feed-tab-btn ${activeFilter === 'in_delivery' ? 'active' : ''}`}
          style={{ flex: 1, padding: '7px 0', textAlign: 'center', fontSize: '11px' }}
          onClick={() => setActiveFilter('in_delivery')}
        >
          In Delivery ({orders.filter((o) => o.status === 'in_delivery').length})
        </button>
        <button
          className={`feed-tab-btn ${activeFilter === 'completed' ? 'active' : ''}`}
          style={{ flex: 1, padding: '7px 0', textAlign: 'center', fontSize: '11px' }}
          onClick={() => setActiveFilter('completed')}
        >
          Completed ({orders.filter((o) => o.status === 'completed').length})
        </button>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-secondary)' }}>
          <Package size={36} color="var(--text-tertiary)" style={{ margin: '0 auto 10px' }} />
          <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>No orders in this tab</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filteredOrders.map((order) => {
            const isCompleted = order.status === 'completed';
            const isConfirmed = order.status === 'confirmed';
            const isDateSet = order.status === 'date_set';
            const firstItem = order.items?.[0];

            return (
              <div
                key={order.id}
                onClick={() => onSelectOrder(order)}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: 10,
                    borderBottom: '1px solid var(--border-light)',
                    marginBottom: 10
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Package size={15} color="var(--text-secondary)" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-main)' }}>
                      {order.id}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>• {order.date}</span>
                  </div>

                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: isCompleted
                        ? 'var(--success-bg)'
                        : isConfirmed
                        ? 'var(--info-bg)'
                        : 'var(--primary-light)',
                      color: isCompleted
                        ? 'var(--success)'
                        : isConfirmed
                        ? 'var(--info)'
                        : 'var(--primary)',
                      border: `1px solid ${
                        isCompleted
                          ? 'var(--success-border)'
                          : isConfirmed
                          ? 'var(--info-border)'
                          : 'var(--primary-border)'
                      }`
                    }}
                  >
                    {order.statusText}
                  </span>
                </div>

                {/* Primary Item Preview */}
                {firstItem && (
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                    <img
                      src={firstItem.image}
                      alt={firstItem.title}
                      style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {firstItem.title}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 2 }}>
                        Qty: {firstItem.qty} {order.items.length > 1 ? `(+${order.items.length - 1} more items)` : ''}
                      </div>
                    </div>
                  </div>
                )}

                {/* Estimated Arrival Date Info Box (Step 5 in visual flow.png) */}
                <div
                  style={{
                    background: 'var(--bg-app)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '8px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '11.5px',
                    marginBottom: 10
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-body)' }}>
                    <Calendar size={14} color="var(--primary)" />
                    <span>
                      Estimated Arrival: <strong>{order.estimatedArrival}</strong>
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                    Provided by Shop
                  </span>
                </div>

                {/* Footer with Payment & Total */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 4 }}>
                  <div>
                    <div style={{ fontSize: '10.5px', color: 'var(--text-tertiary)' }}>
                      {order.paymentMethod}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-main)' }}>
                      ${order.total?.toFixed(2)}
                    </div>
                  </div>

                  <button
                    style={{
                      border: '1px solid var(--border-default)',
                      background: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    <span>View Timeline</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
