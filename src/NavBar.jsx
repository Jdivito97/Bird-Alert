import React from "react";
import { GiNestBirds } from "react-icons/gi";

function Navbar(props) {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <h1>
            Bird-Alert
            <GiNestBirds />
          </h1>
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
