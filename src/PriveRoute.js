import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../App';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();

  return user ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;