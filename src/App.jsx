import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);

  // Fetch top 10 coins by market cap
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Crypto Price Tracker</h1>
        <p className="text-center text-zinc-400 mb-8">
          Real-time prices fetched from CoinGecko API
        </p>

        <div className="space-y-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between bg-zinc-800 px-4 py-3 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3">
                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                <div>
                  <div className="font-semibold">{coin.name}</div>
                  <div className="text-sm text-zinc-400 uppercase">{coin.symbol}</div>
                </div>
              </div>
              <div className="text-lg font-medium">${coin.current_price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
