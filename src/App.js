import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './components/Header/Header.js';
import { useLocation } from 'react-router-dom'; 
import { mainNavbarItems } from './components/Navbar/const/navbarItems.js';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
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

  const interval_id = setInterval(() => {
    if (!localStorage.getItem('user')) {
      localStorage.removeItem('user');
      navigate('/authentication');
      clearInterval(interval_id);
    }
  }, 5 * 1000);

  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;