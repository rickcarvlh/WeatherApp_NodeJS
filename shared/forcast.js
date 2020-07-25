const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=2bacbb8ab8fe4b5dcf92b55f1d8ba452&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (response.body.error) {
      callback('Unable to connect to location', undefined);
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
};

module.exports = forecast;
