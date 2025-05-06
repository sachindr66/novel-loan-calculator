import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container>
      <Box textAlign="center" mt={10}>
        <Typography variant="h4" gutterBottom color="error">
          404 - Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for doesn’t exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
