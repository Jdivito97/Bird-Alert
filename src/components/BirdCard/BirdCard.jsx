import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "../../contexts/region.context";
import "./BirdCard.css";

const BirdCard = (uniqueBird) => {
  const {
    comName,
    sciName,
    quantity,
    observer,
    date,
    time,
    country,
    county,
    state,
    link,
    image,
  } = uniqueBird;
  console.log("image link", { image });
  return (
    <>
      {/* <div className="Container"> */}
      <div>
        <div className="birdImg">
          <img src={image} alt="above species"></img>
        </div>
        <div className="birdCard">
          <h1>
            <strong>{comName}</strong>
          </h1>
          <p>
            <em>{sciName}</em>
          </p>
          <h5>
            {quantity} {quantity > 1 ? "individuals were" : "individual was"}{" "}
            observed by {observer} on {date} at {time} in {county}
            {country === "CA" ? "" : " County"}, {state}.
          </h5>
          <a href={link} target="_blank">
            Learn more about this species
          </a>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default BirdCard;
