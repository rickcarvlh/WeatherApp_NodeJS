const geoCode = require('./shared/geocode');
const forecast = require('./shared/forecast');

// hardcoded url -> bad code
// const url =
//   'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=37.8267,-122,4233&units=m';

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body.current);
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       'It is currently ' +
//         response.body.current.temperature +
//         ' degrees. It feels like ' +
//         response.body.current.feelslike +
//         ' degrees outside'
//     );
//   }
// });

geoCode('Madrid', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
});

forecast('-75.7088, 44.15.45', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
});
