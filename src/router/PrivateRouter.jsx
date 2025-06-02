import React, { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
