import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "../../contexts/region.context";
import BirdCard from "../../components/BirdCard/BirdCard";
import "./LandingPage.css";

function LandingPage() {
  const [species, setSpecies] = useState({});
  const { region } = useContext(RegionContext);

  useEffect(() => {
    let birdData = {
      method: "get",
      url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full&maxResults=50`,
      headers: { "X-eBirdApiToken": "uakosadgnlqk" },
    };

    axios(birdData)
      .then(function (response) {
        setSpecies(response.data);
        console.log("species data", species);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [region]);

  // console.log("Returned Region", region);
  let uniqueBirds = null;
  if (species.length > 0) {
    uniqueBirds = [
      ...species
        .reduce((map, bird) => map.set(bird.comName, bird), new Map())
        .values(),
    ];
    uniqueBirds.length = 3;
    console.log("removed duplicates", uniqueBirds);
    let splice = () => {
      uniqueBirds.map((bird) => {
        let time = bird.obsDt.split(" ");
        bird.date = time[0];
        bird.time = time[1];
        //   console.log("time", time);
        //   console.log("bird", bird);
      });
    };
    splice();
  }

  console.log("uniquebirds", uniqueBirds);
  return (
    <>
      <div>
        {/*
        {//TODO: make uniqueBirds mock data that resembles the same structure of your API response with repeat birds and everything. Use 
        //manipulate that to fit with the below .map function}

        TODO: uniqueBirds.map((uniqueBird)=> <BirdCard name={uniqueBird.name} description={uniqueBird.description} img={}/>)
      
      */}
        {species.length > 0 ? (
          <>
            {uniqueBirds.map((bird) => (
              <BirdCard
                uniqueBirds={uniqueBirds}
                comName={bird.comName}
                sciName={bird.sciName}
                quantity={bird.howMany}
                observer={`${bird.firstName} ${bird.lastName}`}
                date={bird.date}
                time={bird.time}
                country={bird.countryCode}
                county={bird.subnational2Name}
                state={bird.subnational1Name}
                link={`https://ebird.org/species/${bird.speciesCode}`}
                img={
                  "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/234780531/"
                }
              />
            ))}
          </>
        ) : (
          <div className="greetingCard">
            <h1>Welcome to Bird-Alert</h1>
            <p>Select a region to see recent notable species observations</p>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;