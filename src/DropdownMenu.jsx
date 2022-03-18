import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import { GiWorld } from "react-icons/gi";
import America from "./America";
import Canada from "./Canada";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  function CreateMenu(state) {
    console.log("States", state);
    return (
      <DropdownItem
        key={state.id}
        leftIcon={<SearchIcon />}
        title={state.title}
      />
    );
  }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    console.log("props", props);
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.title}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<GiWorld />}
            className="regionSelect"
            title="Select Region"
          ></DropdownItem>
          <DropdownItem
            value="US"
            leftIcon={<VscStarFull />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="USA"
            title="United States"
          />
          <DropdownItem
            value="CA"
            leftIcon={<FaCanadianMapleLeaf />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="CND"
            title="Canada"
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "USA"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<KeyboardDoubleArrowLeftIcon />}
            title="Go back"
          ></DropdownItem>
          {America.map(CreateMenu)}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "CND"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<KeyboardDoubleArrowLeftIcon />}
            title="Go back"
          ></DropdownItem>
          {Canada.map(CreateMenu)}
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
