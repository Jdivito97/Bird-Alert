import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "../../contexts/region.context";
import "./BirdCard.css";

const BirdCard = (props) => {
  return (
    <>
      <div className="Container">
        {" "}
        <h1>hi timmy</h1>
        <div className="birdCard">
          <h1>
            {" "}
            <strong>{props.comName}</strong>
          </h1>
          <p>
            <em>{props.sciName}</em>
          </p>
          <h5>
            {props.quantity}{" "}
            {props.quantity > 1 ? "individuals were" : "individual was"}{" "}
            observed by {props.observer} on {props.date} at {props.time} in{" "}
            {props.county}
            {props.country === "CA" ? "," : " County"} {props.state}.
          </h5>
          <a href={props.link} target="_blank">
            Learn more about this species
          </a>
          {/* <div className="birdImg">
            <img src={props.img} />
          </div> */}
        </div>{" "}
      </div>
    </>
  );
};

export default BirdCard;
