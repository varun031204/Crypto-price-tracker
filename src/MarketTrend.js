import React from 'react';
import { useSelector } from 'react-redux';
import { selectAssets } from './store';

const MarketTrend = () => {
  const assets = useSelector(selectAssets);
  
  if (assets.length === 0) return null;
  
  // Calculate overall market trend
  const positiveChanges = assets.filter(asset => asset.change24h > 0).length;
  const marketSentiment = positiveChanges > assets.length / 2 ? 'positive' : 'negative';
  const percentPositive = Math.round((positiveChanges / assets.length) * 100);
  
  return (
    <div className={`market-trend ${marketSentiment}`}>
      <div className="trend-label">Market Trend (24h):</div>
      <div className="trend-value">
        {marketSentiment === 'positive' ? 'Bullish' : 'Bearish'} 
        <span className="trend-percent">({percentPositive}% positive)</span>
      </div>
    </div>
  );
};

export default MarketTrend;