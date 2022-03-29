import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "../../contexts/region.context";
import BirdCard from "../../components/BirdCard/BirdCard";
import "./LandingPage.css";
import "../../components/BirdCard/BirdCard.css";

function LandingPage() {
  const [species, setSpecies] = useState({});
  const [birdPic, setbirdPic] = useState([]);
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

  useEffect(async () => {
    const imgAPICall = uniqueBirds.map((bird) => {
      setTimeout(() => {
        const getBirdPic = {
          method: "GET",
          url: "https://google-search55.p.rapidapi.com/image",
          params: { q: `${bird.sciName} ebird`, safe: "false" },
          headers: {
            "X-RapidAPI-Host": "google-search55.p.rapidapi.com",
            "X-RapidAPI-Key":
              "e03463902dmsh15badedcf7458bdp1ca947jsnd7fbe817c516",
          },
        };

        axios
          .request(getBirdPic)
          .then(function (response) {
            console.log(response.data);
            let imageObject = response.data;
            setbirdPic((birdPic) => [birdPic, imageObject]);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, 1100);
    });

    await imgAPICall();

    // const results = await Promise.all(imgAPICall);
  }, [region]);

  console.log("bird pic array", birdPic);

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
            <div className="Container">
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
                  image={`https://cdn.download.ams.birds.cornell.edu/api/v1/asset/427265371/1800`}
                />
              ))}
            </div>
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
