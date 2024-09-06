import React, { useState , useEffect} from 'react';
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Select, MenuItem } from '@mui/material';
import './CSS/manager.css';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([]);
       
    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);


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
        order.customerNumber.toString().includes(searchQuery) ||  
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
    const [newArrivals, setNewArrivals] = useState(Array(4).fill(''));


    const handleProductSelect = (section, index, event) => {
        if (section === 'bestSelling') {
            const newBestSelling = [...topSelling];
            newBestSelling[index] = event.target.value;
            setTopSelling(newBestSelling);
        } else if (section === 'newArrivals') {
            const newNewArrivals = [...newArrivals];
            newNewArrivals[index] = event.target.value;
            setNewArrivals(newNewArrivals);
        }
    };
    

    const handleSubmit = () => {
        console.log('Best Selling:', topSelling);
        console.log('New Arrivals:', newArrivals);
    };
    

    return (
        <div style={{ marginTop: '150px', width: '80%', margin: 'auto' }}>
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
    <h2>Best Selling</h2>
    <br />
    {topSelling.map((selectedProduct, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
            <Select
                value={selectedProduct}
                onChange={(e) => handleProductSelect('bestSelling', index, e)}
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
    <h2>New Arrivals</h2>
    <br />
    {newArrivals.map((selectedProduct, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
            <Select
                value={selectedProduct}
                onChange={(e) => handleProductSelect('newArrivals', index, e)}
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
                        <TableHead style={{ backgroundColor: '#001d3d' }}>
                            <TableRow>
                                <TableCell style={{color : "white"}}>Order ID</TableCell>
                                <TableCell style={{color : "white"}}>Phone ID</TableCell>
                                <TableCell style={{color : "white"}}>Customer ID</TableCell>
                                <TableCell style={{color : "white"}}>Date</TableCell>
                                <TableCell style={{color : "white"}}>Product Model</TableCell>
                                <TableCell style={{color : "white"}}>Price</TableCell>
                                <TableCell style={{color : "white"}}>Quantity</TableCell>
                               
                                <TableCell style={{color : "white"}}>Customer Name</TableCell>
                                
                                <TableCell style={{color : "white"}}>Phone No.</TableCell>
                                <TableCell style={{color : "white"}}>Address</TableCell>
                                <TableCell style={{color : "white"}}>Status</TableCell>
                                <TableCell align="center" style={{color : "white"}}>Actions</TableCell>
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
                                                style={{ backgroundColor: '#001d3d', color: 'white' }}
                                                onClick={() => handleAccept(order.orderId)}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="contained"
                                                style={{ backgroundColor: 'grey', color: 'white' }}
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

