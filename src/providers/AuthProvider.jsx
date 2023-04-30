import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  //   const updateProfile = () => {

  //   }

  // logout
  const logOut = () => {
    return signOut(auth);
  }

  // observing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    })

    return () => {
        unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
