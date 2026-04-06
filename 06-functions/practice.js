//1
function largerThan(arr, num) {
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            ans.push(arr[i])
        }
    }
    return ans;
}

let nums = [1,2,3,4,5,6,7];
console.log(largerThan(nums, 0));

//2
function uniqueChar(str) {
    let mySet = new Set();

    let ans = "";

    for(let i = 0; i < str.length; i++) {
        if(!mySet.has(str[i])) {
            ans = ans + str[i]
        }
        mySet.add(str[i])
    }

    return ans;
}

console.log(uniqueChar("abcdabcdefgggh"));

//3
function longestName(arr) {
    let longest = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > arr[longest].length) {
            longest = i;
        }
    }
    return arr[longest];
}
country = ["Australia", "Germany", "United States of America"] 
console.log(longestName(country));

//5
function countVowles(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowles("hEllo world!"));

//6
function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}