//app.js is normally used for javascript file name
//consol.log is used to make js messages appear in the console window of the web browser

console.log("Hello World!");
let a = 5;
let b = 10;

console.log("sum is : " + (a+b));

//template literals
let pencilPrice = 10;
let eraserPrice = 5;

//we have to use , or + to concatenate
console.log("The total price is :", (pencilPrice + eraserPrice) + " Rupees.");

//better way is to use template literals
console.log(`The total price is : ${pencilPrice + eraserPrice} Rupees.`);

console.log(5  == '5');
console.log(5 ==='5');
console.log(5  != '5');
console.log(5 !=='5');

//keep note
/*  
 * 0 == ' ' -> true
 * 0 == flase -> true
 * null == undefined -> true
 */

//imp ACSII unicode  codes
/**  
 * 0-9 (48–57)
 * uppercase A-Z (65–90)
 * lowercase a-z (97–122)
 * Uppercase and lowercase letters differ by a value of 32
 */

//comparisons are based on these codes

let age = 18;

if(age < 18) {
    console.log("you are not an adult");
} else if(age >= 18 && age < 60) {
    console.log("you are an adult");
} else {
    console.log("upu are a senior");
}
//we can also next them like in other languages

//logical operators - (&& = AND) (|| = OR) (! = NOT)

//some values are considered falsy in js
// 0, -0, 0n, "", " ", null, undefined, NaN

//switch case

let day = 1;

switch (day) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
    case 2:
        console.log("three");
        break;
    default:
        console.log("default case");
        break;
}

//fall through - checking up to down, once a case is true all the cases below it will execute regardless of if they are true or now
let key = "user";
switch (key) {
    case "admin":
    case "user":
    case "employee":
        console.log("access authorized");
        break;

    default:
        console.log("access denied");
        break;
}

//alrets, prompts and other consolde meggages

console.log("this is a log");
console.error("this is an error");
console.warn("this is a warning");


let alpha = prompt("Please enter your name in this Prompt");
alert(`this is an alert ${alpha} !`)


