import React, { useContext,useState,useEffect } from 'react';
import { ThemeContext } from './ThemeContextProvider'; 
import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './CSS/navBar.css'
import logo from './CSS/Images/CLOUDRestaurantLogo.png'
import SwitchButton from './SwitchButton';
import { NavLink} from 'react-router-dom';


export default function NavBar() {

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

  return (
    <div className={`navBarBox ${isFixed ? 'fixed' : ''} ${darkMode ? 'dark' : ''}` }  >
        <div className="navbarLeft">
            <div className='navBarLogo'>
                {/* <img src={logo} className='logoPic' /> */}
                <h2 className={`navBarTitle ${isFixed ? 'fixed' : ''} ${darkMode ? 'dark' : ''}` }>ZellMart</h2>
            </div> 

        </div>
        <div className="navBarCenter">
            <div className="navbarLinks">
            <NavLink to="/" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Log In</NavLink>
            <NavLink to="/ContactUs" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Contact</NavLink>    
            <NavLink to="/Home" className={`navBarLink ${darkMode ? 'dark' : ''}` }>About</NavLink>
            <NavLink to="/" className={`navBarLink ${darkMode ? 'dark' : ''}` }>My Orders</NavLink>
            <NavLink to="/Home" className={`navBarLink ${darkMode ? 'dark' : ''}` }>Home</NavLink>
            </div>
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
