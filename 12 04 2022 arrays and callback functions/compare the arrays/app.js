// Front end development:
// Loops
// JavaScript – compare the arrays
// The following exercise contains the following subjects:
// for loop
// Instructions
// You are given two arrays:
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.
// const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
// "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
//     "Hamburgers"];

const sames = (food, food1) => {
  const res = [];
  food.forEach((fd) => {
    food1.forEach((fd1) => {
      fd == fd1 ? res.push(fd) : '';
    });
  });
  return res.length ? res : false;
};

const food = ['Noodle', 'Pasta', 'Ice-cream1', 'Meat', 'Cucumber', 'Olives1'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];
console.log(sames(food, food1));
