//practice question from lectures

//1
const square = (n) => n*n;
console.log(square(4));

//2
function printHello() {
    let id = setInterval(() => {
        for(let i = 0; i < 5; i++) {
            console.log("hello world");
        }
    }, 2000);

    setTimeout(() => {
        clearInterval(id)
        console.log("interval cleared");
    }, 10000);
}
//printHello();

//practice question PDF

//1 
const arrayAverage = (arr) => {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    }
    return sum/arr.length;
}
let nums = [1,2,3,4,5,6];
console.log(arrayAverage(nums));

//2
const isEven = (n) => n%2==0;
console.log(isEven(7));


//guess the output of the following:
//3 
// the settimeout will detach the logMessage function from the object1 and wll search for message in the window objects. because setTimeout belongs to window object. and it will print undefined.
const object1 = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object1.logMessage, 1000);

//4 
// values 1 and 2 will do nothing as they are not used anywhere, the this.length will become either window.length or object.length in browser and terminal respectively. window.length gives 0 and global.length gives undefined.
let length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);