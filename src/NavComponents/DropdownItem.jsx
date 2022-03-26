import React, { useContext, useEffect, useState } from "react";
import { RegionContext } from "../contexts/region.context";

function DropdownItem(props) {
  const { region, setRegion } = useContext(RegionContext);

  let GrabValue = (e) => {
    setRegion(props.value);
  };

  useEffect(() => {}, [region]);

  let ExecuteAnimation = () =>
    props.goToMenu && props.setActiveMenu(props.goToMenu);

  return (
    <div
      className={"menu-item"}
      onClick={(e) => {
        GrabValue();
        ExecuteAnimation();
      }}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.title}
      <span className="icon-right">{props.rightIcon}</span>
    </div>
  );
}

export default DropdownItem;
