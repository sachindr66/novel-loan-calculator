import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  useTheme
} from '@mui/material';

const AmortizationTable = ({ schedule, currency }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: 3,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        padding: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Amortization Schedule ({currency})
      </Typography>

      <TableContainer
        sx={{
          maxHeight: 400,
          overflowY: 'auto',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>Month</strong></TableCell>
              <TableCell align="right"><strong>Principal</strong></TableCell>
              <TableCell align="right"><strong>Interest</strong></TableCell>
              <TableCell align="right"><strong>Remaining Balance</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell align="right">{row.principal} {currency}</TableCell>
                <TableCell align="right">{row.interest} {currency}</TableCell>
                <TableCell align="right">{row.remainingBalance} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AmortizationTable;
