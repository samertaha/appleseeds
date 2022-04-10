let people = ['Greg', 'Mary', 'Devon', 'James'];
people.forEach((Element) => console.log(Element));
console.log('--------------------');

people.shift();
console.log(people);

console.log('--------------------');

people.pop();
console.log(people);
console.log('--------------------');

people.unshift('Matt');
console.log(people);

console.log('--------------------');

people.push('samer');
console.log(people);

console.log('--------------------');

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == 'Mary') break;
}
console.log('--------------------');

const withoutMaryAndMatt = people.slice(2, 4);
console.log(withoutMaryAndMatt);
console.log('--------------------');

console.log(people.indexOf('Mary'));

console.log('--------------------');

console.log(people.indexOf('foo'));
console.log('--------------------');

people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people);
people.splice(2, 1);
console.log(people);
people.splice(2, 0, 'Elizabeth', 'Artie');
console.log(people);
const withBob = people.concat('Bob');
console.log(withBob);
