import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ status }) => {
  return (
    <div className="crypto-header">
      <div className="logo-container">
        <h1>Crypto Tracker</h1>
        <div className="tagline">Real-time cryptocurrency prices</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div className="update-status">
          {status === 'loading' ? 'Updating...' : 'Last updated: ' + new Date().toLocaleTimeString()}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;