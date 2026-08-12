import React from 'react';

export default function MarqueeTicker() {
  const tickerItems = [
    'YEARS EXPERIENCE',
    '299+ DELIVERIES',
    '99% POSITIVE REVIEWS',
    '6 YEARS EXP',
    '200+ TRUSTED CLIENTS'
  ];

  return (
    <div className="d2-ticker-banner">
      <div className="d2-ticker-track">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="d2-ticker-item">
            <span>{item}</span>
            <span className="ticker-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
