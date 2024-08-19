import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow,  TextField } from '@mui/material';
import './CSS/manager.css'


const ManagerOrders = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [orders] = useState([
        { id: '#RB5625', date: '29 April 2024', product: 'product-1(1)', customerName: 'Anna M. Hines', email: 'anna.hines@mail.com', phone: '(+1)-555-1564-261', address: 'Burr Ridge/Illinois', paymentType: 'Credit Card', status: 'Completed', amount: 120 },
        { id: '#RB9652', date: '25 April 2024', product: 'product-4', customerName: 'Judith H. Fritsche', email: 'judith.fritsche@mail.com', phone: '(+57)-305-5579-759', address: 'SULLIVAN/Kentucky', paymentType: 'Credit Card', status: 'Completed', amount: 70 },
        { id: '#RB5984', date: '25 April 2024', product: 'product-5', customerName: 'Peter T. Smith', email: 'peter.smith@mail.com', phone: '(+33)-655-5187-93', address: 'Yreka/California', paymentType: 'Pay Pal', status: 'Completed', amount: 200 },
        { id: '#RB3625', date: '21 April 2024', product: 'product-6', customerName: 'Emmanuel J. Delcid', email: 'emmanuel.delcid@mail.com', phone: '(+30)-693-5553-637', address: 'Atlanta/Georgia', paymentType: 'Pay Pal', status: 'Processing', amount: 150 },
        { id: '#RB8652', date: '18 April 2024', product: 'product-1(2)', customerName: 'William J. Cook', email: 'william.cook@mail.com', phone: '(+91)-855-5446-150', address: 'Rosenberg/Texas', paymentType: 'Credit Card', status: 'Processing', amount: 100 }
    ]);

    

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
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
        <div style={{ padding: '20px', marginTop: '100px', width:'80%', margin:'auto'}}>
            <br/><br/>
            <center><h1>Orders</h1></center>
            <br/><br/>

            <input 
                type="text"
                placeholder="Search"
                className='searchbox'
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                style={{ marginBottom: '20px', marginLeft: '230px', marginRight: '230px', width: '800px' , padding: '8px'}}
            />
            

            
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
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
           
        </div>
    );
};

export default ManagerOrders;
