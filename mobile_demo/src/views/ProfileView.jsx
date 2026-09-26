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
  Headphones,
  Sun,
  Moon
} from 'lucide-react';
import { SAVED_ADDRESSES } from '../data/dummyData';

export default function ProfileView({
  onNavigateToOrders,
  orders,
  theme = 'light',
  onToggleTheme,
  onSetTheme
}) {
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
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e39d3d 0%, #cb8527 100%)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '17px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              AM
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>Alex Morgan</h3>
              <div style={{ fontSize: '11.5px', color: '#94a3b8', marginTop: 2 }}>
                alex.morgan@email.com
              </div>
            </div>
          </div>

          {/* Quick Header Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="theme-toggle-header-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={13} color="#f59e0b" /> : <Moon size={13} color="#cbd5e1" />}
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Dedicated Appearance & Theme Switcher Card */}
      <div className="theme-switch-card">
        <div className="theme-switch-header">
          <div className="theme-switch-title-wrap">
            {theme === 'dark' ? <Moon size={16} color="var(--primary)" /> : <Sun size={16} color="var(--primary)" />}
            <span>App Appearance & Theme</span>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'capitalize' }}>
            {theme} Mode
          </span>
        </div>

        <div className="theme-toggle-segmented">
          <button
            className={`theme-option-btn ${theme === 'light' ? 'active light-active' : ''}`}
            onClick={() => onSetTheme && onSetTheme('light')}
            type="button"
          >
            <Sun size={15} />
            <span>Light Theme</span>
          </button>

          <button
            className={`theme-option-btn ${theme === 'dark' ? 'active dark-active' : ''}`}
            onClick={() => onSetTheme && onSetTheme('dark')}
            type="button"
          >
            <Moon size={15} />
            <span>Dark Theme</span>
          </button>
        </div>
      </div>

      {/* Order Status Navigation Section (Like Shopee Me page) */}
      <div
        style={{
          background: 'var(--bg-surface)',
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
          background: 'var(--bg-surface)',
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
          background: 'var(--bg-surface)',
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
