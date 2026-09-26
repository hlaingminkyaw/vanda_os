import React from 'react';
import { ShoppingBag, Bell, Search, X, Sparkles } from 'lucide-react';

export default function Header({
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  onTabChange
}) {
  return (
    <header className="app-header-sticky">
      <div className="header-top-row">
        <div className="header-brand" onClick={() => onTabChange('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Vanda"
            style={{
              height: 36,
              width: 'auto',
              maxHeight: 36,
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        <div className="header-actions">
          <button
            className="icon-btn-ghost"
            onClick={() => onTabChange('orders')}
            title="Orders & Tracking"
            aria-label="Orders"
          >
            <Bell size={18} />
          </button>
          <button
            className="icon-btn-ghost"
            onClick={onOpenCart}
            title="Shopping Cart"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="badge-counter">{cartCount}</span>}
          </button>
        </div>
      </div>

      <div className="search-input-wrapper">
        <Search size={16} color="#64748b" />
        <input
          type="text"
          placeholder="Search headphones, oak desk, flasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 2, display: 'flex' }}
          >
            <X size={15} color="#94a3b8" />
          </button>
        )}
      </div>
    </header>
  );
}
