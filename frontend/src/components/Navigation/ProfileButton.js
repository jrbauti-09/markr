import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

    history.push("/");
  };

  return (
    <>
      <span
        style={{
          fontSize: "2em",
          marginRight: "2em",
          marginLeft: "2em",
          color: "white",
        }}
      >
        Welcome, {user?.username}
      </span>
      <button className="logout-btn" onClick={logout}>
        <i className="fas fa-power-off"></i>
      </button>
    </>
  );
}
