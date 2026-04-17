const body = document.querySelector("body");

// video practice
// 1
let newPara = document.createElement("p");
newPara.innerText = "Hey I'm red!";
newPara.classList.add("red");
body.appendChild(newPara);

// 2
let newHeading3 = document.createElement("h3");
newHeading3.innerText = "I'm blue h3!";
newHeading3.classList.add("blue");
body.appendChild(newHeading3);

// 3
let newDiv = document.createElement("div");
console.log(newDiv.style);
newDiv.classList.add("border");
newDiv.classList.add("pink-bg");

body.appendChild(newDiv);

let newHeading1 = document.createElement("h1");
newHeading1.innerText = "I'm in a div";

let newPara1 = document.createElement("p");
newPara1.innerText = "ME TOO";

newDiv.appendChild(newHeading1);
newDiv.appendChild(newPara1);

body.appendChild(document.createElement("hr"));
// PDF pracice questions

let newInput = document.createElement("input");
let newButton = document.createElement("button");

newButton.innerText = "Click me";

body.appendChild(newInput);
body.appendChild(newButton);

// 2
newInput.placeholder = "username";
newButton.id = "btn"

// 3
newButtonList = document.querySelector("#btn").classList;
newButtonList.add("blue-bg");
newButtonList.add("white");

// 4
let newHeading1_1 = document.createElement("h1");
newHeading1_1.innerHTML = "<u>DOM practice</u>";
newHeading1_1.classList.add("purple");
body.appendChild(newHeading1_1);


// 5
let newPara1_1 = document.createElement("p");
newPara1_1.innerHTML = "Apna College <b>Delta</b> Practice";
body.appendChild(newPara1_1);