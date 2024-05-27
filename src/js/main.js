import "../css/main.css";

import request from "./request";
import { createCountries } from "./updateUI";
import "./filter";
import "./mode";

console.log("hello world");

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
