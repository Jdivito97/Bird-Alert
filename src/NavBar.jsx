import React from "react";

function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <h1>Bird-Alert</h1>
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
