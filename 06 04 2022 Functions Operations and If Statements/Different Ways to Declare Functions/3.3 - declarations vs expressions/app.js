function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(3);
}
const egypt = percentageOfWorld1(100);
const jordan = percentageOfWorld1(12);
const israel = percentageOfWorld1(10);
console.log(egypt);
console.log(jordan);
console.log(israel);

percentageOfWorld2 = function (population1) {
  return ((population1 / 7900) * 100).toFixed(3);
};
const japan = percentageOfWorld2(200);
const usa = percentageOfWorld2(300);
const canada = percentageOfWorld2(150);
console.log(japan);
console.log(usa);
console.log(canada);
