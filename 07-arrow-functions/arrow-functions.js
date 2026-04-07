// arrow functions are a short way to write a function
// arrow functions act like a value and cannot be used on their own.
// they can be used by storing them in an variable or passing them as higher order functions
// in higher order function the function passed as an variable is known as a Callback

//sum
const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 3));
console.log(typeof sum);

//cube
const cube = (a) => {
  return Math.pow(a, 3);
};
console.log(cube(3));

//no arguments
const hello = () => console.log("hello");
hello();

//implicit return

//square
const square = (a) => Math.pow(a, 2);
console.log(square(5));
//double
const double = (a) => a * 2;
console.log(double(4));


//set Timeout - window object function
// used to cause delay

console.log("set timeout start");

//takes time in ms
const func1 = () => console.log("set timeout mid");
setTimeout(func1, 0.0001);  //?even with such a low timeout, set timeout and set interaval are asyncronous functions and are executed after the main code.

console.log("set timeout end");

// set Interval 
// used to execute a function multiple times with set interval time

console.log("set interval start");

setInterval(() => console.log("set interval mid1111"), 100000);
setInterval(() => console.log("set interval mid2222"), 100000);

console.log("set interval end");




