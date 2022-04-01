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
    (async () => {
      let birdData = {
        method: "get",
        url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full&maxResults=50`,
        headers: { "X-eBirdApiToken": "uakosadgnlqk" },
      };

      axios(birdData)
        .then(function (response) {
          setSpecies(response.data);
        })
        .catch(function (error) {
          // console.log(error);
        });
    })();
  }, [region]);

  console.log("species data", species);

  let uniqueBirds = null;
  if (species.length > 0) {
    uniqueBirds = [
      ...species
        .reduce((map, bird) => map.set(bird.comName, bird), new Map())
        .values(),
    ];
    uniqueBirds.length = 3;
    uniqueBirds.map((bird) => {
      let time = bird.obsDt.split(" ");
      bird.date = time[0];
      bird.time = time[1];
    });
  }
  console.log("uniquebirds", uniqueBirds);

  useEffect(() => {
    if (uniqueBirds !== null) {
      setbirdPic([]);
      uniqueBirds.map((bird, index) => {
        const url = `https://www.flickr.com/services/rest?method=flickr.photos.search&text=${bird.sciName}&format=json&nojsoncallback=1&api_key=ba8b5e447d4dfb260333412843c36f16&&media=photos&per_page=15`;

        (async () => {
          try {
            const response = await axios.get(url);
            setbirdPic((birdPic) => [...birdPic, response.data.photos.photo]);
          } catch (error) {
            console.error(error);
          }
        })();
      });
    }
  }, [species]);

  console.log("birdPic", birdPic);

  return (
    <>
      <div>
        {/*
        {//TODO: make uniqueBirds mock data that resembles the same structure of your API response with repeat birds and everything. Use 
        //manipulate that to fit with the below .map function}

        TODO: uniqueBirds.map((uniqueBird)=> <BirdCard name={uniqueBird.name} description={uniqueBird.description} img={}/>)
      
      */}
        {species.length > 0 && birdPic.length === 3 ? (
          <>
            <div className="Container">
              {uniqueBirds.map((bird, index) => (
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
                  image={`https://live.staticflickr.com/${birdPic[index][2].server}/${birdPic[index][2].id}_${birdPic[index][2].secret}_c.jpg`}
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
        {/* {birdPic.length < 3 && species.length >= 1 ? (
          <div className="greetingCard">
            <h1>Retrieving birds...</h1>
            <p>Ruffling feathers...</p>
          </div>
        ) : null} */}
      </div>
    </>
  );
}

export default LandingPage;
