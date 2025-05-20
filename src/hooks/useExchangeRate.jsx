import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRate = (currency) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/9a7f4eb7fb2d62d9a85a88a1/latest/USD`);
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
