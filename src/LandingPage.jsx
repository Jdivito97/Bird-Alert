import React, { useState } from "react";
import axios from "axios";

function LandingPage() {
  //   const [species, setSpecies] = useState({});

  //   function handleClick(e) {
  //     let birdData = {
  //       method: "get",
  //       url: "https://api.ebird.org/v2/data/obs/geo/recent/notable?lat=30.3&lng=-94.32",
  //       headers: { "X-eBirdApiToken": "uakosadgnlqk" },
  //     };

  //     console.log("logged");
  //     axios(birdData)
  //       .then(function (response) {
  //         setSpecies(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });

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
    // <div className="birdCard">
    //   {console.log("has been logged", species[0].comName)}
    //   {/* <h1>{species[0].comName}</h1>
    //   <h5>{species[0].sciName}</h5> */}
    //   {/* <button onClick={handleClick} type="submit">
    //     >
    //   </button> */}
    // </div>
    <h1>hello everybirdy</h1>
  );
}

export default LandingPage;
