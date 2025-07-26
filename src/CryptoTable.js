import React from 'react';
import { useSelector } from 'react-redux';
import { selectAssets } from './store';
import PriceCell from './PriceCell';
import Header from './Header';
import MarketTrend from './MarketTrend';
import CoinSparkline from './CoinSparkline';
import './styles.css';

const CryptoTable = () => {
  const assets = useSelector(selectAssets);
  const status = useSelector(state => state.crypto.status);
  const error = useSelector(state => state.crypto.error);
  const previousPrices = useSelector(state => state.crypto.previousPrices);

  const formatNumber = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  const formatSupply = (num) => {
    if (!num) return 'N/A';
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return num.toLocaleString();
  };

  if (status === 'loading' && assets.length === 0) {
    return (
      <div className="crypto-container">
        <div className="crypto-header">
          <h1>Crypto Price Tracker</h1>
        </div>
        <div className="loading">Loading crypto data...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="crypto-container">
        <div className="crypto-header">
          <h1>Crypto Price Tracker</h1>
        </div>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="crypto-container">
      <Header status={status} />
      <MarketTrend />
      <div style={{ overflowX: 'auto' }}>
        <table className="crypto-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>Volume(24h)</th>
              <th>Circulating Supply</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={asset.id}>
                <td>{index + 1}</td>
                <td className="coin-name-cell">
                  {asset.image && <img src={asset.image} alt={asset.name} className="coin-logo" />}
                  <div>
                    <strong>{asset.name}</strong> <span style={{ color: '#666' }}>{asset.symbol}</span>
                  </div>
                </td>
                <PriceCell price={asset.price} previousPrice={previousPrices[asset.id]} />
                <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>
                  {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                </td>
                <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>
                  {asset.change7d >= 0 ? '+' : ''}{asset.change7d.toFixed(2)}%
                </td>
                <td>{formatNumber(asset.marketCap)}</td>
                <td>{formatNumber(asset.volume24h)}</td>
                <td>
                  {formatSupply(asset.circulatingSupply)} {asset.maxSupply && `/ ${formatSupply(asset.maxSupply)}`}
                </td>
                <td className="chart-container">
                  <CoinSparkline change7d={asset.change7d} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;