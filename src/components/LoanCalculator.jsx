import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box, Grid, Container } from '@mui/material';
import { CurrencyContext } from '../context/CurrencyContext';
import useEMICalculation from '../hooks/useEMICalculation';
import useExchangeRate from '../hooks/useExchangeRate';
import AmortizationTable from './AmortizationTable';
import CurrencyDropdown from './CurrencyDropdown';

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTerm, setLoanTerm] = useState(5);
    const { currency } = useContext(CurrencyContext);

    const [calculate, setCalculate] = useState(false);

    const exchangeRate = useExchangeRate(currency);

    const { EMI, amortizationSchedule, calculateEMI } = useEMICalculation();

    const handleCalculate = () => {
        calculateEMI(Number(loanAmount), Number(interestRate), Number(loanTerm));
        setCalculate(true);
    };

    const handleReset = () => {
        setLoanAmount(100000);
        setInterestRate(8.5);
        setLoanTerm(5);
        setCalculate(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>

            <Box sx={{ marginBottom: 3 }}>
                <Grid container spacing={2}>
                    <Grid >
                        <TextField
                            label="Loan Amount"
                            variant="outlined"
                            fullWidth
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            label="Interest Rate (%)"
                            variant="outlined"
                            fullWidth
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            label="Term (Years)"
                            variant="outlined"
                            fullWidth
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(e.target.value)}
                            type="number"
                        />
                    </Grid>
                </Grid>
            </Box>

            <Button variant="contained" color="primary" onClick={handleCalculate}>Calculate</Button>

            {calculate && EMI && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 3 }}>
                    <Typography variant="h6">
                        Monthly EMI: ${(EMI * exchangeRate).toFixed(2)}
                    </Typography>
                    <Box  sx={{ display: 'flex', justifyContent: "space-between" , alignItems:"center", flexWrap:"wrap"}}>
                        <Box sx={{display:"flex", alignItems:"center", gap:1}}>
                        <CurrencyDropdown />
                        <Typography>
                        Converted  EMI: {(EMI * exchangeRate).toFixed(2)} {currency}
                    </Typography>
                        </Box>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleReset}
                            sx={{ marginTop: 2 }}
                        >
                            Reset Table
                        </Button>

                    </Box>
                </Box>
            )}

            {calculate && amortizationSchedule.length > 0 && exchangeRate && (
                <AmortizationTable
                    schedule={amortizationSchedule.map((row) => ({
                        ...row,
                        principal: (row.principal * exchangeRate).toFixed(2),
                        interest: (row.interest * exchangeRate).toFixed(2),
                        remainingBalance: (row.remainingBalance * exchangeRate).toFixed(2),
                    }))}
                    currency={currency}
                />
            )}


        </Container>
    );
};

export default LoanCalculator;
