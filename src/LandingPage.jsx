import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "./contexts/region.context";
import BirdCard from "./BirdCard";

function LandingPage() {
  const [species, setSpecies] = useState({});
  const { region } = useContext(RegionContext);

  useEffect(() => {
    let birdData = {
      method: "get",
      url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full&maxResults=30`,
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

  console.log("Returned Region", region);

  //     let birdPic = {
  //       method: "GET",
  //       url: "https://google-search55.p.rapidapi.com/image",
  //       params: { q: `${species[0].sciName} ebird`, safe: "false" },
  //       headers: {
  //         "x-rapidapi-host": "google-search55.p.rapidapi.com",
  //         "x-rapidapi-key": "e03463902dmsh15badedcf7458bdp1ca947jsnd7fbe817c516",
  //       },
  //   //   };

  //   //   axios
  //   //     .request(birdPic)
  //   //     .then(function (response) {
  //   //       console.log(response.data);
  //   //     })
  //   //     .catch(function (error) {
  //   //       console.error(error);
  //   //     });
  //     console.log(species);
  //   }

  return (
    <>
      <div>
        {species.length > 0 ? (
          <BirdCard species={species} />
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
