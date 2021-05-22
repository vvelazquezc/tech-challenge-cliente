import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import AuthController from "../../controllers/authController";

import { ROUTES } from "../../router";

import "./Login.scss";

export const Login = () => {
  const history = useHistory();
  const [emailLogIn, setEmailLogIn] = useState("");
  const [passwordLogIn, setPasswordLogIn] = useState("");

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [usernameSignIn, setUsernameSignIn] = useState("");

  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];
    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  }, []);

  const handleLogIn = async (e) => {
    e.preventDefault();
    AuthController.signInWithEmailRequest(emailLogIn, passwordLogIn);
    history.push(ROUTES.HOME);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    AuthController.signUpWithEmailRequest(
      usernameSignIn,
      emailSignIn,
      passwordSignIn
    );
    history.push(ROUTES.HOME);
  };

  return (
    <>
      <section className="forms-section">
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login" onSubmit={handleLogIn}>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input
                    id="login-email"
                    type="email"
                    value={emailLogIn}
                    onChange={(e) => setEmailLogIn(e.target.value)}
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    type="password"
                    value={passwordLogIn}
                    onChange={(e) => setPasswordLogIn(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-form">
                Login
              </button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup" onSubmit={handleSignIn}>
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className="input-block">
                  <label htmlFor="signup-username">User Name</label>
                  <input
                    id="signup-username"
                    type="text"
                    value={usernameSignIn}
                    onChange={(e) => setUsernameSignIn(e.target.value)}
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input
                    id="signup-email"
                    type="email"
                    value={emailSignIn}
                    onChange={(e) => setEmailSignIn(e.target.value)}
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    value={passwordSignIn}
                    onChange={(e) => setPasswordSignIn(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
              <button type="submit" className="btn-form">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
