import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload;
    },
  },
});

export const { setPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
