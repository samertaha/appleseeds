Array.prototype.myFilter = function (callback) {
  let res = [];
  this.forEach((val) => (callback(val) ? res.push(val) : ''));
  return res;
};
Array.prototype.myFind = function (callback) {
  let res = null;
  this.forEach((val, i) => (callback(val) ? (res = this[i]) : ''));
  return res;
};
Array.prototype.myReduce = function () {};

const animals = [1, 2, 3, 4, 5];

const evens = animals.myFilter(function (val) {
  return val % 2 === 0;
});
console.log('myFilter', evens);

const five = animals.myFind(function (val) {
  return val === 5;
});
console.log('myFind', five);
