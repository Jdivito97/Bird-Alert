import React, { useState, useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let clickHandler = (e) => {
      console.log(e);
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });
  return domNode;
};

function NavItem(props) {
  const [open, setOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <li ref={domNode} className="nav-item">
      <button className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  );
}
export default NavItem;
