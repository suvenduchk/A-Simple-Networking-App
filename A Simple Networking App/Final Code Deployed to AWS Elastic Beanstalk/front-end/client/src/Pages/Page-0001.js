import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Page-0001.css";

const Page0001 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="page-0001">
      <div className="horizontal-tab-bar">
        <Link to="dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="profile">
          <button>All Profiles</button>
        </Link>
        <Link to="network">
          <button>Network</button>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Page0001;
