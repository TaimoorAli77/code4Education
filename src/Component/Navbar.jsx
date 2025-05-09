import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "transparent" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "transparent" };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "transparent" };
              }}
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "transparent" };
              }}
              to="/user"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
