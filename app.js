const geoCode = require('./shared/geocode');
const forcast = require('./shared/forcast');

geoCode('Madrid', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
});

// ! not working properly 
//  forcast('-75.7088, 44.15.45', (error, data) => {
//    console.log('Error: ', error);
//    console.log('Data: ', data);
//  });
