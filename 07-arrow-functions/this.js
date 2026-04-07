//this Keyword
//this - referes to the object that is executing the current piece of code

const student = {
    name: "yashik",
    age : 19,
    math : 30,
    eng : 23,
    sci : 41,
    getAvg() {
        return (this.math + this.eng + this.sci) / 3;
    }
}; 

console.log(student.name);
console.log(student.getAvg());

// in browser a window object is created.
// in terminal a globar object is created.
// and runs all the code
// by default alert("this is an alert") becomes Window.alert("this is an alert")
function abc() {
    console.log(this);
}
abc();


//this on Arrow functions
// Arrow functions follow the scope of the parent scope where they were defined.
const student2 = {
    name: "yuta",
    grade: "special",
    property: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getGradeArrow: () => {     //! will not work properly because it is using the parent's scope
        console.log(this);
        return this.grade; // undefined
    },
    getGrade: () => {
        return student2.grade;  //parent scope is window/object
    },
    getInfo1: function () {
        setTimeout(() => {   //parent scope is student2
            console.log(this)
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function() {    //scope is (setTimeout in terminal) (window in browser because in browser it is executed as global execution context.)
            console.log(this)
        }, 2000);
    },
};


console.log("property print");
console.log(student2.property);

console.log("get name print");
console.log(student2.getName());

console.log("get grade arrow print");
console.log(student2.getGradeArrow());

console.log("get grade print");
console.log(student2.getGrade());

console.log(student2.getInfo1());
console.log(student2.getInfo2());