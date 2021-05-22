// import { api } from '../api';
import {
  signOut,
  getCurrentUserToken,
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from "../services/auth";

import authService from "../services/authService";

const AuthController = {
  syncSignIn: async () => {
    const token = await getCurrentUserToken();

    if (!token) {
      return authService.signOut();
    }
  },

  syncSignOut: async () => {
    const token = await getCurrentUserToken();

    if (!token) {
      return signOut();
    }

    const response = await authService.signOut(token);
    signOut();

    return response;
  },

  signInWithEmailRequest: (email, password) => {
    signInWithEmailAndPassword(email, password);
  },

  signUpWithEmailRequest: async (username, email, password) => {
    await signUpWithEmailAndPassword(email, password);
    const token = await getCurrentUserToken();
    return authService.signUp(token, username);
  },
};

export default AuthController;
