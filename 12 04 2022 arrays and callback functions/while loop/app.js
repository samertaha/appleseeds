// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

// Instructions Write a function that will receive an array of strings and will return a new array containing all the lengths of all the strings in the array it got as a parameter. So that if you call this function with this array for example: ["boo", "doooo", "hoo","ro"] it will return this array: [3, 5, 3, 2].

// const tolen = (arr) => {
//   return arr.map((Element) => Element.length);
// };

// console.log(tolen(['boo', 'doooo', 'hoo', 'ro']));

const tolen = (arr) => {
  // return arr.map((Element) => Element.length);
  let i = 0;
  let result = [];
  //   console.log(result);
  while (i < arr.length) {
    result.push(arr[i].length);
    i++;
  }
  return result;
};

console.log(tolen(['boo', 'doooo', 'hoo', 'ro']));
