import React from 'react';

const CoinSparkline = ({ change7d }) => {
  // Generate random but visually appealing sparkline points
  // In a real app, this would use actual historical data
  const generatePoints = () => {
    const points = [];
    const trend = change7d >= 0;
    const pointCount = 10;
    
    for (let i = 0; i < pointCount; i++) {
      const randomFactor = Math.random() * 0.4 + 0.8;
      const y = trend 
        ? 30 - (i * 2.5 * randomFactor) 
        : 10 + (i * 2 * randomFactor);
      points.push(`${i * (100 / (pointCount - 1))},${y}`);
    }
    
    return points.join(' ');
  };

  const strokeColor = change7d >= 0 ? '#16c784' : '#ea3943';
  const fillGradient = change7d >= 0 
    ? 'url(#positiveGradient)' 
    : 'url(#negativeGradient)';
  
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
      <defs>
        <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#16c784" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#16c784" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ea3943" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ea3943" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <polyline 
        points={generatePoints()}
        stroke={strokeColor} 
        strokeWidth="2" 
        fill="none"
      />
      
      <polyline 
        points={`${generatePoints()} 100,40 0,40`}
        fill={fillGradient}
        strokeWidth="0"
      />
    </svg>
  );
};

export default CoinSparkline;