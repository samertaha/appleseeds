const foods = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];

console.log(foods.reverse());
console.log(foods.sort());

// let sortme = ["a","b","A","B"];
// sortme.sort((a,b)=>b.localeCompare(a))
// console.log(sortme) // ["B", "b", "A", "a"]
// sortme.reverse() // ["a", "A", "b", "B"]

const foodsWithUpperCase = [
  'falafel',
  'Sabich',
  'hummus',
  'pizza with extra pineapple',
];

foodsWithUpperCase.sort((a, b) => a.localeCompare(b));
console.log(foodsWithUpperCase);
foodsWithUpperCase.sort((a, b) => b.localeCompare(a));
console.log(foodsWithUpperCase);

const words = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];

console.log(words.sort((a, b) => a.length - b.length));
