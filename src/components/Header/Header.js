import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router';

import { FiSearch, FiX } from 'react-icons/fi';

import './Header.scss';
import Button from '../Button';
import AuthController from '../../controllers/authController';
import logo from '../../assets/images/logo.png';
import ButtonIcon from '../ButtonIcon';
import { Search } from '../Search/Search';

export const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleOpen = () => {
    setOpenSearch(!openSearch);
  };

  const handleLogOut = () => {
    AuthController.syncSignOut();
    setCurrentUser(null);
  };

  return (
    <section className='header'>
      <nav className='header-section'>
        <NavLink
          to={ROUTES.HOME}
          className='header-links'
          activeClassName='active-menu'
        >
          <img src={logo} alt='logo-gifsme' className='header-logo' />
        </NavLink>
        <div className='header-functionalities'>
          <div className='header-search'>
            <ButtonIcon event={handleOpen}>
              {!openSearch ? (
                <FiSearch
                  value={{
                    style: { fontSize: '30px', color: 'rgb(0, 123, 255)' },
                  }}
                />
              ) : (
                <FiX
                  value={{
                    style: { fontSize: '30px', color: 'rgb(0, 123, 255)' },
                  }}
                />
              )}
            </ButtonIcon>
          </div>

          {!currentUser ? (
            <NavLink
              to={ROUTES.LOGIN}
              className='header-links'
              activeClassName='active-menu'
            >
              <Button text='Log in' styleButton='light' />
            </NavLink>
          ) : (
            <Button text='Sign out' styleButton='dark' event={handleLogOut} />
          )}
        </div>
      </nav>
      <div className='header-search'>{openSearch && <Search />}</div>
    </section>
  );
};
