import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box my={5}>
        <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            About This App
          </Typography>

          <Typography variant="body1">
            This <strong>Loan Calculator App</strong> is a responsive and user-friendly single-page web application developed using <strong>React JS</strong> and <strong>Material UI</strong>. It allows users to accurately calculate Equated Monthly Installments (EMIs), view a detailed amortization schedule, and perform real-time currency conversions using live exchange rates.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" >
            Key Features:
          </Typography>
          <List dense>
            {[
              "Loan EMI calculation using standard financial formulas",
              "Dynamic amortization schedule with monthly breakdown",
              "Real-time currency conversion for over 160 currencies",
              "Light and Dark theme toggle support",
              "Responsive UI with collapsible mobile navigation",
              "Custom React hooks for reusable EMI and exchange logic",
              "Error handling with custom 404 and fallback error pages"
            ].map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" >
            Technologies Used:
          </Typography>
          <List dense>
            {[
              "React (Hooks, Routing, Context API)",
              "Material UI for theming and responsive components",
              "Axios for API calls",
              "ExchangeRate API for live currency conversion"
            ].map((tech, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={tech} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Conclusion:
          </Typography>
          <Typography variant="body1">
            This app is a demonstration of modern React development practices including reusable hooks, component modularity, API integration, and responsive design. It provides a complete solution for loan calculation and currency conversion, optimized for both desktop and mobile users.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
