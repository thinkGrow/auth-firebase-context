import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "current user inside useEffect on auth state change",
        currentUser
      );
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    // email: "potata@gmail.com",
    user,
    createUser,
    signInUser,
  };

  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       console.log("user changed", currentUser);
  //     } else {
  //       console.log("user changed", currentUser);
  //     }
  //   });

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
