import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';
import { ThemeContext } from './ThemeContextProvider'; 


export default function ColorSwitches() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Switch defaultChecked color="default" checked={darkMode}
      onChange={toggleTheme} />
    </div>
  );
}