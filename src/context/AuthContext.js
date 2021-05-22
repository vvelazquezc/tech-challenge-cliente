import React, { useEffect, useState, createContext } from 'react';
import * as auth from '../services/auth';

import AuthController from '../controllers/authController';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        AuthController.syncSignIn(user);
        setCurrentUser(user?.uid);
      } else {
        AuthController.syncSignOut();
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
