import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SearchIcon from "@mui/icons-material/Search";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import { GiWorld } from "react-icons/gi";
import America from "../RegionComponents/America";
import Canada from "../RegionComponents/Canada";
import DropdownItem from "../NavComponents/DropdownItem";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
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
            title="Select your region"
          ></DropdownItem>
          <DropdownItem
            leftIcon={<VscStarFull />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="USA"
            value=""
            title="United States"
            setActiveMenu={setActiveMenu}
          />
          <DropdownItem
            className="Canada"
            leftIcon={<FaCanadianMapleLeaf />}
            rightIcon={<ChevronRightIcon />}
            value=""
            goToMenu="CND"
            title="Canada"
            setActiveMenu={setActiveMenu}
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
            value=""
            setActiveMenu={setActiveMenu}
          ></DropdownItem>
          {America.map((obj) => (
            <DropdownItem
              key={obj.id}
              leftIcon={<SearchIcon />}
              title={obj.title}
              value={obj.value}
            />
          ))}
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
            value=""
            setActiveMenu={setActiveMenu}
          ></DropdownItem>
          {Canada.map((obj) => (
            <DropdownItem
              key={obj.id}
              leftIcon={<SearchIcon />}
              title={obj.title}
              value={obj.value}
            />
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
