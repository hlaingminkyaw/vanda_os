import React from 'react';
import { CATEGORIES } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import { Sparkles, Smartphone, Shirt, Home, Heart, Activity, Headphones } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Shirt: Shirt,
  Home: Home,
  Heart: Heart,
  Activity: Activity,
  Headphones: Headphones
};

export default function CategoriesView({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct
}) {
  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  const categoryProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: '14px' }}>
      <div style={{ marginBottom: 14 }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
          Browse Catalog
        </h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: 2 }}>
          Curated lifestyle, tech essentials, and Nordic crafted designs
        </p>
      </div>

      {/* Category Grid Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
          marginBottom: 20
        }}
      >
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] || Sparkles;
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'all' ? products.length : products.filter((p) => p.category === cat.id).length;

          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              style={{
                background: isSelected ? 'var(--text-main)' : 'var(--bg-surface)',
                color: isSelected ? 'var(--text-inverse)' : 'var(--text-main)',
                border: isSelected ? '1px solid var(--text-main)' : '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                gap: 6,
                transition: 'all var(--transition-fast)'
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: isSelected ? 'rgba(255,255,255,0.15)' : 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#ffffff' : 'var(--primary)'
                }}
              >
                <Icon size={16} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, lineHeight: 1.2 }}>
                {cat.name}
              </span>
              <span
                style={{
                  fontSize: '9.5px',
                  color: isSelected ? 'rgba(255,255,255,0.7)' : 'var(--text-tertiary)',
                  fontWeight: 600
                }}
              >
                {count} items
              </span>
            </div>
          );
        })}
      </div>

      {/* Filtered Products Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
          paddingBottom: 6,
          borderBottom: '1px solid var(--border-default)'
        }}
      >
        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
          {currentCategory.name} ({categoryProducts.length})
        </span>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => onSelectCategory('all')}
            style={{
              border: 'none',
              background: 'transparent',
              color: 'var(--primary)',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Reset to All
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="product-card-grid">
        {categoryProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </div>
  );
}
