// HTML and CSS code is comverted into a DOM - Document Object Model when it is converted into javascript.
// DOM works like a tree and can be manipulated via Javascript.
// the tree is made up of node Objects containin more node objects or properties in it.
// every webpage is generated with a document object automatically which contains all the html and css code details in it.

console.dir(document); // it is used to print all the properties of an object.
//// document.all[8].innerHTML = "Peter Parker";

//getElementById - returns the element as an object or a null if not found

setInterval(() => {
    const heading = document.getElementById("heading1");
    heading.innerHTML = "Peter Parker";
    heading.style.color = "blue";
}, 2000);

setTimeout(() => {
    setInterval(() => {
        const heading = document.getElementById("heading1");
        heading.innerHTML = "Spider-Man";
        heading.style.color = "red";
    }, 2000);
}, 1000);

//getElementByClassName - returns the element as an HTML collection or a empty collection if not found
console.log("getElementByClassName");
console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByClassName("abssss"));

//getElementByTagName - returns the element as an HTML collection or a empty collection if not found
console.log("getElementByTagName");
console.log(document.getElementsByTagName("p"));

//querySelector - allows us to use CSS selector and returns the first element that fits the description
console.log("querySelector");
console.log(document.querySelector("div"));
console.log(document.querySelector("ahhshshs"));

//querySelectorAll - returns a NodeList 
console.log("querySelectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("ahhshshs"));

console.log("content manipulation");
const para = document.querySelector("p");
console.log(para);
console.dir(para);

console.log("innerText");
console.log(para.innerText); // shows only visible text

console.log("textContent");
console.log(para.textContent); // shows full html tags + text

console.log("innerHTML");
console.log(para.innerHTML); // shows text, only as written in the html file. 
//* meaning if we have given our paragraph next line in the code editor, it will reflect that. i am NOT talking about (/n - is the part of innerText, not text content) i am talking abut simply next line that we get when using extentions like prettier to neatly write code and a tab of spaces etc.

const originalPara = para.innerHTML;
para.innerText = originalPara + ". Hey! it's me, your friendly neighbourhood <b>Spider-Man</b>.";
para.textContent = originalPara + ". Hey! it's me, your friendly neighbourhood <b>Spider-Man</b>.";
para.innerHTML = originalPara + ". Hey! it's me, your friendly neighbourhood <b>Spider-Man</b>.";

const head2 = document.querySelector("h2");
head2.innerHTML = `<u>${head2.innerText}</u>`;

//attribute manipulation
let h2id = head2.getAttribute("id");
console.log(h2id);
head2.setAttribute('id', 'about modified');
console.log(h2id);
console.log(head2.getAttribute("id"));

//swapping images
let image1 =  document.querySelectorAll(".images img")[0];
let image2 = document.querySelectorAll(".images img")[2];

let temp = image1.getAttribute("src");
image1.setAttribute("src", image2.getAttribute("src"));
image2.setAttribute("src", temp);


//changing css style
console.log(head2.style); //this gets the styling that in in the inline html file. and NOT css file.

head2.style.color = "purple" // this sets the inline style and it is not used that much

let links = document.querySelectorAll(".box a");

for(let i = 0; i < links.length; i++) {
    links[i].style.color = "maroon";
}


// manipulating style using classList
console.log("Class List");

let mainImg = document.querySelector("img");
let mainImgClasses = mainImg.classList;
console.log(mainImgClasses);

mainImgClasses.add("abc");
console.log(mainImgClasses);

mainImgClasses.add("green");
console.log(mainImgClasses);

mainImgClasses.add("hover");
console.log(mainImgClasses);

mainImgClasses.remove("green");
console.log(mainImgClasses);

console.log(mainImgClasses.contains("abc"));

setInterval(() => {
    mainImgClasses.toggle("opaque"); //togle between on and off
}, 1000);



// Navigation 
let h4 = document.querySelector("h4");
console.log(h4);

//parentElement - returns a single value or null if it does not exists.
console.log(h4.parentElement);
console.log(document.querySelector("body").parentElement.parentElement);

//children - returns a collection or empty collection
console.log(h4.children);

//previousElementSibling or nextElementSibling
console.log(h4.nextElementSibling);
console.log(h4.previousElementSibling);



// adding elements
let newp = document.createElement('p'); // creating element only.
newp.innerText = "i am a new P."

// adding element - appendChild
document.querySelector("ul").appendChild(newp);
document.querySelector("body").appendChild(newp); //copies are not created

// append - adds at last
newp.append(" not to be confused with peter parker of course!")

// prepend - adds at first
newp.prepend("Hiii! ")

// insertAdjecentElement
let beforebegin = document.createElement("p");
beforebegin.innerText = "before begin";
para.insertAdjacentElement('beforebegin', beforebegin);

let afterbegin = document.createElement("p");
afterbegin.innerText = "after begin";
para.insertAdjacentElement('afterbegin', afterbegin);

let beforeend = document.createElement("p");
beforeend.innerText = "before end";
para.insertAdjacentElement('beforeend', beforeend);

let afterend = document.createElement("p");
afterend.innerText = "after end";
para.insertAdjacentElement('afterend', afterend);

//remove
let newbtn = document.createElement("button");
newbtn.innerText = "NEW BUTTON!!!";

document.querySelector("body").appendChild(newbtn);
document.querySelector("body").removeChild(newbtn);



