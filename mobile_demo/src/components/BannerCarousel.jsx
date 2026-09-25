import React, { useState, useEffect } from 'react';
import { BANNERS } from '../data/dummyData';

export default function BannerCarousel({ onBannerClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = BANNERS[currentIndex];

  return (
    <div className="hero-banner-container">
      <div
        className="hero-banner-card"
        style={{
          backgroundImage: `url(${currentBanner.image})`
        }}
        onClick={() => onBannerClick && onBannerClick(currentBanner)}
      >
        <div className="hero-banner-content">
          <span className="banner-badge-tag">{currentBanner.badge}</span>
          <h2 className="banner-title">{currentBanner.title}</h2>
          <p className="banner-subtitle">{currentBanner.subtitle}</p>
        </div>
      </div>

      <div className="banner-dots">
        {BANNERS.map((banner, idx) => (
          <div
            key={banner.id}
            className={`banner-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
