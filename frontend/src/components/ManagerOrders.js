import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button, Select, MenuItem } from '@mui/material';
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
            customerNumber: '(+1)-555-1564-261',
            customerAddress: 'Burr Ridge/Illinois',
            date: '29 April 2024',
            total: 120,
            quantity: 1,
            status: 'Processing',
            isEditing: false
        },
        {
            orderId: 2,
            phoneId: 102,
            phoneModel: 'product 2',
            customerId: 1002,
            customerName: 'Judith H. Fritsche',
            customerNumber: '(+57)-305-5579-759',
            customerAddress: 'SULLIVAN/Kentucky',
            date: '25 April 2024',
            total: 70,
            quantity: 1,
            status: 'Processing',
            isEditing: false
        },
        {
            orderId: 3,
            phoneId: 103,
            phoneModel: 'product 3',
            customerId: 1003,
            customerName: 'Peter T. Smith',
            customerNumber: '(+33)-655-5187-93',
            customerAddress: 'Yreka/California',
            date: '25 April 2024',
            total: 200,
            quantity: 1,
            status: 'Processing',
            isEditing: false
        },
        {
            orderId: 4,
            phoneId: 104,
            phoneModel: 'product 4',
            customerId: 1004,
            customerName: 'Emmanuel J. Delcid',
            customerNumber: '(+30)-693-5553-637',
            customerAddress: 'Atlanta/Georgia',
            date: '21 April 2024',
            total: 150,
            quantity: 1,
            status: 'Processing',
            isEditing: false
        },
        {
            orderId: 5,
            phoneId: 105,
            phoneModel: 'product 5',
            customerId: 1005,
            customerName: 'William J. Cook',
            customerNumber: '(+91)-855-5446-150',
            customerAddress: 'Rosenberg/Texas',
            date: '18 April 2024',
            total: 100,
            quantity: 1,
            status: 'Processing',
            isEditing: false
        }
    ]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEditClick = (orderId) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.orderId === orderId ? { ...order, isEditing: !order.isEditing } : order
            )
        );
    };

    const handleStatusChange = (orderId, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.orderId === orderId ? { ...order, status: newStatus, isEditing: false } : order
            )
        );
    };

    const totalRevenue = orders
        .filter(order => order.status === 'Completed')
        .reduce((sum, order) => sum + order.total, 0);

    const totalSales = orders.filter(order => order.status === 'Completed').length;

    const filteredOrders = orders.filter((order) =>
        order.orderId.toString().includes(searchQuery.toLowerCase()) ||
        order.phoneModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ marginTop: '150px', width: '80%', margin: 'auto' }}>
            <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '20px'  , marginTop : "150px"}}>
                <Grid item xs={12} sm={6} md={2} style = {{backgroundColor : "#001d3d" , color : "white"}}>
                    <Card className='manager-card'>
                        <CardContent>
                            <Typography variant="h5" align="center">Revenue</Typography>
                            <Typography variant="h6" align="center">${totalRevenue}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2} style = {{backgroundColor : "#001d3d" , color : "white"}}>
                    <Card className='manager-card'>
                        <CardContent>
                            <Typography variant="h5" align="center">Total Sales</Typography>
                            <Typography variant="h6" align="center">{totalSales}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
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
                        <TableHead style={{ backgroundColor: '#001d3d'  }}>
                            <TableRow >
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
                                    <TableCell>
                                        {order.isEditing ? (
                                            <Select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                            >
                                                <MenuItem value="Processing">Processing</MenuItem>
                                                <MenuItem value="Out for Delivery">Out for Delivery</MenuItem>
                                                <MenuItem value="Completed">Completed</MenuItem>
                                            </Select>
                                        ) : (
                                            order.status
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {order.status !== 'Completed' && (
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                style = {{backgroundColor: "#001d3d" , color : "white"}}
                                                onClick={() => handleEditClick(order.orderId)}
                                            >
                                                {order.isEditing ? 'Save' : 'Edit'}
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
