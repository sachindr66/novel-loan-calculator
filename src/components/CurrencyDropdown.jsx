import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const CurrencyDropdown = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <FormControl >
      <InputLabel >Currency</InputLabel>
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        label="Currency"
        sx={{width:84}}
      >
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="GBP">GBP</MenuItem>
        <MenuItem value="JPY">JPY</MenuItem>
        <MenuItem value="AUD">AUD</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CurrencyDropdown;
