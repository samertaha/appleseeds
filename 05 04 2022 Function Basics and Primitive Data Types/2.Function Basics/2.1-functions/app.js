function describeCountry(country, population, capitalcity) {
  return `${country} has ${population} million people and its capital city is ${capitalcity}`;
}
const egypt = describeCountry('egypt', 100, 'cairo\n');
const usa = describeCountry('usa', 300, 'washington\n');
const japan = describeCountry('japan', 126, 'tokyo\n');

console.log(egypt, usa, japan);
