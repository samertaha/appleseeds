// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.
// Submit the file to Hive

const GraterThan10 = (number) => {
  const number10 = new Promise((resolve, reject) => {
    if (number >= 10) {
      return resolve('It is resolved');
    } else {
      return reject('It is rejected');
    }
  });
  number10
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((rejected) => {
      console.log(rejected);
    });
};

GraterThan10(10);
