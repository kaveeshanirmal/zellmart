import React, { useState, useEffect } from "react";
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Button,
    Select,
    MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CSS/manager.css";

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/orders")
            .then((response) => response.json())
            .then((data) => {
                // Filter orders with status 'pending'
                const pendingOrders = data.filter(
                    (order) => order.status !== "Pending"
                );
                setOrders(pendingOrders); // Store only the pending orders in state
            });
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEditClick = (orderId) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.orderId === orderId
                    ? { ...order, isEditing: !order.isEditing }
                    : order
            )
        );
    };

    const handleStatusChange = (orderId, newStatus) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.orderId === orderId
                    ? { ...order, status: newStatus, isEditing: false }
                    : order
            )
        );
    };
    const handleTrackOrder = (orderId) => {
        navigate(`/trackorder/${orderId}`);
    };

    const handleDelete = (orderId) => {
        fetch(`http://localhost:5000/api/orders/${orderId}`, {
            method: "DELETE",
        })
            .then(() => {
                // Update the orders state to remove the deleted order
                setOrders((prevOrders) =>
                    prevOrders.filter((order) => order.orderId !== orderId)
                );
            })
            .catch((error) => console.error("Error deleting order:", error));
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.orderId.toString().includes(searchQuery.toLowerCase()) ||
            order.phoneModel
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            order.customerName
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            order.customerNumber
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            order.customerAddress
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ width: "80%", marginLeft: "15%" }}>
            <br />
            <br />
            <br />
            <br />
            <center>
                <h1>Orders</h1>
            </center>
            <TextField
                type="text"
                placeholder="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                className="manager-textField"
                style={{
                    marginTop: "30px",
                    width: "800px",
                    padding: "8px",
                    marginLeft: "-80px",
                }}
            />

            <Grid
                container
                spacing={3}
                style={{ marginTop: "5px", marginLeft: "-100px" }}
            >
                <Grid item xs={12} md={8}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#001d3d" }}>
                            <TableRow>
                                <TableCell style={{ color: "white" }}>
                                    Order ID
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Phone ID
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Customer ID
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Date
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Product Model
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Price
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Quantity
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Customer Name
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Phone No.
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Address
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Status
                                </TableCell>
                                <TableCell
                                    colSpan={3}
                                    align="center"
                                    style={{ color: "white" }}
                                >
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredOrders.map((order) => (
                                <TableRow key={order.orderId}>
                                    <TableCell>{order.orderId}</TableCell>
                                    <TableCell>{order.phoneId}</TableCell>
                                    <TableCell>{order.customerId}</TableCell>
                                    <TableCell>{order.orderDate}</TableCell>
                                    <TableCell>{order.phoneModel}</TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>{order.quantity}</TableCell>
                                    <TableCell>{order.customerName}</TableCell>
                                    <TableCell>
                                        {order.customerNumber}
                                    </TableCell>
                                    <TableCell>
                                        {order.customerAddress}
                                    </TableCell>
                                    <TableCell>
                                        {order.isEditing ? (
                                            <Select
                                                value={order.status}
                                                onChange={(e) =>
                                                    handleStatusChange(
                                                        order.orderId,
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <MenuItem value="Processing">
                                                    Processing
                                                </MenuItem>
                                                <MenuItem value="Out for Delivery">
                                                    Out for Delivery
                                                </MenuItem>
                                                <MenuItem value="Completed">
                                                    Completed
                                                </MenuItem>
                                            </Select>
                                        ) : (
                                            order.status
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {order.status !== "Completed" && (
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                style={{
                                                    backgroundColor: "#001d3d",
                                                    color: "white",
                                                }}
                                                onClick={() =>
                                                    handleEditClick(
                                                        order.orderId
                                                    )
                                                }
                                            >
                                                {order.isEditing
                                                    ? "Save"
                                                    : "Edit"}
                                            </Button>
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            style={{
                                                backgroundColor: "#001d3d",
                                                color: "white",
                                            }}
                                            onClick={() =>
                                                handleTrackOrder(order.orderId)
                                            }
                                        >
                                            Track Order
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            style={{
                                                backgroundColor: "#d32f2f",
                                                color: "white",
                                            }}
                                            onClick={() =>
                                                handleDelete(order.orderId)
                                            }
                                        >
                                            Delete
                                        </Button>
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
