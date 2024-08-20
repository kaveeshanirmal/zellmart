import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Select, MenuItem } from '@mui/material';
import './CSS/manager.css';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([
        {
            orderId: 1,
            phoneId: 101,
            phoneModel: 'product 1',
            customerId: 1001,
            customerName: 'Anna M. Hines',
            customerNumber: (+1)-555-1564-261,
            customerAddress: 'Burr Ridge/Illinois',
            date: '29 April 2024',
            total: 120,
            quantity: 1,
            status: 'Pending'
        },
        {
            orderId: 2,
            phoneId: 102,
            phoneModel: 'product 2',
            customerId: 1002,
            customerName: 'Judith H. Fritsche',
            customerNumber: (+57)-305-5579-759,
            customerAddress: 'SULLIVAN/Kentucky',
            date: '25 April 2024',
            total: 70,
            quantity: 1,
            status: 'Pending'
        },
        {
            orderId: 3,
            phoneId: 103,
            phoneModel: 'product 3',
            customerId: 1003,
            customerName: 'Peter T. Smith',
            customerNumber: (+33)-655-5187-93,
            customerAddress: 'Yreka/California',
            date: '25 April 2024',
            total: 200,
            quantity: 1,
            status: 'Pending'
        },
        {
            orderId: 4,
            phoneId: 104,
            phoneModel: 'product 4',
            customerId: 1004,
            customerName: 'Emmanuel J. Delcid',
            customerNumber: (+30)-693-5553-637,
            customerAddress: 'Atlanta/Georgia',
            date: '21 April 2024',
            total: 150,
            quantity: 1,
            status: 'Pending'
        },
        {
            orderId: 5,
            phoneId: 105,
            phoneModel: 'product 5',
            customerId: 1005,
            customerName: 'William J. Cook',
            customerNumber: (+91)-855-5446-150,
            customerAddress: 'Rosenberg/Texas',
            date: '18 April 2024',
            total: 100,
            quantity: 1,
            status: 'Pending'
        }
    ]);

    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalSales = orders.length;

    const handleAccept = (id) => {
        console.log(`Order ${id} accepted.`);
    };

    const handleReject = (id) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== id));
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredOrders = orders.filter((order) =>
        order.orderId.toString().includes(searchQuery.toLowerCase()) ||
        order.phoneModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        <div style={{ marginTop: '50px', width: '80%', margin: 'auto' }}>
            <br /><br /><br />
            <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={2}>
                    <Card className='manager-card'>
                        <CardContent>
                            <Typography variant="h5" align="center">Revenue</Typography>
                            <Typography variant="h6" align="center">${totalRevenue}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card className='manager-card'>
                        <CardContent>
                            <Typography variant="h5" align="center">Total Sales</Typography>
                            <Typography variant="h6" align="center">{totalSales}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br /><br /><br />
            <center>
                <Grid container justifyContent="center" spacing={20}>
                    <Grid item xs={6} md={4}>
                        <h2>Best selling </h2>
                        <br />
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
                        <Button variant="contained" onClick={handleSubmit} className='manager-btn'>
                            Save Products
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <h2>New Arrivals </h2>
                        <br />
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
                        <Button variant="contained" onClick={handleSubmit} className='manager-btn'>
                            Save Products
                        </Button>
                    </Grid>
                </Grid>
            </center>

            <br /><br />

            <TextField
                type="text"
                placeholder="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                className='manager-textField'
                style={{ marginTop: '30px', width: '800px', padding: '8px' }}
            />

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={12} md={8}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#D3D3D3' }}>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Phone ID</TableCell>
                                <TableCell>Customer ID</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Product Model</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                               
                                <TableCell>Customer Name</TableCell>
                                
                                <TableCell>Phone No.</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredOrders.map((order) => (
                                <TableRow key={order.orderId}>
                                    <TableCell>{order.orderId}</TableCell>
                                    <TableCell>{order.phoneId}</TableCell>
                                    <TableCell>{order.customerId}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.phoneModel}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>{order.quantity}</TableCell>
                                    <TableCell>{order.customerName}</TableCell>
                                    <TableCell>{order.customerNumber}</TableCell>
                                    <TableCell>{order.customerAddress}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <Button
                                                variant="contained"
                                                style={{ backgroundColor: 'green', color: 'white' }}
                                                onClick={() => handleAccept(order.orderId)}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="contained"
                                                style={{ backgroundColor: 'red', color: 'white' }}
                                                onClick={() => handleReject(order.orderId)}
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
            <br /><br /><br /><br />
        </div>
    );
};

export default Dashboard;
