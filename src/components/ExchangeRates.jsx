import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get('https://v6.exchangerate-api.com/v6/9a7f4eb7fb2d62d9a85a88a1/latest/USD');
        setRates(res.data.conversion_rates);
      } catch (err) {
        console.error('Failed to fetch exchange rates', err);
      }
    };
    fetchRates();
  }, []);

  const rows = Object.entries(rates);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Exchange Rates</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell align="right">{rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Container>
  );
};

export default ExchangeRates;