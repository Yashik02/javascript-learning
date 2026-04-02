//numbers
a = 5;
b = 5.5;
c = -6;
d = 0.9999999999999999999999;
e = 0.9999999;
f = NaN;

console.log(d, "there is a limit to int capacity");
console.log(e);
console.log(b);
console.log(f);

//typeof command
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

//operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
console.log(a==b);

// operator precedence -> [() , ** , * % / , - +] left --> right

console.log((2+1)*4**5/6-10+4/2);

//assignment operator
let x = 1;
console.log(x);
x += 1;
console.log(x);
x -= 1;
console.log(x);
x *= 12;
console.log(x);
x /= 4;
console.log(x);
x **= 4;
console.log(x);
x %= 2;
console.log(x);

//urinary operator
x = 1;
//post incriment
console.log(x++);
console.log(x--);

//pre inclrement
console.log(--x);
console.log(++x);

//boolean values 
isAdult = true;
console.log(isAdult);
console.log(!isAdult);
console.log(typeof isAdult == 'boolean');

//dynamically typed
isAdult = 19;
console.log(isAdult);

//typescript is a a languagle like js but it is static typed. made by typescript

//! this will cause error
//let ya = yashik;

//strings

let name1 = "yashik"
let name2 = 'dhruv'
let empty = ""

console.log(name1);
console.log(name2);
console.log(empty);

console.log(`'single quote' and "double quotes"`);

console.log(name1[4]);
console.log(name1[10]);
console.log(name1.length);

console.log(name1 );

//null and undefined
//undefined is default 
let one;
console.log(one);
console.log(typeof one);
//null is intentional absense of value, it is an object and it is a keyword

let two = null;
console.log(two);
console.log(typeof two);

//practice
let myName = "Yashik Bandhu"
console.log(myName.length);

let myFirstName = "Yashik"
console.log(myFirstName[0]);

console.log(myFirstName[myFirstName.length-1]);

console.log(myFirstName + 123);

let test1 = "";
let test2 = " ";

console.log(test1.length);
console.log(test2.length);
