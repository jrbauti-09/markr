import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Dashboard from "./Dashboard";
import "./Navigation.css";

export default function Navigation({ isLoad }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let sessionDash;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
    sessionDash = <Dashboard />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div>
      <ul className="ul_list">
        <li className="nav_list">
          <div className="nav_container">
            <div className="left_nav_container">
              <NavLink
                className="nav_home"
                activeClassName="nav_link_active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div className="center_container">{isLoad && sessionDash}</div>
            <div className="right_container">{isLoad && sessionLinks}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
