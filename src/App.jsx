import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import { ThemeProvider } from './context/ThemeContext';
import LoanCalculator from './components/LoanCalculator';
import ExchangeRates from './components/ExchangeRates';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LoanCalculator />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            <Route path="/about" element={<About/>} />
            <Route path="error-page" element={<ErrorPage />} />
          </Routes>
        </Router>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
