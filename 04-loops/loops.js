for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("======================================");

//print all odd number
for(let i = 1; i <= 15; i+=2) {
    console.log(i);
}

console.log("======================================");

//print all even reverse
for (let i = 14; i >= 0; i-=2) {
    console.log(i);
}

console.log("======================================");

//*infinite loops - no ending condition
//!will cause a crash do no us
// for (let i = 0; ; i++) {
//     console.log(i);
// }


//table of 5
for(let i = 0; i < 10; i++) {
    console.log(`5 * ${i} = ${5*i}`);
}

console.log("======================================");

//nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i = ${i} and j = ${j}`);
    }
}

console.log("======================================");

//while loop - used when number of iterations is not known
let a = 0;
while(a < 5) {
    console.log(a);
    a+=1;
}

console.log("======================================");

//guess your fav movie
let movie = 'avengers';
let guess = prompt("guess my fav movie : (enter q to exit) (ans is avengers)");

while(movie !== guess && guess !== 'q') {
    guess = prompt("guess again : (enter q to exit) (ans is avengers)");
}

if(movie === guess) {
    console.log("your guess was correct");
} else {
    console.log("better luck next time");
}

console.log("======================================");

//break keyword is used to exit a loop

for(let i = 0; i < 5; i++) {
    if(i == 3) {
        console.log("breaking");
        break;
    }
    console.log(i);
}

console.log("======================================");

//continue keywork is used to skip the rest of the current iteration

for(let i = 0; i < 5; i++) {
    if(i == 3) {
        console.log("continuing");
        continue;
    }
    console.log(i);
}

//printing with loops
console.log("======================================");

let fruits = ['apple', 'mango', 'banana', 'grapes'];

for (let i = 0; i < fruits.length; i++) {
    console.log(i + " => " + fruits[i]);
}

console.log("======================================");
let nums = [[1, 2, 3, 4], [5, 6], [], [7]];

for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums[i].length; j++) {
        console.log(`at i = ${i} and j = ${j} => ${nums[i][j]}`);
    }
}

console.log("======================================");

//for of loop

let avengers = ['iron-man', 'hulk', 'spider-man', 'super man'];
for(hero of avengers) {
    console.log(hero);
}

for(hero of avengers) {
    for(char of hero) {
        console.log(char);
    }
    console.log("====");
}

console.log("======================================");
