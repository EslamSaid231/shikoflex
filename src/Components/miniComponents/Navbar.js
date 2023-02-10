import React from "react";
import "../Styles/Navbar.css";
import logo from "../Styles/ShikoFlex.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <a class="link dim white dib mr3" href="#" title="Home">
            Home
          </a>
          <a class="link dim white dib mr3" href="#" title="About">
            About
          </a>
          <a class="link dim white dib mr3" href="#" title="Store">
            Store
          </a>
          <a class="link dim white dib" href="#" title="Contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
