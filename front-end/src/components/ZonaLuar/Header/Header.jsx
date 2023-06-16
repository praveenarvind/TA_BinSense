import React from 'react'
import "./Header.css"
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <header>
    <Box display="flex" justifyContent="center" alignItems="center" minWidth="100vh">
    <div className="wrapper">
        <h3 style={{ color: "white"}}>Zona Luar</h3>
    </div>
    </Box>
    </header>
  )
}

export default Header