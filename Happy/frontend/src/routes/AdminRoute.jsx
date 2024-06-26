import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({usertype, children }) => {
  if (usertype !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};

export default AdminRoute;
