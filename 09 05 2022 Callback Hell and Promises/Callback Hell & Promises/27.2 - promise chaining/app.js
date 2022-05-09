// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.
// Submit the file to Hive.

const validArray = (array) => {
  console.log(array.some((el) => typeof el !== 'string'));
  return new Promise((resolve, reject) => {
    if (!array.some((el) => typeof el !== 'string')) {
      return resolve(array);
    } else return reject('rejected:only strings allowed');
  });
};

const makeAllCaps = (arr) => arr.map((el) => el.toUpperCase());
const sortWords = (arr) => arr.sort();

validArray(['samer', 'keter', 'shaul', 'amer'])
  .then((goodArray) => {
    let result = [];
    result = makeAllCaps(goodArray);
    result = sortWords(result);
    console.log(result);
  })
  .catch((rejected) => {
    console.log(rejected);
  });
