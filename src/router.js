import React, { useEffect, useState } from 'react';
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
import { auth } from './firebase';
import { Typography } from '@mui/material';



export default function RouterApp () {

    const [user, setUser] = useState(null);

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);

            } else {
                setUser(null);
            }
        });
    }, []);


    return (
        <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      {/* Використовуйте Outlet для рендеру дочірніх маршутів */}
      <Route index element={<Functions />} />
      <Route path="authentication" element={<Authentication />} />
      <Route path="database" element={<Database />} />
      <Route path="hosting" element={user ? <Database /> : <Authentication />} />
      <Route path="storage" element={user ? <Database /> : <Authentication />} />
    </Route>
  </Routes>
</BrowserRouter>
  
    )
}