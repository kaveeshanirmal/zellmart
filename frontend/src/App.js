import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useMemo } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContextProvider";
import ProductPage from "./pages/ProductPage";
import CustOrdersPage from "./pages/CustOrdersPage";
import LoginForm from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/CustomerProfilePage";
import ManagerProfilePage from "./pages/ManagerProfilePage";
import ManagerPage from "./pages/ManagerPage";
import ManagerOrders from "./components/ManagerOrders";
import Inventory from "./components/ManagerInventory";
import PhoneForm from "./components/ManagerAddNewPhones";
import AllProducts from "./pages/AllProducts";
import TrackOrder from "./components/trackorder";

function App() {
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
                    <Route path="/" element={<Home />}>
                        {" "}
                    </Route>
                    <Route path="/home" element={<Home />}>
                        {" "}
                    </Route>
                    <Route path="/home" element={<Home />}>
                        {" "}
                    </Route>
                    <Route path="/ContactUs" element={<ContactUs />}></Route>
                    <Route
                        path="/productpage"
                        element={<ProductPage />}
                    ></Route>
                    <Route
                        path="/CustomerOrders"
                        element={<CustOrdersPage />}
                    ></Route>
                    <Route path="/Login" element={<LoginForm />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route
                        path="/CustomerProfile"
                        element={<ProfilePage />}
                    ></Route>
                    <Route
                        path="/ManagerProfile"
                        element={<ManagerProfilePage />}
                    ></Route>
                    <Route
                        path="/ManagerPage"
                        element={<ManagerPage />}
                    ></Route>
                    <Route
                        path="/ManagerOrders"
                        element={<ManagerOrders />}
                    ></Route>
                    <Route
                        path="/ManagerInventory"
                        element={<Inventory />}
                    ></Route>
                    <Route path="/trackorder/:orderId" element={<TrackOrder />} />
                    <Route path="/phones" element={<AllProducts />} />
                    <Route path="/phones/:id" element={<ProductPage />} />
                    <Route path="/add" element={<PhoneForm />} />
                   
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
