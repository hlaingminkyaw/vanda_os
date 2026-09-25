import React from 'react';
import { Home, LayoutGrid, ShoppingBag, Package, User } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange, cartCount, activeOrdersCount }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: LayoutGrid },
    { id: 'cart', label: 'Cart', icon: ShoppingBag, badge: cartCount },
    { id: 'orders', label: 'Orders', icon: Package, badge: activeOrdersCount },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="bottom-nav-bar" aria-label="Bottom Navigation">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            className={`nav-tab-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-label={tab.label}
          >
            <div className="nav-tab-icon-wrapper">
              <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} />
              {tab.badge > 0 && <span className="nav-badge-pill">{tab.badge}</span>}
            </div>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
