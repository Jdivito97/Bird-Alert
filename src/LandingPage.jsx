import React, { useState } from "react";
import axios from "axios";

function LandingPage() {
  const [species, setSpecies] = useState({});

  var axios = require("axios");

  var birdData = {
    method: "get",
    url: "https://api.ebird.org/v2/data/obs/geo/recent/notable?lat=30.3&lng=-94.32",
    headers: { "X-eBirdApiToken": "uakosadgnlqk" },
  };

  axios(birdData)
    .then(function (response) {
      setSpecies(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  //   var birdPic = {
  //     method: "GET",
  //     url: "https://google-search55.p.rapidapi.com/image",
  //     params: { q: "{species[0].sciName} ebird", safe: "false" },
  //     headers: {
  //       "x-rapidapi-host": "google-search55.p.rapidapi.com",
  //       "x-rapidapi-key": "e03463902dmsh15badedcf7458bdp1ca947jsnd7fbe817c516",
  //     },
  //   };

  //   axios
  //     .request(birdPic)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  return (
    <div className="birdCard">
      <h1>bird name</h1>
      <h5>bird name</h5>
    </div>
  );
}

export default LandingPage;
