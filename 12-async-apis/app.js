// asunc Function
// creates an async function

async function greet() {
    // returns a promise
    return "hello";
}
console.log(greet());

let hello = async () => {}; // returns a promise
console.log(hello());

async function helloAuthor(author) {
    console.log(`there are 3 ways to survive the apocalypse by ${author}`);
}

// rejected example
async function causeError() {
    abcde(); //some random error
}
causeError()
    .then(() => console.log("resolved"))
    .catch(() => console.log("some error was caused"));

function getNumber(start, end) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * (end - start + 1)) + start;
        setTimeout(() => {
            if (num % 2 == 0) {
                console.log(num);
                resolve("even num");
            } else {
                reject("Error : odd num");
            }
        }, 1000);
    });
}

//do not follow demo0 seriously 
async function demo0 () {
    console.log("demo0 oongoing now");

    await getNumber(1, 10)
        .then((result) => {
            console.log(result);
        })
        .catch((result) => {
            console.log(result);
        });
    getNumber(1, 10)
        .then((result) => {
            console.log(result);
        })
        .catch((result) => {
            console.log(result);
        });
}

//demo0();

//instead use try and catch for error handling

async function demo () {
    console.log("demo ongoing now");

    try {
        await getNumber(1, 10);
        await getNumber(1, 10);
        await getNumber(1, 10);
        await getNumber(1, 10);
    } catch (error) {
        console.log(error);
    }

    //still works in case or error
    console.log("works with or without error happening");
}

demo();

    