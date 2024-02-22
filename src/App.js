import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header.js';
import { useLocation } from 'react-router-dom'; 
import { mainNavbarItems } from './components/Navbar/const/navbarItems.js';
import { useNavigate } from 'react-router-dom';
import ResponsiveDrawer from './components/Navbar/responsiveDrawer.js'


function App() {
  return (
    <Grid container >
      <ResponsiveDrawer />
      <Outlet />
    </Grid>
  );
}

export default App;