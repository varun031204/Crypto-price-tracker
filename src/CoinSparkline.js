import React from 'react';

const CoinSparkline = ({ prices, change7d }) => {
  if (!prices || prices.length < 2) return null;

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;

  const toPoint = (price, i) => {
    const x = (i / (prices.length - 1)) * 100;
    const y = 40 - ((price - min) / range) * 36 - 2;
    return `${x},${y}`;
  };

  const linePoints = prices.map(toPoint).join(' ');
  const areaPoints = `${linePoints} 100,40 0,40`;
  const color = change7d >= 0 ? '#16c784' : '#ea3943';
  const gradientId = change7d >= 0 ? 'posGrad' : 'negGrad';

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={areaPoints} fill={`url(#${gradientId})`} strokeWidth="0" />
      <polyline points={linePoints} stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
};

export default CoinSparkline;