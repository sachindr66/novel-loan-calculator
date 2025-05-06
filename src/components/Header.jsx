import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Switch,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/exchange-rates">
          <ListItemText primary="Exchange Rates (Live)" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/error-page">
          <ListItemText primary="Error Page" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ marginBottom: 3 }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon/>
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
          {!isMobile && (
            <>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/exchange-rates" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Exchange Rates (Live)</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/error-page" style={{ textDecoration: 'none', color: 'white' }}>
                <Button color="inherit">Error Page</Button>
              </Link>
            </>
          )}
          <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
