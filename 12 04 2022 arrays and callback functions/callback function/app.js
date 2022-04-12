// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

const cb = (str) => {
  console.log(str);
};

const isString = (str, cb) => {
  if (typeof str === 'string') cb(str);
};

isString('samer', cb);
