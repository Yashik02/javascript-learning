
//a reusable block of code: 
//js syntax
function sayHello () {
    console.log("Hello there!");
}

//calling a function
sayHello();
//this is not calling
sayHello;
console.log(sayHello);

//creating a function to roll a dice
function dice() {
    return Math.floor(Math.random()*6) + 1;
}

console.log(dice());

//arguments
function helloUser (firstName, lastName, age) {
    console.log(`Hello ${firstName} ${lastName}!`);
    console.log(`you are ${age} years old`);
}
helloUser("yashik", "bandhu", 18);

//default arguments
function hello(firstName = "User") {
    console.log(`Hello ${firstName}!`);
}
hello("anusha");
hello();

function sum(a=2, b) {
    return a+b;
}
console.log(sum(1,2));
console.log(sum(4)); // arguments are assigned in order // a = 4, b = undefined

//sum
function sum(a, b) {
    return a + b;
}
console.log(sum(23,67));

//average
function average(a, b, c) {
    return (a+b+c)/3;

    //*after return statement the functions is terminated
    console.log("unreachable code");
}
console.log(average(1,2,4));
console.log(average(1,2,4));

//print table
function table(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
table(17);

//functions only return a single value

let str = ["i lov", "e to ea", "t piz", "za!"];
function concatenate(arr) {
    let n = arr.length;
    let string = "";
    for(let i = 0; i < n; i++) {
        string += arr[i];
    }
    return string;
}
console.log(concatenate(str));

//*scope:

// Global Scope: Variables declared outside of any function or block belong to the global scope. They are accessible from anywhere in the program.
// Function (Local) Scope: Each function creates its own scope. Variables declared inside a function (using var, let, or const) are only accessible within that function.
// Block Scope: This scope applies to variables declared with let and const inside curly braces { }. 
// Unlike let/const, variables declared with var do not have block scope and "leak" out to the nearest function or global scope. 

A = 0 // always global

let a1 = 11; //global scope - available everywhere
var a2 = 12;
const a3 = 12;

function myFun () {
    let b1 = 21; // function scope - available within a function
    var b2 = 22;
    const b3 = 23;
}

{
    let c1 = 31; // block scope - available within a block
    var c2 = 32; // var leaks out of block scope to the nearest function or global scope
    const c3 = 33; 
}
console.log(c2);


// Lexical Scope: A variable's scope is determined by its physical location. a child function can access the variables from the parent.
function outer() {
    let x = 78;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();
//{->[->()]}

//function expression
const product = function(a, b) {
    return a*b;
};
console.log(product); //prints the function itself
console.log(product()); //undefined
console.log(product(2, 6)); //gives product


//*higher order functions
//a function that takes on or more functions as an argument

//higher order functions
function multipleGreet (func, times) {
    for(let i = 0; i < times; i++) {
        func();
    }
}
const greet = function () {
    console.log("greetings!");
};
multipleGreet(greet, 5);

//function factory
function oddEvenFunctionFactory(request) {
    if(request == "odd") {
        const isOdd = function (n) {
            return (n%2)==1;
        };
        return isOdd;
    } else if(request == "even") {
        const isEven = function (n) {
            return (n%2)==0;
        };
        return isEven;
    } else {
        console.log('invalid request enter "even" or "odd"');
    }
}

console.log(oddEvenFunctionFactory("odd")(5));
console.log(oddEvenFunctionFactory("even")(5));
//! console.log(oddEvenFunctionFactory("lorem")(5)); 


console.log(oddEvenFunctionFactory("odd"));
console.log(oddEvenFunctionFactory("even"));
console.log(oddEvenFunctionFactory("lorem"));

let isEve = oddEvenFunctionFactory("even");
console.log(isEve(5));



//*meathods
//functions that can be performed on an object

const calculator = {
    add : function(a, b) {
        return a+b;
    },
    sub : function(a, b) {
        return a-b;
    },
    mul : function(a, b) {
        return a*b;
    },
    div : function(a, b) {
        return a/b;
    },
    mod : function(a, b) {
        return a%b;
    },
    pow : function(a, b) {
        return Math.pow(a,b);
    }
};

console.log(calculator.pow(7,2));

//short hand
const calcV2 = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    },
    div(a, b) {
        return a/b;
    },
    mod(a, b) {
        return a%b;
    },
    pow(a, b) {
        return Math.pow(a,b);
    }
};
