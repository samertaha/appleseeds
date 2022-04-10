const fruits = ['🍕', '🍔', '🍰', '🍩', '🍣'];

const filled = fruits.fill('🎂', 2, 4);

console.log(filled);

let consthundrenarr = Array.from(Array(101).keys());
consthundrenarr.shift(-1);
console.log(consthundrenarr);

const person = {
  name: 'samer',
  family: 'taha',
};
const propertyValues = Object.values(person);

console.log(propertyValues);
console.log('---------------------------------');

const names = ['Alex', 'Bob', 'Johny', 'Atta'];

// convert array to th object
const obj = Object.assign({}, names);

// print object
console.log(obj);

// {0: "Alex", 1: "Bob", 2: "Johny", 3: "Atta"}

console.log('---------------------------------');

console.log(Array.isArray(names));

console.log('---------------------------------');

const newarr = [...names];
console.log(newarr);
newarr.pop();
console.log(newarr);
console.log(names);
console.log('---------------------------------');

console.log(names);
const copyByRef = names;
copyByRef.pop();
console.log('now pop will reflect on both variables');
console.log(names, copyByRef);
