import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContextProvider";
import ProductPage from "./pages/ProductPage";
import CustOrdersPage from "./pages/CustOrdersPage";
import CustReviewsPage from "./pages/CustReviewsPage";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/CustomerProfilePage";
import ManagerProfilePage from "./pages/ManagerProfilePage";
import ManagerPage from "./pages/ManagerPage";
import ManagerOrders from "./components/ManagerOrders";
import Inventory from "./components/ManagerInventory";
import PhoneForm from "./components/ManagerAddNewPhones";
import AllProducts from "./pages/AllProducts";
import AllPhones from "./pages/AllPhones";
import AllAccessories from "./pages/AllAccessories";
import AccessoryPage from "./pages/AccessoryPage";
import ReviewForm from "./components/ReviewForm";
import {jwtDecode} from 'jwt-decode';

function App() {
    const token = localStorage.getItem('token');
    const decoded = token ? jwtDecode(token) : {};
    const role = decoded.customer?.role;
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const themeContextValue = useMemo(
        () => ({
            darkMode,
            toggleTheme,
        }),
        [darkMode]
    );

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    <Route path="/Login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/accessories" element={<AllAccessories />} />
                    <Route
                        path="/accessories/:id"
                        element={<AccessoryPage />}
                    />

                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/phones" element={<AllPhones />} />
                    <Route path="/phones/:id" element={<ProductPage />} />
                    {/* <Route
                        path="/addAccessories"
                        element={<AccesororiesForm />}
                    /> */}

                    {/* Conditionally render customer or manager routes */}
                    {role === 'customer' && (
                        <>
                            <Route path="/CustomerProfile" element={<ProfilePage />} />
                            <Route path="/CustomerReviews" element={<CustReviewsPage />} />
                            <Route path="/ReviewForm" element={<ReviewForm />} />
                            <Route path="/CustomerOrders" element={<CustOrdersPage />} />
                        </>
                    )}
                    {role === 'manager' && (
                        <>
                            <Route path="/ManagerProfile" element={<ManagerProfilePage />} />
                            <Route path="/ManagerPage" element={<ManagerPage />} />
                            <Route path="/ManagerOrders" element={<ManagerOrders />} />
                            <Route path="/ManagerInventory" element={<Inventory />} />
                            <Route path="/addPhone" element={<PhoneForm />} />
                        </>
                    )}

                    {/* Default redirect to login if no role is found */}
                    {role === undefined && <Route path="*" element={<Navigate to="/login" />} />}
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
