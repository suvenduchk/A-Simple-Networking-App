import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./MenuBar.css";

const MenuBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsLoggedIn(false);
          return;
        }
        const response = await axios.get(
          // "http://localhost:5000/api/current-user",
          "http://localhost:5000/current-user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.userName) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-bar">
      <div className="menu-group">
        <button className="menu-button" onClick={() => handleNavigation("/")}>
          Home
        </button>
        <button
          className="menu-button"
          onClick={() => handleNavigation("/about-us")}
        >
          About Us
        </button>
        <button
          className="menu-button"
          onClick={() => handleNavigation("/services")}
        >
          Services
        </button>
        <button
          className="menu-button"
          onClick={() => handleNavigation("/contact-us")}
        >
          Contact Us
        </button>
        <input
          type="text"
          className="custom-input"
          value="Pro Infotech Pvt. Ltd."
          readOnly
        />
      </div>
      <div className="menu-group">
        {!isLoggedIn ? (
          <>
            <button
              className="menu-button"
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up
            </button>
            <Link className="menu-button" to="/login">
              Login
            </Link>
          </>
        ) : (
          <button className="menu-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
