import "../css/main.css"

import request from "./request"
import { createCountries } from "./updateUI"
import './filter'

const API = 'https://restcountries.com/v3.1/all'

request(API).then((data) => {
    console.log(data);
}).catch((err) => {
    alert(err.message);
})