const populations = [10, 20, 100, 300];
percentageOfWorld2 = function (population1) {
  return ((population1 / 7900) * 100).toFixed(3);
};
const populationPercentages = (arr) => {
  let percentages = [];
  populations.forEach((v) => percentages.push(percentageOfWorld2(v)));
  return percentages;
};
console.log(populationPercentages(populations));
