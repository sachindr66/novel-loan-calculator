import { useState } from 'react';

const useEMICalculation = () => {
  const [EMI, setEMI] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  const calculateEMI = (loanAmount, interestRate, loanTerm) => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = loanTerm * 12;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEMI(emi.toFixed(2)); 

    const schedule = [];
    let balance = P;

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      schedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        remainingBalance: balance.toFixed(2),
      });
    }

    setAmortizationSchedule(schedule);
  };

  return { EMI, amortizationSchedule, calculateEMI };
};

export default useEMICalculation;
