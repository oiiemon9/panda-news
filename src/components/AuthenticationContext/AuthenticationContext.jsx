import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/Firebase.init';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthenticationContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoader, setAuthLoader] = useState(true);
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (result) => {
        if (result) {
          setUser(result);
          setAuthLoader(false);
        } else {
          setUser(null);
          setAuthLoader(false);
        }
      });
    };
    return () => unsubscribe();
  }, []);

  const authValue = {
    user,
    setUser,
    registration,
    login,
    logout,
    authLoader,
    googleLogin,
  };
  return <AuthContext value={authValue}>{children}</AuthContext>;
};

export default AuthenticationContext;
