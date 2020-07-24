const request = require('postman-request');

// hardcoded url -> bad code
const url =
  'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=37.8267,-122,4233&units=m';

const geoUrl =
  'http://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYmVsdGh6b3IiLCJhIjoiY2tjeXRtcDQ2MGRhNDJ5bXY0dDNwYnNrayJ9.sxP8YTOONN49zmpvaSqyhA';

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  if (error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(
      'It is currently ' +
        response.body.current.temperature +
        ' degrees. It feels like ' +
        response.body.current.feelslike +
        ' degrees outside'
    );
  }
});

// Geocoding
// Address => lat/Long => Weather

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to geocoding service');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
