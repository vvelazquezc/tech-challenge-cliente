import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ROUTES } from './config';

export const PrivateRoute = ({ ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Route {...rest} /> : <Redirect to={ROUTES.HOME} />;
};
