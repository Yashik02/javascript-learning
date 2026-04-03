//1
let num = Number(prompt("please enter an integer : "));
if(num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}

//2
let name = prompt("please enter your name : "), age = prompt("please enter your age : ");
alert(`${name} is ${age} years old.`)

//3
let quarter = Number(prompt("enter the current quarter : "));
quarter = quarter%4;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, Augst, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        break;
}

//4
let str = prompt("enter a string : ");
if((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
    console.log("golden string!");
} else {
    console.log("not a golden string!");
}

//5
let a = 1, b = 2, c = 3;
if(a >= b && a >= c) {
    console.log(`${a} is the largest`);
} else if(b >= a && b >= c) {
    console.log(`${b} is the largest`);
} else {
    console.log(`${c} is the largest`);
}

//6 - bonus
let x = 32, y = 47852;
if(x%10 === y%10) {
    console.log("same last digits");
} else {
    console.log("diff last digits");
}