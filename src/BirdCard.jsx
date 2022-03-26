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

  const splice = () => {
    uniqueBird.map((bird) => {
      const time = bird.obsDt.split(" ");

      bird.date = time[0];
      bird.time = time[1];
      console.log("time", time);
      console.log("bird", bird);
    });
  };
  splice();
  return (
    <>
      <div>
        {uniqueBird.map((bird) => (
          <div className="birdCard1">
            <h1>
              <strong>{bird.comName}</strong>
            </h1>
            <p>
              <em>{bird.sciName}</em>
            </p>
            <h5>
              {bird.howMany}{" "}
              {bird.howMany > 1 ? "individuals were" : "individual was"}{" "}
              observed by {bird.firstName} {bird.lastName} on {bird.date} at{" "}
              {bird.time} in {bird.subnational2Name} County,{" "}
              {bird.subnational1Name}.
            </h5>
            <a
              href={`https://ebird.org/species/${bird.speciesCode}`}
              target="_blank"
            >
              Learn more about this species
            </a>
          </div>
        ))}
        <div className="birdImg">
          <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/234780531/" />
        </div>
        <div className="birdImg">
          <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297069781/1800" />
        </div>
        <div className="birdImg">
          <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/329183831/1200" />
        </div>
      </div>
    </>
  );
};

export default BirdCard;
