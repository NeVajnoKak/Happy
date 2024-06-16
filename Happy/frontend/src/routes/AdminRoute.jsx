import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAuthenticated, usertype, children }) => {
  if (!isAuthenticated || usertype !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};

export default AdminRoute;
