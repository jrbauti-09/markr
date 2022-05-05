import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";
import Markr from "../../images/logo_black.svg";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // TODO revert back to original.
  // if (sessionUser) return <Redirect to="/dashboard" />;

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = (e) => {
    e.preventDefault();

    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  return (
    <>
      <div className="main_div_login">
        <div className="form_section">
          <div className="form_case">
            <form onSubmit={handleSubmit}>
              <div className="form_header">
                {/* <img className="form_logo" alt="form_logo" src={Markr}></img> */}
                <h3>Log in to Markr</h3>
              </div>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
              <label>
                Username or Email
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  className="login_email_input"
                  placeholder="Email or Username"
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="login_password_input"
                  required
                />
              </label>
              <div className="login_container">
                <button className="login_button" type="submit">
                  Log In
                </button>
                <button
                  type="button"
                  onMouseDown={demoLogin}
                  className="demo_button"
                >
                  Demo User
                </button>
                <span>
                  Don't have an account? Visit{" "}
                  <Link className="sign_up_link" to="/signup">
                    Sign up page
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
