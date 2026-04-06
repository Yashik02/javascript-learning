console.log("game start!");

let max = prompt("Enter the maximum range number :");

let ans = Math.floor(Math.random()*max) + 1;

let guess = prompt(`(press 'q' to exit) Make a guess! 1 - ${max}:`);

while(true) {
    if(guess == 'q' || guess == ans) {
        break; 
    } else {
        console.log("wrong! guess again");
        if(guess > ans) {
            console.log("guess a lower number");
        } else {
            console.log("guess a higher number");
        }
    }
    guess = prompt(`(press 'q' to exit) Make a guess! 1 - ${max}:`);
}

if(guess != 'q') {
    console.log("you guessed correct!");
} else {
    console.log("game terminated");
}
console.log("game end");

//keep in kind that a prompt at the start of a loop delays the consol updation