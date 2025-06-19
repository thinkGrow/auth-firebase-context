import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {
  const userInfo = {
    email: "potata@gmail.com",
  };

  return <AuthContext value={userInfo}>
    {children}
  </AuthContext>;
};

export default AuthProvider;
