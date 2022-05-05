import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import Dashboard from "./Dashboard";
import "./Navigation.css";
import svg from "../../images/cropped_markR.svg";
import Markr from "../../images/logo_black.svg";

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
        <NavLink
          className="nav_home"
          activeClassName="nav_link_active"
          to="/login"
        >
          Log In
        </NavLink>
        <NavLink
          className="nav_home"
          activeClassName="nav_link_active"
          to="/signup"
        >
          Sign Up
        </NavLink>
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
                activeClassName="nav_link_active_logo"
                exact
                to="/"
              >
                <img
                  src={Markr}
                  alt="logo"
                  style={{
                    width: "auto",
                    height: "20rem",
                    marginTop: "1.2rem",
                  }}
                ></img>
              </NavLink>
              {isLoad && sessionUser && (
                <NavLink
                  className="nav_home"
                  activeClassName="nav_link_active"
                  to="/collections"
                >
                  Your Landmarks
                </NavLink>
              )}
            </div>
            <div className="center_container">{isLoad && sessionDash}</div>
            <div className="right_container">{isLoad && sessionLinks}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
