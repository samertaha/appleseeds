let numbers = [1, -5, 666, 2, 400, 11];
numbers = numbers.sort();
console.log(numbers);
numbers = numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);
