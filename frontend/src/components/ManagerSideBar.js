import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import LogoutIcon from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';

import { Link } from 'react-router-dom'; 
import './CSS/sideBar.css'

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#001d3d', color: 'white' },
            }}
        >
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <AdUnitsIcon sx={{ marginRight: '20px', fontSize: '40px' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '40px' }}>
                        Zellmart
                    </Typography>
                </Box>
            </Toolbar>
            <List style={{ marginTop: '50px' }}>
                <ListItem button component={Link} to="/ManagerPage" key="Dashboard">
                    <ListItemIcon style={{ color: 'white' }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/ManagerOrders" key="Orders">
                    <ListItemIcon style={{ color: 'white' }}>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button  component={Link} to= "/ManagerInventory"key="Inventory">
                    <ListItemIcon style={{ color: 'white' }}>
                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventory" />
                </ListItem>
                
                <ListItem button key="Logout" style={{ marginTop: '400px' }}>
                    <ListItemIcon style={{ color: 'white' }}>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
