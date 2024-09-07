import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextProvider'; 
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './CSS/navBar.css';
import logo from './CSS/Images/CLOUDRestaurantLogo.png';
import SwitchButton from './SwitchButton';
import { Link, NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function NavBar() {
    // Variables to identify the user
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userType, setUserType] = useState("customer");

    // Code to fix the navbar on top
    const [isFixed, setIsFixed] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const { darkMode } = useContext(ThemeContext);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = async (e) => {
        e.preventDefault();
        // Add search functionality here
    };

    useEffect(() => {
        // Check localStorage for token and user type
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setLoggedIn(true);
            setUserType(decoded.customer.role); // Adjust based on your payload structure
        } else {
            setLoggedIn(false);
            setUserType("customer");
        }
    }, []);

    return (
        <div className={`navBarBox ${isFixed ? 'fixed' : ''} ${darkMode ? 'dark' : ''}` }>
            <div className="navbarLeft">
                <div className='navBarLogo'>
                    <Link to="/Home">
                        <h2 className={`navBarTitle ${isFixed ? 'fixed' : ''} ${darkMode ? 'dark' : ''}` }>ZellMart</h2>
                    </Link>
                </div> 
            </div>
            <div className='searchBox'>
                <form onSubmit={handleSearch} className='search-form'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products..."
                    />
                    <button type="submit" className='search-btn'>Search</button>
                </form> 
            </div>
            <div className="navBarCenter">
                {!isLoggedIn && <div className="navbarLinks">
                    <NavLink to="/Login" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Log In</NavLink>
                    <NavLink to="/ContactUs" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Contact</NavLink>    
                    <NavLink to="/Home" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Home</NavLink>
                </div>}
                {userType === 'customer' && isLoggedIn && <div className="navbarLinks">
                    <NavLink onClick={() => { setLoggedIn(false); localStorage.removeItem('token'); }} className={`navBarLink ${darkMode ? 'dark' : ''}` }>Log Out</NavLink>
                    <NavLink to="/ContactUs" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Contact</NavLink>    
                    <NavLink to="/CustomerProfile" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Profile</NavLink>
                    <NavLink to="/CustomerReviews" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Reviews</NavLink>
                    <NavLink to="/CustomerOrders" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Orders</NavLink>
                    <NavLink to="/Home" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Home</NavLink>
                </div>}
                {userType === 'manager' && isLoggedIn && <div className="navbarLinks">
                    <NavLink onClick={() => { setLoggedIn(false); localStorage.removeItem('token'); }} className={`navBarLink ${darkMode ? 'dark' : ''}` }>Log Out</NavLink>
                    <NavLink to="/ManagerProfile" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Profile</NavLink>
                    <NavLink to="/ManagerInventory" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Inventory</NavLink>
                    <NavLink to="/ManagerOrders" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Orders</NavLink>
                    <NavLink to="/ManagerPage" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Home</NavLink>
                </div>}
            </div>
            <div className="navBarRight">
                <div className={`navBarToggleButton ${darkMode ? 'dark' : ''}` }>
                    {darkMode ? <BedtimeIcon/> : <WbSunnyIcon/>}
                    <SwitchButton/>
                </div>
            </div>        
        </div>
    )
}
