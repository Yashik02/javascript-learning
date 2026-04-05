//an object is the data structure itself, while an object literal is a specific syntax used to create and initialize that object.

//objects have Key: Value pairs
//they are not ordered

const pen = {
    color : "red",
    type : "ball",
};

const student = {
    name : "yashik",
    age : 19,
    marks : 10.01,
    roll : 2510991089,
    semester : 2,
};

//here student stores a referance (adress) - we can still make modifications on the object's keys and values

const post = {
    username : "@TLS123",
    content : "Thank you for reading my Novel.",
    likes : 1,
    reposts : 1,
    tags : ["@Kim-Dokja"]
};

//how to access data

console.log(post.username);
console.log(post["content"]);

//benifit of hard braces operator
let property = "likes";
console.log(post[property]);
console.log(post.property); //* will give undefined

//js converts keys into strings
//even reserved words are made into strings
const obj1 = {
    1 : "one",
    null : "this is val of null key",
    true : "this is val of true key",
    undefined : "this is val of undefined key"
};

console.log(obj1);
console.log(obj1[1]); // this will be read as string 1 
console.log(obj1.null);
//!does not work console.log(obj1.1);

//update/add
obj1.undefined = "this is the updated val of undefined key";
console.log(obj1);

console.log(obj1.new); //undefined
obj1.new = "new key";
console.log(obj1);

//object of objects

const classInfo = {
    yashik : {
        rollno : 1,
        marks : 9.00,
        gender : "Male"
    },
    saransh : {
        rollno : 2,
        marks : 9.46,
        gender : "Male"
    },
    anusha : {
        rollno : 3,
        marks : 9.63,
        gender : "female"
    }
};

console.log(classInfo.yashik.marks);

//array of objects

const heroes = [
    {
        hero: "hulk",
        name: "Bruce Banner"
    },
    {
        hero: "iron man",
        name: "tony stark"
    },
    {
        hero: "sentry",
        name: "Bob"
    }
];

console.log(heroes);
console.log(heroes[0]);
console.log(heroes[1].name);