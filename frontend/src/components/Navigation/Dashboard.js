import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <NavLink
      className="dashboard_nav_link"
      activeClassName="dashboard_nav_active"
      to="/dashboard"
    >
      Explore
    </NavLink>
  );
}
