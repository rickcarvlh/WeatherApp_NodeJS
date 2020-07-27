const geoCode = require('./shared/geocode');
const forcast = require('./shared/forcast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide a valid address');
} else {
  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forcast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log('Local: ', location);
      console.log('Data: ', forecastData);
    });
  });
}
