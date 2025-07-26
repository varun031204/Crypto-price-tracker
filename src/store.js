import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,ripple&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h,7d'
    );
    const data = await response.json();
    return data;
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: [],
    previousPrices: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Store previous prices before updating
        const newPreviousPrices = {};
        state.assets.forEach(asset => {
          newPreviousPrices[asset.id] = asset.price;
        });
        state.previousPrices = newPreviousPrices;
        
        state.assets = action.payload.map(coin => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          image: coin.image,
          price: coin.current_price,
          change24h: coin.price_change_percentage_24h,
          change7d: coin.price_change_percentage_7d_in_currency,
          marketCap: coin.market_cap,
          volume24h: coin.total_volume,
          circulatingSupply: coin.circulating_supply,
          maxSupply: coin.max_supply
        }));
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {} = cryptoSlice.actions; // No actions to export
export const selectAssets = (state) => state.crypto.assets;
export const store = configureStore({ reducer: { crypto: cryptoSlice.reducer } });