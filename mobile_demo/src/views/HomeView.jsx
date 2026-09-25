import React, { useState } from 'react';
import CategoryBar from '../components/CategoryBar';
import BannerCarousel from '../components/BannerCarousel';
import PerksBar from '../components/PerksBar';
import ProductCard from '../components/ProductCard';

export default function HomeView({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  searchQuery
}) {
  const [activeSort, setActiveSort] = useState('recommended');

  // Filter products by category & search query
  let filtered = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (activeSort === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (activeSort === 'price_low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price_high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      {/* Category Horizontal Filter */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      {/* Promotional Carousel */}
      {!searchQuery && selectedCategory === 'all' && (
        <>
          <BannerCarousel />
          <PerksBar />
        </>
      )}

      {/* Main Products Grid */}
      <section className="section-product-feed">
        <div className="feed-header">
          <div className="feed-title">
            <span>
              {searchQuery
                ? `Results for "${searchQuery}"`
                : selectedCategory === 'all'
                ? 'Daily Discover'
                : `${selectedCategory.toUpperCase()} Selection`}
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 500 }}>
              ({filtered.length})
            </span>
          </div>

          <div className="feed-filter-tabs">
            <button
              className={`feed-tab-btn ${activeSort === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveSort('recommended')}
            >
              Popular
            </button>
            <button
              className={`feed-tab-btn ${activeSort === 'rating' ? 'active' : ''}`}
              onClick={() => setActiveSort('rating')}
            >
              Top Rated
            </button>
            <button
              className={`feed-tab-btn ${activeSort === 'price_low' ? 'active' : ''}`}
              onClick={() => setActiveSort('price_low')}
            >
              Price
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              color: 'var(--text-secondary)'
            }}
          >
            <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-main)', marginBottom: 6 }}>
              No matching products found
            </p>
            <p style={{ fontSize: '12px' }}>Try searching with another keyword or browse all categories.</p>
          </div>
        ) : (
          <div className="product-card-grid">
            {filtered.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
