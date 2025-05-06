import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box, Grid, Container } from '@mui/material';
import { CurrencyContext } from '../context/CurrencyContext';
import useEMICalculation from '../hooks/useEMICalculation';
import useExchangeRate from '../hooks/useExchangeRate';

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTerm, setLoanTerm] = useState(5);
    const { currency } = useContext(CurrencyContext);

    const [calculate, setCalculate] = useState(false);

    const exchangeRate = useExchangeRate(currency);

    const { EMI,  calculateEMI } = useEMICalculation();

    const handleCalculate = () => {
        calculateEMI(Number(loanAmount), Number(interestRate), Number(loanTerm));
        setCalculate(true);
    };


    return (
        <Container>
            <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>

            <Box sx={{ marginBottom: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Loan Amount"
                            variant="outlined"
                            fullWidth
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            label="Interest Rate (%)"
                            variant="outlined"
                            fullWidth
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                    </Box>
            )}

           


        </Container>
    );
};

export default LoanCalculator;
