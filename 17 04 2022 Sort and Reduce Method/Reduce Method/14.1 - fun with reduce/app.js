var numbers = [2, 5, 6, 4, 3, 7];
var max = numbers.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);

var sumEeves = numbers.reduce((total, n) => {
  return n % 2 == 0 ? total + n : total + 0;
});
console.log(sumEeves);

function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}

console.log(average(numbers));
