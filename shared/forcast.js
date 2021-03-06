const request = require('postman-request');

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=' +
//     latitude +
//     ',' +
//     longitude +
//     '&units=m';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     callback('Unable to connect to weather service.', undefined);
//   } else if (response.body.error) {
//     callback('Unable to find  location', undefined);
//   } else {
//     callback(undefined, 'It is currently '  +
//         response.body.current.temperature +
//         ' degrees. It feels like ' +
//         response.body.current.feelslike +
//         ' degrees outside'
//     );
//   }
// });

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to to weather service', undefined);
    } else if (body.error) {
      callback('Unable find weather location', undefined);
    } else {
      callback(
        undefined,
        'It is currently ' +
          body.current.temperature +
          ' degrees. It feels like ' +
          body.current.feelslike +
          ' degrees outside'
      );
    }
  });
};

module.exports = forecast;


// ! bug fixed down know the problem was