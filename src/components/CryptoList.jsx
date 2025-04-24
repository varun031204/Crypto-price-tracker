import { useEffect, useState } from 'react';
import { fetchCryptoData } from '../services/api';

function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetchCryptoData().then(setCoins);
  }, []);

  return (
    <div className="mt-6">
      {coins.map((coin) => (
        <div key={coin.id} className="flex items-center justify-between p-4 border-b border-gray-600">
          <div className="flex items-center gap-2">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span>{coin.name}</span>
          </div>
          <div>${coin.current_price.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}

export default CryptoList;
