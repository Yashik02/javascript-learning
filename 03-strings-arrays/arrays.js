let marks = [100, 99, 78, 13];

//array - indexing operator
console.log(marks[0]);

//arrays are mutable
console.log(marks);
marks[1] = 101
console.log(marks);

//length function
console.log(marks.length);

//mixed arrays - unlike java mixing data types is allowed
let arr1 = ["hello", 1.1, true, null, 9999];
console.log(arr1);

//array meathods can also be chained
console.log(arr1[0][3]);

//some array properties
//arrays are dynamic like arraylist in java
marks[15] = 89; // this will create empty undefined array elements
console.log(marks);

//*array meathods

let nums = [1,2,3,4];
console.log(nums);

//push - add element at the end
nums.push(5);
console.log(nums);

//pop - deleted element from the end and returns it
console.log(nums.pop());
console.log(nums);

//unshift - add element at the front
nums.unshift(0);
console.log(nums);

//shift - deletes an element from the start and returns it
console.log(nums.shift());
console.log(nums);


//practice
let start = ["jan", "july", "march", "aug", ];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);

//indexOf - return first occurance index
console.log(start.indexOf("june"));
console.log(start.indexOf("orange"));

//includes
console.log(start.includes("hello"));

//concat
let arrOne = [1,2,3];
let arrtwo = [4,5,6];
//it does not modify the original arrays
console.log(arrOne.concat(arrtwo));

//reverse
arrOne.reverse();
//modifies the original array
console.log(arrOne);

//slice - copies and returns the part of an array as an new array
let numbers = [1,2,3,4,5,6,7,8];
console.log(numbers.slice());
console.log(numbers.slice(3,5)); 
console.log(numbers.slice(-4)); // this meanin (numbers.length-4)
console.log(numbers.slice(100)); //empty array

//*splice - a very useful meathod for many purposes
//array.splice(startIdx, deleteCount, newElement1, newElement2...)
//it modifies the original array
//*it returns the deleted elements
//*deletion and insertion are optional

console.log("splice");
numbers = [1,2,3,4,5,6,7,8];
console.log(numbers.splice(1,4,101));
console.log(numbers);

numbers = [1,2,3,4,5,6,7,8];
console.log(numbers.splice(-7,1,202, 303));
console.log(numbers);

numbers = [1,2,3,4,5,6,7,8];
console.log(numbers.splice(2)); //deletes all the elements after 2
console.log(numbers);

//sort
//modifies the original array
let no = [1, -5, 5, 6, 67, -11, 39, 29];
//sort takes  the Lexicographical  order
no.sort((a, b) => parseFloat(a) - parseFloat(b));
console.log(no);

//practice questions
start = ["jan", "july", "march", "augst"];
start.splice(0,2,"july", "june")
console.log(start);

let languages = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(languages.reverse().indexOf("javascript"));

//array referances
console.log([1] == [1]);
//console.log([1] === [1]); //it will always return false becaus js compares object by referance , not value

let a = [1,2,3];
let b = a; //a and b points to the same adress
console.log(a == b);

b[0] = 4;
console.log(a); //error in b reflect in a

//const
const x = [1,2,3];
//can can do anything on the array as before but we cannot make a new reassign a new array
//basically the "adress" cannot be changed
//!this will give an error
//x = [2,3];

//nested arrays
let nest = [[1, 2], [3, 4], ["hello", 5], [1, 2, 3, [4, 5.5]]];
console.log(nest);

let tic_tac_toe = [['x', null, 'o'], [null, 'x', null], ['o', null, 'x']];
tic_tac_toe[0][1] = 'o';
console.log(tic_tac_toe);

