import React from "react";
import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__item header__text">MENU</h1>
      <div className="header__right">
        <img className="header__item header__logo" src={logo} alt="" />
        <div className="sidebar__square"></div>
      </div>
    </header>
  );
}

export default Header;
