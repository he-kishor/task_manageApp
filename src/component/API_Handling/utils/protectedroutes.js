// components/ProtectedRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./authenticate";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setAuth(result);
    };
    checkAuth();
  }, []);

  if (auth === null) {
    // Show a loading spinner or placeholder while checking authentication
    return <div>Loading...</div>;
  }

  return auth ? children : <Navigate to="/error404" />;
};

export default ProtectedRoute;
