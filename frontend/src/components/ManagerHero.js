import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Select, MenuItem } from '@mui/material';
import './CSS/manager.css'

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([
        { id: '#RB5625', date: '29 April 2024', product: 'product 1', customerName: 'Anna M. Hines', email: 'anna.hines@mail.com', phone: '(+1)-555-1564-261', address: 'Burr Ridge/Illinois', status: 'Processing', amount: 120 },
        { id: '#RB9652', date: '25 April 2024', product: 'product 2', customerName: 'Judith H. Fritsche', email: 'judith.fritsche@mail.com', phone: '(+57)-305-5579-759', address: 'SULLIVAN/Kentucky', status: 'Processing', amount: 70 },
        { id: '#RB5984', date: '25 April 2024', product: 'product 3', customerName: 'Peter T. Smith', email: 'peter.smith@mail.com', phone: '(+33)-655-5187-93', address: 'Yreka/California', status: 'Processing', amount: 200 },
        { id: '#RB3625', date: '21 April 2024', product: 'product 4', customerName: 'Emmanuel J. Delcid', email: 'emmanuel.delcid@mail.com', phone: '(+30)-693-5553-637', address: 'Atlanta/Georgia', status: 'Processing', amount: 150 },
        { id: '#RB8652', date: '18 April 2024', product: 'product 5', customerName: 'William J. Cook', email: 'william.cook@mail.com', phone: '(+91)-855-5446-150', address: 'Rosenberg/Texas', status: 'Processing', amount: 100 }
    ]);

    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
    const totalSales = orders.length;

    const handleAccept = (id) => {
        console.log(`Order ${id} accepted.`);
    };

    const handleReject = (id) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredOrders = orders.filter((order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const availableProducts = [
        { name: 'product 1', price: 120 },
        { name: 'product 2', price: 70 },
        { name: 'product 3', price: 200 },
        { name: 'product 4', price: 150 },
        { name: 'product 5', price: 100 }
    ];

    const [topSelling, setTopSelling] = useState(Array(4).fill(''));

    const handleProductSelect = (index, event) => {
        const newTopSelling = [...topSelling];
        newTopSelling[index] = event.target.value;
        setTopSelling(newTopSelling);
    };

    const handleSubmit = () => {
        console.log(topSelling);
    };

    return (
        <div style={{ marginTop: '50px', width:'80%',margin:'auto' }}>
            <br/><br/><br/>
            <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={2} >
                    <Card className='manager-card'>
                        <CardContent>
                            <Typography variant="h5" align="center">Revenue</Typography>
                            <Typography variant="h6" align="center">${totalRevenue}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card className='manager-card'>
                        <CardContent >
                            <Typography variant="h5" align="center">Total Sales</Typography>
                            <Typography variant="h6" align="center">{totalSales}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br/><br/><br/>
            <center>
            <Grid container justifyContent="center" spacing={20}>
                <Grid item xs={6} md={4}>
                    <h2>Best selling </h2>
                    <br/>
                    {topSelling.map((selectedProduct, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <Select
                                value={selectedProduct}
                                onChange={(e) => handleProductSelect(index, e)}
                                fullWidth
                            >
                                {availableProducts.map((product) => (
                                    <MenuItem key={product.name} value={product.name}>
                                        {product.name} - ${product.price}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    ))}
                   <button variant="contained" onClick={handleSubmit} className='manager-btn'>
                        Save Products
                    </button>
                </Grid>
                <Grid item xs={6} md={4}>
                    <h2>New Arrivals </h2>
                    <br/>                                           
                    {topSelling.map((selectedProduct, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <Select
                                value={selectedProduct}
                                onChange={(e) => handleProductSelect(index, e)}
                                fullWidth
                            >
                                {availableProducts.map((product) => (
                                    <MenuItem key={product.name} value={product.name}>
                                        {product.name} - ${product.price}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    ))}
                    <button variant="contained" onClick={handleSubmit} className='manager-btn'>
                        Save Products
                    </button>
                </Grid>

            </Grid>
            </center>

            <br/><br/>

            <input 
                type="text"
                placeholder="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                className='manager-textField'
                style={{ marginTop: '30px', width: '800px', padding: '8px'}}
            />

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={8}>
                    <Table style={{  }}>
                        <TableHead style={{ backgroundColor: '#D3D3D3' }}>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Email ID</TableCell>
                                <TableCell>Phone No.</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.product}</TableCell>
                                    <TableCell>{order.customerName}</TableCell>
                                    <TableCell>{order.email}</TableCell>
                                    <TableCell>{order.phone}</TableCell>
                                    <TableCell>{order.address}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <Button
                                                variant="contained"
                                                style={{ backgroundColor: 'green', color: 'white' }}
                                                onClick={() => handleAccept(order.id)}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="contained"
                                                style={{ backgroundColor: 'red', color: 'white' }}
                                                onClick={() => handleReject(order.id)}
                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
            <br/><br/>
        </div>
    );
};

export default Dashboard;
