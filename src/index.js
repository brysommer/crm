import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';  // Update the import
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication';
import MachineLearning from './pages/MachineLearning/MachineLearning.js';
import Hosting from './pages/Hosting/Hosting.js';
import Functions from './pages/Functions/Functions.js';
import Database from './pages/Database/Database.js';
import Storage from './pages/Storage/Storage.js';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme.js';
import RouterApp from './router.js'

const root = document.getElementById('root') || document.createElement('div');
const rootElement = createRoot(root);


/*
const user = setInterval(() => {
  if (!localStorage.getItem('user')) {
    localStorage.removeItem('user');
    navigate('/authentication');
    clearInterval(interval_id);
  }
}, 5 * 1000); */

rootElement.render(
  <ThemeProvider theme={dashboardTheme}>
    <RouterApp></RouterApp>
  </ThemeProvider>
);

reportWebVitals();
