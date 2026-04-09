let arr = [1,2,3,4,5,6,7,8];
console.log(arr);

//forEach function

//can be used in 3 ways

//1
arr.forEach((n) => console.log(n*n));

//2
const square = function(n) {
    console.log(n*n);
}
arr.forEach(square);

//3
const sq = (n) => console.log(n*n)
arr.forEach(sq);

//the original array is not mutated
console.log(arr);


let students = [
    {
        name : "yashik",
        marks: 19.1
    },
    {
        name : "saransh",
        marks: 73
    },
    {
        name : "prince",
        marks: 67.6
    },
    {
        name : "ishan",
        marks: 87
    },
]

students.forEach((data) => {
    console.log(data.name);
});

//we can modify the objects in an array with for each
students.forEach((data) => {
    data.gpa = data.marks/10;
})
console.log(students);


//map functions
// works similar to foreach - but stores and returns the values as a new array

let arr1 = [1,2,3,4,5,6,7,8];
let doubledarr1 = arr1.map((n) => n*2);
console.log(doubledarr1);

//filter function - makes a new array with elements that pass a certain condition
console.log(arr1.filter((n) => n%2==0));

//every - returns true if every element of an array passes a particular condition.
console.log(arr1.every((n) => n < 18));
console.log(arr1.every((n) => n > 5));

//some - returns true if atleast one of the element of an array passes a particular condition.
console.log(arr1.some((n) => n > 18));
console.log(arr1.some((n) => n > 5));

//reduce - returns a single value (accumulator, element); - works (n-1)times
console.log(arr1.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
}));

console.log(arr1.reduce((acc, curr) => Math.min(acc, curr)));

//spread  - (...) - it is used to spread and expand the iterableinto multiple values
let nums = [1,2,3,4,5];
console.log(Math.max(...nums));

console.log("yashik");
console.log(..."yashik");

console.log([..."saransh"]);

let odd = [1,3,5,7,9];
let even = [2,4,6,8];
let oddandeven = [...odd, ...even]; // can be used to make a deep copy of an array also
console.log(oddandeven);

//spread with object literals
let data = {
    email : "hello@gmall.com",
    password : "1234**7",
    class : 126
}

let dataCopy = {...data, id : 124};
console.log(dataCopy);

//we can make array into objects
let codes = [3,4,23,8,12,96,22,69,13];
let codesData = {...codes};
console.log(codesData);

//this does not work because object literals are not iterable
// let dataToArray= [...data];
// console.log(dataToArray);

//...rest allows a function to take an indefinite numbers of arguments and turn them into an array.
const sum = (...args) => {
    console.log(args); //stores them as an array
    return args.reduce((acc, curr) => acc+curr);
};

console.log(sum(1,2,3,4,5,6,7,8));

//every function has it's own arguments collection.
//arguments are not exactly like array
function afunction(a, b, c, d, e, f) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    //arguments.push(3); //!does not work\
}
afunction();
afunction(2, 4);
afunction(4,2,7,1,6,3);

//...args is usually written at the last of a function to not collide with other arguments due to ordering
function afunction1(msg, ...args) {
    console.log(arguments);
    console.log(args);
}

afunction1("yashik", 1,2,3,45);

//destructuring
//storing values of arrays into multiple variables
let names = ["dhruv", "kiran", "kishan", "pablo", "tony"];
let [winner, runnerup] = names;
console.log(winner, runnerup);
[, ,winner, runnerup] = names;
console.log(winner, runnerup);
[winner, runnerup, ...others] = names;
console.log(winner, runnerup, others);


//destructuring on objects

const student = {
    name : "yashik",
    semester : 2,
    marks : [36, 34, 23, 27, 40, 30],
    username : "zeroik",
    password : "lolllll"
};

let {username, password} = student;
console.log(username, password);

let {name: user, semester: sem, city: place = "mumbai"} = student;
console.log(user, sem, place);