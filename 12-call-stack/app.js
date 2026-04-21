// java script is a single threaded language
// webbrowsers who are made with C++ are not

// Asynchronous nature of js

console.log("start");

setTimeout(() => {
    // the browser keeps count of the timer and when the timer is over, it pushes the function into the call stack and it executes
    console.log("middle");
}, 1000);

console.log("end");
// start -> end -> middle

// this allows to work without stopping for tasks that might take time to load like API calls etc.
// this Async also causes some issues and problems.

// callback hell
// callback nesting -> callback hell
// in development when using APIs etc this structure is very common
// ==================================================================================================== //
//let h1 = document.querySelectorAll("h1")[0];

// function changeColor(color, delay, nexColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nexColorChange) nexColorChange();
//     }, delay);
// }

// changeColor("purple", 1000, () => {
//     changeColor("indigo", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("yellow", 1000, () => {
//                     changeColor("orange", 1000, () => {
//                         changeColor("red", 1000); //so on and on
//                     });
//                 });
//             });
//         });
//     });
// });
// ==================================================================================================== //

// above with the help of a promise
let h1 = document.querySelector("h1");
function changeColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("color changer to: ", color);
            resolve();
        }, 500); // the promice is in pending state while the timer is on
    });
}

changeColor("purple")
    .then(() => changeColor("blue"))
    .then(() => changeColor("green"))
    .then(() => changeColor("yellow"))
    .then(() => changeColor("orange"))
    .then(() => changeColor("red"))
    .catch(() => console.log("there was some error")); // no catch needed


// example of callback hell
// ==================================================================================================== //
// function savetodb(data, sucess, faliure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         sucess();
//     } else {
//         faliure();
//     }
// }

// savetodb(
//     "data1",
//     () => {
//         console.log("Data1 Saved.");
//         //we only wanna save data2 if data1 is saved
//         savetodb(
//             "data2",
//             () => {
//                 console.log("Data2 Saved.");
//                 // we only wanna save data3 if both data1 and data 2 are saved
//                 savetodb(
//                     "data3",
//                     () => {
//                         console.log("Data3 Saved.");
//                     },
//                     () => {
//                         console.log("Weak Connection 3.");
//                     },
//                 );
//             },
//             () => {
//                 console.log("Weak Connection 2.");
//             },
//         );
//     },
//     () => {
//         console.log("Weak Connection 1.");
//     },
// );
// ==================================================================================================== //

// promices - an object that represents the eventual completion (or failure) of an asynchoronous operation and it's resulting value.
function saveToDb(data) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    // conventional name is resolve, reject
    return new Promise((success, failure) => {
        if (internetSpeed > 4) {
            success("Success: data was saved - " + data);
        } else {
            failure("Failure: data was not saved - " + data);
        }
    });
}

// improved version
saveToDb("this is data 1")
    .then((result) => {
        console.log(result);
        return saveToDb("this is data 2");
    })
    .then((result) => {
        console.log(result);
        return saveToDb("this is data 3");
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
