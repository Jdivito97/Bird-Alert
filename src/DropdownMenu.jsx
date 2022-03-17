import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { VscStarFull } from "react-icons/vsc";
import America from "./America";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  function CreateMenu(usState) {
    return <DropdownItem name={usState.title} />;
  }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
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
          <DropdownItem leftIcon={<LanguageIcon />}>Select Region</DropdownItem>
          <DropdownItem
            leftIcon={<VscStarFull />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="USA"
          >
            United States
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaCanadianMapleLeaf />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="CND"
          >
            Canada
          </DropdownItem>
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
          >
            <h2>Return to region select</h2>
          </DropdownItem>
          {America.map(CreateMenu)}
          <DropdownItem leftIcon={<SearchIcon />}>Alabama</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Alaska</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Arizona</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Arkansas</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>California</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Colorado</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Connecticut</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Delaware</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>
            District of Columbia
          </DropdownItem>
          <DropdownItem value="FL" leftIcon={<SearchIcon />}>
            Florida
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Georgia</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Hawaii</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Idaho</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Illinois</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Indiana</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Iowa</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Kansas</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Kentucky</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Louisiana</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Maine</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Maryland</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Massachusetts</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Michigan</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Minnesota</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Mississippi</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Missouri</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Montana</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Nebraska</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Nevada</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>New Hampshire </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>New Jersey </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>New Mexico </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>New York </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>North Carolina </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>North Dakota </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Ohio</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Oklahoma </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Oregon</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Pennsylvania</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Rhode Island </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>South Carolina </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>South Dakota </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Tennessee</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Texas</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Utah</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Vermont</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Virginia</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Washington</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>West Virginia </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Wisconsin</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Wyoming</DropdownItem>
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
          >
            <h2>Return to region select</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Alberta</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>
            British Columbia
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Manitoba</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>New Brunswick</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>
            Newfoundland and Labrador
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>
            Northwest Territories
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Novia Scotia</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Nunavut</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Ontario</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Quebec</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>
            Prince Edward Island
          </DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Saskatchewan</DropdownItem>
          <DropdownItem leftIcon={<SearchIcon />}>Yukon</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
