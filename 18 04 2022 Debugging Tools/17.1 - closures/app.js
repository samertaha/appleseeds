//Blocking 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
console.log(firstResult);

var result = firstResult(2);
console.log(result);
// on line 10 firstResult will get ref to otherFunction inside the someFunction function
// on line 13 it will run the function otherFunction wich will print 5 and it made no use on the arguments number and input ...
console.log('--------------------------------------');

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
// a will be printed as 1 value as its closest to its scope eventhough b2 has its a variable wich is declaed on windows.a ...
console.log('--------------------------------------');

//let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// log function will be executed after 100 millesecond delay wich the loop at that time will be ended with i =3 thats why it will print 3 3 times ...

console.log('--------------------------------------');

for (let x = 0; x < 3; x++) {
  const log = () => {
    console.log('x=' + x);
  };
  setTimeout(log, 100);
}
