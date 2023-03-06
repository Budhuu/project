import React from "react";
import Menu from "./menu/Menu";
import "./Header.css";
import Signup from "./signup/Signup";
import Logo from "./logo/Logo";

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu">
          <Menu name="CONTACT" />
          <Menu name="ABOUT US  " />
          <Menu name="PROGRAMS  " />
          <Menu name="TEACHERS" />
        </div>
        <div className="signup">
          <Signup />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
