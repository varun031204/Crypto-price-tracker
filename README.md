# Crypto Price Tracker

A responsive web app to display live cryptocurrency prices with real-time updates, built using React, Vite, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- **Live Cryptocurrency Data**: Displays sample data for 5 major crypto assets like Bitcoin (BTC), Ethereum (ETH), Tether (USDT), etc.
- **Real-time Updates**: Simulates WebSocket behavior using `setInterval` or a mock WebSocket class to update data every 1-2 seconds.
- **Responsive UI**: Fully responsive table layout showing:
  - Logo
  - Name
  - Symbol
  - Current Price
  - 1h, 24h, 7d % Changes (color-coded)
  - Market Cap
  - 24h Trading Volume
  - Circulating Supply
  - Max Supply
  - Static 7D Chart (SVG/Image)
- **Color-coded Percentages**: Green for positive change, Red for negative.

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **API Source**: CoinGecko (planned integration)

## 📁 Folder Structure

```
crypto-price-tracker/
├── node_modules/
├── public/
├── src/
│   ├── assets/            # Static images, logos, sample charts
│   ├── components/        # Reusable React components (e.g., CryptoTable.jsx)
│   ├── redux/             # Redux slices & store
│   ├── App.jsx            # Main app component
│   ├── index.css          # Tailwind imports
│   └── main.jsx           # Entry point
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🧪 Sample Data Simulation

Data is generated using sample objects and randomized at 1-2s intervals to simulate real-time price movements and percent changes.

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🌐 Future Enhancements

- Integrate real CoinGecko API for live prices
- Add interactive chart with libraries like Chart.js or Recharts
- Improve accessibility and mobile responsiveness
- Add dark mode toggle

---

Made by Varun / Varun031204

