import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  if (token) return children;
  else return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default RequiredAuth;
