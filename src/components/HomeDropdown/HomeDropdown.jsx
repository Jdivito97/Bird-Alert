import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SearchIcon from '@mui/icons-material/Search';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { VscStarFull } from 'react-icons/vsc';
import { GiCactus } from 'react-icons/gi';
import America from '../../RegionComponents/America';
import Canada from '../../RegionComponents/Canada';
import Mexico from '../../RegionComponents/Mexico';
import DropdownItem from '../DropdownMenu/DropdownItem';
import './HomeDropdown.css';

function HomeDropdown() {
  const [activeMenu, setActiveMenu] = useState('main');
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
    <div
      className='homedropdown'
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            leftIcon={<VscStarFull />}
            rightIcon={<ChevronRightIcon />}
            goToMenu='USA'
            title='United States'
            setActiveMenu={setActiveMenu}
          />
          <DropdownItem
            className='Canada'
            leftIcon={<FaCanadianMapleLeaf />}
            rightIcon={<ChevronRightIcon />}
            goToMenu='CND'
            title='Canada'
            setActiveMenu={setActiveMenu}
          />
          <DropdownItem
            leftIcon={<GiCactus />}
            rightIcon={<ChevronRightIcon />}
            goToMenu='MXO'
            title='Mexico'
            setActiveMenu={setActiveMenu}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'USA'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<KeyboardDoubleArrowLeftIcon />}
            title='Go back'
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
        in={activeMenu === 'CND'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<KeyboardDoubleArrowLeftIcon />}
            title='Go back'
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

      <CSSTransition
        in={activeMenu === 'MXO'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<KeyboardDoubleArrowLeftIcon />}
            title='Go back'
            setActiveMenu={setActiveMenu}
          ></DropdownItem>
          {Mexico.map((obj) => (
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

export default HomeDropdown;
