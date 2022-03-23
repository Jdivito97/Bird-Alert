import React, { useContext, useState } from "react";
import axios from "axios";
import { RegionContext } from "./contexts/region.context";

function LandingPage() {
  //   const [species, setSpecies] = useState({});
  const { region } = useContext(RegionContext);
  //

  let birdData = {
    method: "get",
    url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full`,
    headers: { "X-eBirdApiToken": "uakosadgnlqk" },
  };

  axios(birdData)
    .then(function (response) {
      // setSpecies(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

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
    <div className="greetingCard">
      <h1>Welcome to Bird-Alert</h1>

      <p>
        Select a region to see recent notable species observations in a region
      </p>
    </div>
  );
}

export default LandingPage;
