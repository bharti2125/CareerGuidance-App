import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header>
      <nav>
        <a  href="/" className="logo">
          <img
            src="./images/DALL·E 2024-12-09 23.28.47 - A sleek and modern logo for 'My Career Guidance'. The logo should feature a circular design with a graduation cap, an upward arrow symbolizing progres.webp"
            alt="My Career Guidance Logo"
          />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/student">Student</a>
          </li>
          <li>
            <a href="/college">Colleges</a>
          </li>
          <li>
            <a href="/aptitude">Aptitude Test</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <a href="/signin" className="btn">
            Login
          </a>
          <a href="/signup" className="btn btn-signup">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
