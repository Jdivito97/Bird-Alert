import React from "react";
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
  return (
    <>
      <div>
        <div className="birdImg">
          <img src={image} alt={comName}></img>
        </div>
        <div className="birdCard">
          <h1>
            <strong>
              <a href={link} target="_blank">
                {comName}
              </a>
            </strong>
          </h1>
          <p>
            <em>{sciName}</em>
          </p>
          <h5>
            {quantity} {quantity > 1 ? "individuals were" : "individual was"}{" "}
            observed on {date} at {time} in {county}
            {country === "CA" ? "" : " County"}, {state}.
          </h5>
        </div>
      </div>
    </>
  );
};

export default BirdCard;
