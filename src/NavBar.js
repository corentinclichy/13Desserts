import React from "react";
import "./NavBar.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>
          <li>
            <a href="#">COLLECTION</a>
          </li>
          <li>
            <a href="#">PRESSE</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="navbar__searchbar"></div>
      <div className="navbar__contactIcon">
        <InstagramIcon />
        <MailOutlineIcon />
        <LocationOnIcon />
      </div>
    </div>
  );
}

export default NavBar;
