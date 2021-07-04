import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Logo = () => {
  const { show_logo } = useGlobalContext();

  if (show_logo) {
    return (
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    );
  }
};

export default Logo;
