import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Do not use / in child Component */}
      <Link to={"profile"}>Profile</Link>
      <h3>Welcome to Center</h3>
      <Link to={"settings"} state={{ name: "Taimoor", arzi: "dunya" }}>
        Users settings
      </Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
