import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";
import Markr from "../../images/logo_black.png";

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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

  return (
    <>
      <div className="main_div_login">
        <nav className="nav_bar_login">
          <div className="nav_container_login">
            <span className="markr_icon_login">
              <Link to="/" className="markr_link">
                <img
                  src={Markr}
                  className="markr_link_image"
                  alt="markR logo"
                ></img>
              </Link>
            </span>
          </div>
        </nav>
        <div className="form_section">
          <div className="form_case">
            <form onSubmit={handleSubmit}>
              <div className="form_header">
                <img className="form_logo" alt="form_logo"></img>
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
                  required
                />
              </label>
              <div className="login_container">
                <button className="login_button" type="submit">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
