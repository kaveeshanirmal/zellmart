import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useMemo } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import { ThemeContext } from "./components/ThemeContextProvider";
import PhoneDetails from "./components/phoneDetails";

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
                    <Route path="/phone/:id" element={<PhoneDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
