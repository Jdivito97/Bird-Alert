import React, { useContext, useEffect, useState } from "react";
import { RegionContext } from "../../contexts/region.context";
import "./DropdownMenu.css";

function DropdownItem(props) {
  const { region, setRegion } = useContext(RegionContext);

  useEffect(() => {}, [region]);

  let ExecuteAnimation = () =>
    props.goToMenu && props.setActiveMenu(props.goToMenu);

  return (
    <div
      className={"menu-item"}
      onClick={(e) => {
        console.log("props.value", props.value);
        if (props.value) setRegion(props.value);
        ExecuteAnimation();
      }}
    >
      <span className="icon-left">{props.leftIcon}</span>
      {props.title}
      <span className="icon-right">{props.rightIcon}</span>
    </div>
  );
}

export default DropdownItem;
