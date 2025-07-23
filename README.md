# Crypto Price Tracker

A responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices, simulating WebSocket updates.

## Features

- Displays 5 crypto assets (BTC, ETH, USDT, BNB, XRP) in a responsive table
- Shows key metrics: price, 24h change, 7d change, market cap, volume, supply
- Color-coded percentage changes (green for positive, red for negative)
- Cryptocurrency logos displayed next to names
- Dark/light mode toggle with persistent preference
- Real-time updates using CoinGecko API
- Complete state management with Redux Toolkit
- Responsive design that adapts to different screen sizes

## Project Structure

- `src/App.js` - Main application component with WebSocket connection
- `src/CryptoTable.js` - Responsive table component for displaying crypto data
- `src/store.js` - Redux store with crypto slice and actions

- `src/styles.css` - CSS styles for responsive design
- `src/index.js` - Application entry point

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Implementation Details

- Uses Redux Toolkit for state management
- Fetches real-time data from CoinGecko API every 30 seconds
- Responsive design with media queries for different screen sizes
- Optimized re-renders using Redux selectors