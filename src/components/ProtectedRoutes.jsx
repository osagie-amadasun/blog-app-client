import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuthenticated";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/welcomeLandingPage" replace />;
  }
  return children;
};

export default ProtectedRoute;
