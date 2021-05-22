import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { ROUTES } from './router';

import './styles/App.scss';
import { Header } from './components/Header/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Upload from './pages/Upload';
import { PrivateRoute } from './router';
import { Media } from './pages/Media/Media';
import Error from './pages/Error';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} exact />
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.SEARCH} component={Home} exact />
        <Route path={ROUTES.MEDIA} component={Media} exact />
        <Route path={ROUTES.ERROR} component={Error} exact />
        <PrivateRoute path={ROUTES.UPLOAD} component={Upload} />
      </Switch>
      {currentUser && (
        <Link className='btn-upload btn-upload-plus' to={ROUTES.UPLOAD}>
          <FiPlus />
        </Link>
      )}
    </>
  );
}

export default App;
