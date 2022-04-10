const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

const arrlength = (arr) => {
  var i = 0;
  arr.array.forEach((element) => {
    i++;
  });
  return i;
};

const arraySum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
const arrayMulti = (arr) => {
  return arr.reduce((a, b) => a * b, 1);
};
console.log('---------------------');
console.log(arraySum([1, 2, 3]));
console.log('---------------------');
console.log(arrayMulti([1, 2, 3]));
