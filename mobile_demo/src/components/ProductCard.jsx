import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="product-img-box">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.discount && (
          <span className="discount-tag-corner">{product.discount}</span>
        )}
      </div>

      <div className="product-card-body">
        <div className="product-tags-row">
          {product.tags && product.tags.slice(0, 2).map((t, idx) => {
            let cls = 'official';
            if (t.includes('Free')) cls = 'free-shipping';
            if (t.includes('COD')) cls = 'cod';
            return (
              <span key={idx} className={`tag-badge ${cls}`}>
                {t}
              </span>
            );
          })}
        </div>

        <h3 className="product-title">{product.title}</h3>

        <div className="product-price-row">
          <span className="price-currency">$</span>
          <span className="price-current">{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="price-original">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="product-meta-row">
          <div className="meta-rating">
            <Star size={12} />
            <span>{product.rating}</span>
          </div>
          <span style={{ fontSize: '10.5px' }}>{product.soldCount}</span>
        </div>
      </div>
    </div>
  );
}
