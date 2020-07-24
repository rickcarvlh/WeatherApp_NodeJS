// callback function
setTimeout(() => {
  console.log('Two seconds are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
// called each time for each name on the array
const shortNames = names.filter((name) => {
  // return true if name length is less than 4
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geoCode('Philadelphia', (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log("Sum: " + sum);
});
