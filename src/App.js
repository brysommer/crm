import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header.js';
import { useLocation } from 'react-router-dom'; 
import { mainNavbarItems } from './components/Navbar/const/navbarItems.js';

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const currentRoute = mainNavbarItems.find(item => {
      const routeName = item.route.startsWith('/') ? item.route : `/${item.route}`;
      return location.pathname.endsWith(routeName);
    });
    const parsedTitle = currentRoute ? currentRoute.label : 'Землекуп';
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;