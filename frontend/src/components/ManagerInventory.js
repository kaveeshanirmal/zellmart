import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from '@mui/material';
import './CSS/manager.css';


const Inventory = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [orders, setOrders] = useState([
        { id: '#RB5625', date: '29 April 2024', product: 'product-1(1)', customerName: 'Anna M. Hines', email: 'anna.hines@mail.com', phone: '(+1)-555-1564-261', address: 'Burr Ridge/Illinois', paymentType: 'Credit Card', status: 'Completed', amount: 120 },
        { id: '#RB9652', date: '25 April 2024', product: 'product-4', customerName: 'Judith H. Fritsche', email: 'judith.fritsche@mail.com', phone: '(+57)-305-5579-759', address: 'SULLIVAN/Kentucky', paymentType: 'Credit Card', status: 'Completed', amount: 70 },
        { id: '#RB5984', date: '25 April 2024', product: 'product-5', customerName: 'Peter T. Smith', email: 'peter.smith@mail.com', phone: '(+33)-655-5187-93', address: 'Yreka/California', paymentType: 'Pay Pal', status: 'Completed', amount: 200 },
        { id: '#RB3625', date: '21 April 2024', product: 'product-6', customerName: 'Emmanuel J. Delcid', email: 'emmanuel.delcid@mail.com', phone: '(+30)-693-5553-637', address: 'Atlanta/Georgia', paymentType: 'Pay Pal', status: 'Processing', amount: 150 },
        { id: '#RB8652', date: '18 April 2024', product: 'product-1(2)', customerName: 'William J. Cook', email: 'william.cook@mail.com', phone: '(+91)-855-5446-150', address: 'Rosenberg/Texas', paymentType: 'Credit Card', status: 'Processing', amount: 100 }
    ]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEdit = (id) => {
        
        console.log(`Edit order with id: ${id}`);
    };

    const handleRemove = (id) => {
       
        setOrders(orders.filter(order => order.id !== id));
    };

    const handleAdd = () => {
       
        const newOrder = { id: '#RB9999', date: '30 April 2024', product: 'product-7', customerName: 'New Customer', email: 'new.customer@mail.com', phone: '(+1)-555-0000-000', address: 'New Address', paymentType: 'Credit Card', status: 'Processing', amount: 150 };
        setOrders([...orders, newOrder]);
    };

    const filteredOrders = orders
        .filter(order => order.status === 'Completed')
        .filter((order) =>
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.address.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div style={{ padding: '20px', marginTop: '100px', margin :'auto', width:'80%'}}>
            <br/><br/>
            <center><h1>Inventory</h1></center>
            <br/><br/>
            <input 
                type="text"
                placeholder="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                style={{ marginBottom: '20px', marginLeft: '230px', marginRight: '230px', width: '800px', padding: '8px' }}
            />

            <button variant="contained" onClick={handleAdd} className='manager-btn'>
                Add Phone
            </button>

            <Table>
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
                        <TableCell>Actions</TableCell>
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
                                <Button variant="outlined" color="primary" onClick={() => handleEdit(order.id)} style={{  }}>
                                    Edit
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => handleRemove(order.id)} style={{  }}>
                                    Remove
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Inventory;
