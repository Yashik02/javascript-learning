//check if all the elements in our array are multiple of 10 or not
let arr1 = [10, 20, 30, 40];
console.log(arr1.every((n) => (n%10) == 0));

console.log(arr1.reduce((acc, curr) => Math.min(acc, curr)));


//practice questions - PDF
//1
let nums = [1,2,3,4,5];
console.log(nums.map((n) => n*n));
console.log(nums.reduce((acc, curr) => acc+curr));
console.log(nums.reduce((acc, curr) => acc+curr)/nums.length);


//2
console.log(nums.map((n) => n+5));

let words = ["apocalypse", "two-ways", "three", "here"]
console.log(words.map((word) => word.toUpperCase()));

//3
function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map((n) => n*2)];
}
console.log(doubleAndReturnArgs([1,2,45,6], 1,5,6,2,4,75));

//4
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}
const object1 = {
    name : "yashik",
    roll : 1089
}
const object2 = {
    sem : 2,
    city : "patiala"
}
console.log(mergeObjects(object1, object2));