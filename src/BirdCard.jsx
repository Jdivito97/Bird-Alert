import React from "react";

const BirdCard = (species) => {
  console.log("raw species array", species.species);

  const uniqueBird = [
    ...species.species
      .reduce((map, bird) => map.set(bird.comName, bird), new Map())
      .values(),
  ];
  uniqueBird.length = 3;
  console.log("removed duplicates", uniqueBird);

  return (
    <div>
      {uniqueBird.map((bird) => (
        <div className="birdCard1">
          <h1>{bird.comName}</h1>
          <p>
            <em>{bird.sciName}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BirdCard;
