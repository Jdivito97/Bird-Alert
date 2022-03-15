import React from "react";
import Axios from "axios";
import axios from "axios";

function LandingPage() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://api.ebird.org/v2/data/obs/geo/recent/notable?lat=30.3&lng=-94.32",
    headers: { "X-eBirdApiToken": "uakosadgnlqk" },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return <h1>Hello everybirdy</h1>;
}

export default LandingPage;
