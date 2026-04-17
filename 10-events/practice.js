// 1
let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("#scroll");

btn.addEventListener("mouseout", function () {
    console.log("you are out of the button");
});

input.addEventListener("keypress", function () {
    console.log("you pressed a key");
});

// overflow scroll is required
div.addEventListener("scroll", function () {
    console.log("you are scrolling on the div", div.scrollTop);
});

// works on window object
window.addEventListener("load", function () {
    console.log("All resources (images, etc.) have finished loading.");
});

// 2
let newbtn = document.createElement("button");
newbtn.innerText = "green-bg";
newbtn.addEventListener("click", function () {
    this.style.backgroundColor = "green";
});
document.querySelector("body").appendChild(newbtn);

document.querySelector("body").appendChild(document.createElement("hr"));

// 3
let newheading = document.createElement("h1");
newheading.innerText = "only a-z, A-z and spaces are allowed"
let newinp = document.createElement("input");
newinp.placeholder = "enter your name";

document.querySelector("body").appendChild(newheading);
document.querySelector("body").appendChild(newinp);

newinp.addEventListener("input", function () {
    newheading.innerText = newinp.value.replace(/[^a-zA-Z\s]/g, ""); //RegEX is used
})
