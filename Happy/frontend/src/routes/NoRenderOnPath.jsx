import React from 'react';
import { useLocation } from 'react-router-dom';

const NoRenderOnPath = (props) => {
  const location = useLocation();
  return props.noRenderPaths && props.noRenderPaths.includes(location.pathname) ? (
    <React.Fragment></React.Fragment>
  ) : (
    <>{props.children}</>
  );
};

export default NoRenderOnPath;
