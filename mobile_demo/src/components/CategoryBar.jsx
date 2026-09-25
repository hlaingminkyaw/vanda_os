import React from 'react';
import { CATEGORIES } from '../data/dummyData';
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

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter-strip">
      {CATEGORIES.map((cat) => {
        const IconComponent = iconMap[cat.icon] || Sparkles;
        const isActive = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            className={`category-chip ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <IconComponent size={14} />
            <span>{cat.name}</span>
            {cat.badge && (
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '1px 5px',
                  borderRadius: '999px',
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--primary-light)',
                  color: isActive ? '#fff' : 'var(--primary)'
                }}
              >
                {cat.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
