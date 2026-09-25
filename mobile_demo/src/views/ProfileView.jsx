import React from 'react';
import {
  CreditCard,
  Package,
  Truck,
  CheckCircle2,
  MapPin,
  Settings,
  ChevronRight,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { SAVED_ADDRESSES } from '../data/dummyData';

export default function ProfileView({ onNavigateToOrders, orders }) {
  const inDeliveryCount = orders.filter((o) => o.status === 'in_delivery' || o.status === 'confirmed').length;
  const completedCount = orders.filter((o) => o.status === 'completed').length;

  return (
    <div style={{ padding: '14px', paddingBottom: '90px' }}>
      {/* User Header Profile Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '18px 16px',
          marginBottom: 16,
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '18px',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
          >
            AM
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800 }}>Alex Morgan</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  background: 'rgba(255,255,255,0.15)',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  color: '#f8fafc'
                }}
              >
                PLATINUM MEMBER
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>• 1,420 pts</span>
            </div>
          </div>
        </div>

        {/* Quick Balance / Vouchers Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
            marginTop: 16,
            paddingTop: 14,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800 }}>$150.00</div>
            <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: 2 }}>Wallet Balance</div>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800 }}>4</div>
            <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: 2 }}>Active Vouchers</div>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800 }}>1,420</div>
            <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: 2 }}>Lumina Points</div>
          </div>
        </div>
      </div>

      {/* Order Status Navigation Section (Like Shopee Me page) */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-default)',
          padding: '14px',
          marginBottom: 14
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
            My Orders
          </span>
          <button
            onClick={() => onNavigateToOrders('all')}
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            View Purchase History <ChevronRight size={13} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center', gap: 6 }}>
          <div
            onClick={() => onNavigateToOrders('all')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', color: 'var(--text-body)' }}>
              <CreditCard size={20} />
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>To Pay</span>
          </div>

          <div
            onClick={() => onNavigateToOrders('in_delivery')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', color: 'var(--text-body)' }}>
              <Package size={20} />
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>To Ship</span>
          </div>

          <div
            onClick={() => onNavigateToOrders('in_delivery')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', color: 'var(--primary)' }}>
              <Truck size={20} />
              {inDeliveryCount > 0 && <span className="badge-counter">{inDeliveryCount}</span>}
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--primary)' }}>To Receive</span>
          </div>

          <div
            onClick={() => onNavigateToOrders('completed')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}
          >
            <div style={{ position: 'relative', color: 'var(--success)' }}>
              <CheckCircle2 size={20} />
              {completedCount > 0 && (
                <span className="badge-counter" style={{ background: 'var(--success)' }}>
                  {completedCount}
                </span>
              )}
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>Completed</span>
          </div>
        </div>
      </div>

      {/* Saved Delivery Addresses */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-default)',
          padding: '14px',
          marginBottom: 14
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '13px', fontWeight: 700, marginBottom: 10 }}>
          <MapPin size={16} color="var(--primary)" />
          <span>Saved Addresses ({SAVED_ADDRESSES.length})</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SAVED_ADDRESSES.map((addr) => (
            <div
              key={addr.id}
              style={{
                background: 'var(--bg-app)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-main)' }}>
                  {addr.label}
                </span>
                {addr.isDefault && (
                  <span
                    style={{
                      fontSize: '9px',
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      padding: '1px 5px',
                      borderRadius: 3,
                      fontWeight: 700
                    }}
                  >
                    DEFAULT
                  </span>
                )}
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-body)', marginTop: 2 }}>
                {addr.street}, {addr.district}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support & Policies Links */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-default)',
          overflow: 'hidden'
        }}
      >
        <div
          onClick={() => alert('Opening 24/7 customer concierge chat...')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 14px',
            borderBottom: '1px solid var(--border-light)',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12.5px', fontWeight: 600 }}>
            <Headphones size={17} color="var(--text-secondary)" />
            <span>Customer Help Center</span>
          </div>
          <ChevronRight size={14} color="var(--text-tertiary)" />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 14px',
            borderBottom: '1px solid var(--border-light)',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12.5px', fontWeight: 600 }}>
            <ShieldCheck size={17} color="var(--text-secondary)" />
            <span>Buyer Protection & Return Policy</span>
          </div>
          <ChevronRight size={14} color="var(--text-tertiary)" />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 14px',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '12.5px', fontWeight: 600 }}>
            <Settings size={17} color="var(--text-secondary)" />
            <span>App Preferences & Notifications</span>
          </div>
          <ChevronRight size={14} color="var(--text-tertiary)" />
        </div>
      </div>
    </div>
  );
}
