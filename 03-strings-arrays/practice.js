//1
let nums = [1,2,3,4,5,6];
console.log(nums.slice(0, 3));

//2
console.log(nums.slice(-3));

//3
let str = 'a'
console.log(str === '');

//4
str = "Hello World";
if(str[1] == str[1].toUpperCase()) {
    console.log("it is an uppercase char");
} else {
    console.log("it is not an uppercase char");
}

//5
let word = "  Iron Man    "
console.log(word.trim());

//6
let key = 1;
console.log((nums.includes(key))? "it contains" : "does not contains");