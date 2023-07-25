const request = require("request");
const dotenv = require("dotenv");
const geocode = require("./controller/gecode.servises");
const forecast = require("./controller/forcast.servises");
dotenv.config({
  path: ".config.env",
});

console.log(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=${process.env.GEOCODE_TOKEN}`
);

if (process.argv[2]) {
  const country = process.argv[2];

  geocode(country, (error, data) => {
    console.log("ERROR : ", error);
    console.log("DATA  : ", data);

    if (data) {
      forecast(data.latitude, data.longtitude, (error, data) => {
        console.log("ERROR : ", error);
        console.log("DATA  : ", data);
      });
    } else {
      console.log("Data Entered have An Error");
    }
  });
} else {
  console.log("no arguments pass to the function");
}
