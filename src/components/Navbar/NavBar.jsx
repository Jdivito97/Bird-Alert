import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <h1 className="prompt">
            <strong>Select region </strong>
          </h1>
          {props.children}
        </ul>
        <h1 className="header">Bird-Alert</h1>
      </nav>
    </header>
  );
}

export default Navbar;
