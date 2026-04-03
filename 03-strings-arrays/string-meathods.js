//*functions are a bock of code that take defined input and return defined output.
//*meathods are functions bound to a class i.e - string a primitive data type class.

let str = "   Hello World!   ";
console.log(str);

//trim - removes spaces at start and end
console.log(str.trim());

// upper and lower case conversion
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//*meathods with arguments

//indexOf - returns the 1st occurance of a substring in a string
console.log(str.indexOf('l'));
console.log(str.indexOf('el'));
console.log(str.indexOf('z'));

//*meathod chaining. left to right
str = str.trim().toLowerCase()
console.log(str);

//slice returns a part of the original string as a substring
console.log(str.slice(0, 5));
console.log(str.slice(6));
//slice(num) => slice(str.length-num)
console.log(str.slice(-1));

//replace
console.log(str.replace("hello", "goodbye"));

//repeat
console.log(str.repeat(3));

//practice
let msg = "help!";
console.log(msg.trim().toUpperCase());

let name = "OmniscientReader"
console.log(name.slice(4, 9)); // should give scien
console.log(name.indexOf("ni")); //should give 2
console.log(name.replace("sci","pot")); // should give OmnipotentReader

console.log(name.slice(0,10).replace("sci", "pot"));