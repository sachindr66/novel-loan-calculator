import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRate = (currency) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/bad5ddb515f3ced2c20f0176/latest/USD`);
        setExchangeRate(response.data.conversion_rates[currency]);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    
    fetchExchangeRate();
  }, [currency]);

  return exchangeRate;
};

export default useExchangeRate;
