//1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
while(arr.indexOf(num) != -1) {
    arr.splice(arr.indexOf(num), 1);
}
console.log(arr);

//2
let number = 287152;
let count = 0;
while(number != 0) {
    number = Math.floor(number / 10);
    count += 1;
}
console.log(count);

//3
let sum = 0;
number = 287152;
while(number != 0) {
    sum += number%10;
    number = Math.floor(number/10);
}
console.log(sum);

//4
let n = 7;
let product = 1;
for(let i = 1; i <= n; i++) {
    product *= i;
}
console.log(product);

//5
let nums = [1, 2, 3, 4, 5, 6, 2, 3];
let max = nums[0];
for(let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
}
console.log(max);