import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
    const { orderId } = useParams(); // Get the orderId from URL params
    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState('');
    const [barWidth, setBarWidth] = useState('0%');
    const [barText, setBarText] = useState('Select a status');
    const [barStyle, setBarStyle] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/orders/${orderId}`)
            .then((response) => response.json())
            .then((data) => {
                setOrder(data);
                setStatus(data.status);
                handleStatusChange({ target: { value: data.status } });
            });
    }, [orderId]);

    const handleStatusChange = (event) => {
        const selectedStatus = event.target.value;
        setStatus(selectedStatus);

        switch (selectedStatus) {
            case 'Out for Delivery':
                setBarWidth('70%');
                setBarText('Out for Delivery');
                setBarStyle(styles.statusDelivery);
                break;
            case 'Completed':
                setBarWidth('100%');
                setBarText('Completed');
                setBarStyle(styles.statusCompleted);
                break;
            default:
                setBarWidth('30%');
                setBarText('Processing');
                setBarStyle(styles.statusProcessing);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send data to the server
        console.log(`Order ID: ${orderId}, Status: ${status}`);
    };

    if (!order) return <p>Loading...</p>;

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2>Update Order Status</h2>
                <br/>
                <div style={styles.barContainer}>
                    <div style={styles.bar}>
                        <div
                            style={{ ...styles.barFill, width: barWidth, ...barStyle }}
                        >
                            {barText}
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="order_id">Order ID:</label>
                    <input
                        type="number"
                        id="order_id"
                        value={orderId}
                        readOnly
                        style={styles.input}
                    />

                    <label htmlFor="status">Status:</label>
                    <select id="status" value={status} onChange={handleStatusChange} required style={styles.select}>
                        <option value="">Select status</option>
                        <option value="Processing">Processing</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <button type="submit" style={styles.button}>Update Status</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        backgroundColor: '#f4f4f4',
    },
    container: {
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    barContainer: {
        marginBottom: '20px',
    },
    bar: {
        width: '100%',
        height: '40px',
        backgroundColor: '#ddd',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
    },
    barFill: {
        height: '100%',
        transition: 'width 0.3s ease',
        textAlign: 'center',
        lineHeight: '40px',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '8px',
    },
    statusProcessing: { backgroundColor: '#ff4d4d' }, // Red
    statusDelivery: { backgroundColor: '#f0ad4e' }, // Yellow
    statusCompleted: { backgroundColor: '#5cb85c' }, // Green
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
    },
    select: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
    },
    button: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#001d3d',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default TrackOrder;
