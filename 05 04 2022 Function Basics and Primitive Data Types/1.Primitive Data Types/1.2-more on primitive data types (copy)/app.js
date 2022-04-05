/*
--Delete the wrong answers--

1. Which of the following is/are strings?

a) 4
b) 4.0
c) '4'  X

2. Which of the following is/are numbers?

a) 4  X
b) 4.0 X
c) '4'
d) -4 X

3. Which of the following is/are booleans?

a) true X
b) false X
c) "true"

4. What is the result of 80 + 71.2?

a) 151.2 X
b) 151
c) 8071.2 

5. What is the result of "80" + 71.2?

a) 151.2
b) 151
c) "8071.2" X

6. Does 100 + 30 produce a number or a string?

a) number X
b)string

7. Does "100" + 30 produce a number or a string?

a)number
b)string  X

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var a = 1;
const b = 2;
let c = 3;
//declare a variable and reassign a value to it
let d = 3;
d = 4;
//create a variable and after that assign a string with its value being: He's got it!
let str = '';
str = "He's got it!";
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
const rest_bill = 50;
let tax = 0.17 * rest_bill;
console.log(
  'Your total bill is <total bill> $.' + (rest_bill + tax).toString()
);
// Round the number 50.6 to its nearest integer
console.log(Math.round(50.6));
//Create a variable that is undefined
let undefined;
console.log(typeof undefined);
