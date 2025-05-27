import React, { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={"/auth/login"}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
