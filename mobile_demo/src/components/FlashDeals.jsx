import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function FlashDeals({ products, onSelectProduct }) {
  const flashProducts = products.filter((p) => p.isFlashDeal);

  // Countdown timer simulation (hours : mins : secs)
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 42, s: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: 59, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return { h: 3, m: 59, s: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  if (flashProducts.length === 0) return null;

  return (
    <div className="section-flash-deals">
      <div className="flash-header">
        <div className="flash-title-group">
          <span className="flash-badge">
            <Zap size={13} fill="#fff" />
            FLASH SALE
          </span>
          <div className="flash-timer">
            <span className="timer-box">{pad(timeLeft.h)}</span>
            <span>:</span>
            <span className="timer-box">{pad(timeLeft.m)}</span>
            <span>:</span>
            <span className="timer-box">{pad(timeLeft.s)}</span>
          </div>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600 }}>
          Ends Soon
        </span>
      </div>

      <div className="flash-products-scroll">
        {flashProducts.map((prod) => (
          <div
            key={prod.id}
            className="flash-product-mini-card"
            onClick={() => onSelectProduct(prod)}
          >
            <div className="flash-card-img-wrap">
              <img src={prod.image} alt={prod.title} loading="lazy" />
              <span className="discount-tag-corner">{prod.discount}</span>
            </div>
            <div className="flash-price">${prod.price.toFixed(2)}</div>
            <div className="flash-sold-label">{prod.soldCount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
