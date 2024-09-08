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
                console.log("Fetched orders:", data); // Log the fetched data
                setOrders(data); // Store all orders in state
            })
            .catch((error) => console.error("Error fetching orders:", error));
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

        // Here you would typically also send an update to your backend
        fetch(`http://localhost:5000/api/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((response) => response.json())
            .then((data) => console.log("Order updated:", data))
            .catch((error) => console.error("Error updating order:", error));
    };

    const handleTrackOrder = (orderId) => {
        navigate(`/trackorder/${orderId}`);
    };

    const handleDelete = (orderId) => {
        fetch(`http://localhost:5000/api/orders/${orderId}`, {
            method: "DELETE",
        })
            .then(() => {
                setOrders((prevOrders) =>
                    prevOrders.filter((order) => order.orderId !== orderId)
                );
            })
            .catch((error) => console.error("Error deleting order:", error));
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.orderId.toString().includes(searchQuery.toLowerCase()) ||
            (order.phone &&
                order.phone.model &&
                order.phone.model
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
            (order.customer &&
                order.customer.name &&
                order.customer.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
            (order.customer &&
                order.customer.phoneNumber &&
                order.customer.phoneNumber
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
            (order.customer &&
                order.customer.address &&
                order.customer.address
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
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
                                    Phone Model
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Customer Name
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Date
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Price
                                </TableCell>
                                <TableCell style={{ color: "white" }}>
                                    Quantity
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
                                    <TableCell>
                                        {order.phone
                                            ? order.phone.model
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {order.customer
                                            ? order.customer.name
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            order.orderDate
                                        ).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{order.total}</TableCell>
                                    <TableCell>{order.quantity}</TableCell>
                                    <TableCell>
                                        {order.customer
                                            ? order.customer.phoneNumber
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {order.customer
                                            ? order.customer.address
                                            : "N/A"}
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
                                                <MenuItem value="Pending">
                                                    Pending
                                                </MenuItem>
                                                <MenuItem value="Accepted">
                                                    Accepted
                                                </MenuItem>
                                                <MenuItem value="Delivered">
                                                    Delivered
                                                </MenuItem>
                                                <MenuItem value="Reviewed">
                                                    Reviewed
                                                </MenuItem>
                                            </Select>
                                        ) : (
                                            order.status
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
                                                handleEditClick(order.orderId)
                                            }
                                        >
                                            {order.isEditing ? "Save" : "Edit"}
                                        </Button>
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
