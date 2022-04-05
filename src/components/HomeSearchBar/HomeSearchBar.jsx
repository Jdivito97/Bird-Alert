import React from "react";
import "./HomeSearchBar.css";

function HomeSearchBar(props) {
  return (
    <header>
      <nav className="Homebar">
        <ul className="Homebar-nav">
          <h1 className="prompt">
            <strong>Select region </strong>
          </h1>
          {props.children}
        </ul>
      </nav>
    </header>
  );
}

export default HomeSearchBar;
