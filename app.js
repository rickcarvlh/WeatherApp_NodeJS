const request = require('postman-request');

// hardcoded url -> bad code
const url =
  'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=37.8267,-122,4233&units=m';

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(
    'It is currently ' +
      response.body.current.temperature +
      ' degrees. It feels like ' +
      response.body.current.feelslike +
      ' degrees outside'
  );
});
