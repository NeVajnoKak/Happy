import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRoute = ({usertype, children }) => {
  if (usertype !== 'user') {
    return <Navigate to="/" />;
  }
  return children;
};

export default UserRoute;
