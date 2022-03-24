import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RegionContext } from "./contexts/region.context";

function LandingPage() {
  const [species, setSpecies] = useState({});
  const { region } = useContext(RegionContext);

  // API call is currently lagging on click behind...
  useEffect(() => {
    let birdData = {
      method: "get",
      url: `https://api.ebird.org/v2/data/obs/${region}/recent/notable?detail=full`,
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
      <div className="greetingCard">
        <h1>Welcome to Bird-Alert</h1>
        <p>Select a region to see recent notable species observations</p>
      </div>

      {/* this div will ocassionally remove all divs and navbar features at seemingly random times unsure of cause if this happens comment it out and refresh */}

      {/* <div className="birdCard1">
        <h1>{species[0].comName}</h1>
        <h5>
          <em>{species[0].sciName}</em>
        </h5>
      </div> */}
    </>
  );
}

export default LandingPage;
