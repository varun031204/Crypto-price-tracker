import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from './store';
import CryptoTable from './CryptoTable';
import ThemeToggle from './ThemeToggle';

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.crypto.status);

  useEffect(() => {
    // Initial fetch
    dispatch(fetchCryptoData());
    
    // Set up interval for real-time updates (every 30 seconds)
    const interval = setInterval(() => {
      dispatch(fetchCryptoData());
    }, 30000); // CoinGecko API has rate limits, so we use 30s interval
    
    return () => clearInterval(interval);
  }, [dispatch]);

  return <CryptoTable />;
};

export default App;