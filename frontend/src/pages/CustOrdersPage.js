import React, { useState,useContext } from 'react';
import "../components/CSS/orderCard.css";
import OrderCard from '../components/OrderCard';
import { ThemeContext } from '../components/ThemeContextProvider'; 

const orders = [
  {
    productName: "Samsung A50",
    productInfo: "Color Family:Black, Model: A50",
    status:"Delivered",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 253,
    quantity: 1,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    productName: "iphone 11 pro Gold",
    productInfo: "Color Family:Black",
    status:"Delivered",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 770,
    quantity: 1,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    productName: "Samsung A50",
    productInfo: "Color Family:Black, Model: A50",
    status:"Pending",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 253,
    quantity: 3,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    productName: "iphone 11 pro Gold",
    productInfo: "Color Family:Black",
    status:"To Be Accpeted",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 770,
    quantity: 2,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    productName: "Samsung A50",
    productInfo: "Color Family:Black, Model: A50",
    status:"Pending",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 253,
    quantity: 1,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    productName: "iphone 11 pro Gold",
    productInfo: "Color Family:Black",
    status:"To Be Accepted",
    orderedDate: "2024/08/10",
    acceptedDate: "2024/08/12",
    deliveredDate: "2024/08/13",
    price: 770,
    quantity: 6,
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
];

const deliveredOrders = orders.filter(order => order.status === "Delivered");
const toBeAcceptedOrders = orders.filter(order => order.status === "To Be Accepted");
const pendingOrders = orders.filter(order => order.status === "Pending");

export default function CustOrdersPage() {
  const { darkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (

    <div className='order-page-container'>
      <h1>My Orders</h1>
        <div className={`tabs ${darkMode ? 'dark' : ''}`}>
         <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 0 ? 'active' : ''} ${darkMode ? 'dark' : ''} `}
            onClick={() => handleTabClick(0)}
          >
          All
          </button>
          <button
            className={`tab-button ${activeTab === 1 ? 'active' : ''} ${darkMode ? 'dark' : ''} `}
            onClick={() => handleTabClick(1)}
          >
           To be Accepted
          </button>
          <button
            className={`tab-button ${activeTab === 2 ? 'active' : ''} ${darkMode ? 'dark' : ''} `}
            onClick={() => handleTabClick(2)}
          >
          Pending
          </button>
          <button
            className={`tab-button ${activeTab === 3 ? 'active' : ''} ${darkMode ? 'dark' : ''} `}
            onClick={() => handleTabClick(3)}
          >
          Delivered
          </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div className="orders-list">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
         ))}
      </div>
        )}
        {activeTab === 1 && (
          <div className="orders-list">
          {toBeAcceptedOrders.map((order, index) => (
            <OrderCard key={index} order={order} />
         ))}
      </div>
        )}
        {activeTab === 2 && (
          <div className="orders-list">
          {pendingOrders.map((order, index) => (
            <OrderCard key={index} order={order} />
         ))}
      </div>
        )}
        {activeTab === 3 && (
          <div className="orders-list">
          {deliveredOrders.map((order, index) => (
            <OrderCard key={index} order={order} />
         ))}
      </div>
        )}

      </div>
        
      </div>
    </div>    
  );
}
