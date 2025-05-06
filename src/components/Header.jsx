import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemText,
    Box,
    Switch,
    useMediaQuery,
    useTheme,
    ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const muiTheme = useTheme(); // ✅ Correct use
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navLinkStyle = ({ isActive }) => ({
        textDecoration: 'none',
        borderRadius: '6px',
        margin: '0 4px',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        color: 'white',
        display: 'inline-block',
    });

    const mobileNavLinkStyle = ({ isActive }) => ({
        backgroundColor: isActive
            ? muiTheme.palette.mode === 'dark'
                ? '#90caf9'
                : '#1976d2'
            : 'transparent',
        color: isActive
            ? muiTheme.palette.mode === 'dark'
                ? '#000'
                : '#fff'
            : muiTheme.palette.text.primary,
        borderRadius: '4px',
        margin: '4px 8px',
    });

    const drawerContent = (
        <Box sx={{ width: 250 }} onClick={toggleDrawer}>
            <List>
                <ListItemButton component={NavLink} to="/" end style={mobileNavLinkStyle}>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={NavLink} to="/exchange-rates" style={mobileNavLinkStyle}>
                    <ListItemText primary="Exchange Rates (Live)" />
                </ListItemButton>
                <ListItemButton component={NavLink} to="/about" style={mobileNavLinkStyle}>
                    <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton component={NavLink} to="/error-page" style={mobileNavLinkStyle}>
                    <ListItemText primary="Error Page" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ marginBottom: 3 }}>
                <Toolbar>
                    {isMobile && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Loan Calculator
                    </Typography>
                    {!isMobile && (
                        <>
                            <NavLink to="/" end style={navLinkStyle}>
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink to="/exchange-rates" style={navLinkStyle}>
                                <Button color="inherit">Exchange Rates (Live)</Button>
                            </NavLink>
                            <NavLink to="/about" style={navLinkStyle}>
                                <Button color="inherit">About</Button>
                            </NavLink>
                            <NavLink to="/error-page" style={navLinkStyle}>
                                <Button color="inherit">Error Page</Button>
                            </NavLink>
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
