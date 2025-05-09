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
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "Orange" : "transparent" };
              }}
              to="/geturl"
            >
              Get URL
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard"}
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "" };
              }}
            >
              {" "}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/table"}
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "" };
              }}
            >
              {" "}
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/datapost"}
              style={({ isActive }) => {
                return { background: isActive ? "orange" : "" };
              }}
            >
              {" "}
              New Data Post
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "Orange" : "transparent" };
              }}
              to="/dataput"
            >
              Put Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
