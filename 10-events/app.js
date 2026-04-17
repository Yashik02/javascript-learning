// onClick
let btn1 = document.querySelectorAll("button")[0];
btn1.onclick = makePink;
function makePink () {
    document.querySelector("body").style.backgroundColor = "#f4177a";
}

let btn2 = document.querySelectorAll("button")[1];
btn2.onclick = makeBlue;
function makeBlue () {
    document.querySelector("body").style.backgroundColor = "#13c7eb";
}


// onMouseEnter 
let btn3 = document.querySelectorAll("button")[2];
btn3.onmouseenter = function () {
    console.log("mouse entered");
}


// event listeners
// unlike on click property - we can add multiple event listeners
let btn4 = document.querySelectorAll("button")[3];
btn4.addEventListener("click", sayHello);
btn4.addEventListener("click", alertHello);

function alertHello () {
    alert("hello! - alert");
}
function sayHello () {
    console.log("hello! - console");
}

let btn5 = document.querySelectorAll("button")[4];
btn5.addEventListener("dblclick", dblclicked);

function dblclicked() {
    console.log("you double clicked");
}


// this keyword in event listeners
let boxh1 = document.querySelector(".box h1");
let boxp = document.querySelector(".box p");

boxh1.addEventListener("click", redbg);
boxp.addEventListener("click", redbg);

function redbg() {
    this.style.backgroundColor = "red";
}


// event default argument
let btn6 = document.querySelectorAll("button")[5];

// pointer event
btn6.addEventListener("click", function (event) {
    console.log(event);
});

// mouse event
btn6.addEventListener("dblclick", function (event) {
    console.log(event);
});

// keyboard event
// code and key are imp properties.
// key tells us what exact text is entered. ex - ";", "{" etc.
// code gives us the code of any key. like space, semicolon etc.
let inp = document.querySelector("input");
let x = 0, y = 0;
inp.addEventListener("keydown", function () {
    if(event.code == "ArrowUp" || event.key.toLowerCase() == "w") {
        y++;
    } else if(event.code == "ArrowDown" || event.key.toLowerCase() == "s") {
        y--;
    } else if(event.code == "ArrowLeft" || event.key.toLowerCase() == "a") {
        x--;
    } else if(event.code == "ArrowRight" || event.key.toLowerCase() == "d") {
        x++;
    } else {
        console.log("invalid key, please press arrow keys only");
        return;
    }
    
    console.log(`Current Coordinates - (${x}, ${y})`);
});

// form events
let form = document.querySelector("form");
form.addEventListener("submit", function () {
    event.preventDefault(); // helps prevent all the default behaviours
    console.log("form submitted");
    console.log(event);
});

form.addEventListener("reset", function () {
    console.log("form resetted");
    console.log(event);
});


//extracting form data
let form1 = document.querySelectorAll("form")[1];

form1.addEventListener("submit", function () {
    event.preventDefault();

    let user = form1.querySelector("#user");
    let pass = form1.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);
    console.dir(form1);
});

//change event
let text = document.querySelectorAll("form")[2].querySelector("input");
text.addEventListener("change", function () {
    console.log("this is a change event", text.value); // when we eneter, press submit or simply click out and the value is updated this event will trigger
});
text.addEventListener("input", function () {
    console.log("this is an input event", text.value); // triggers when value is changed by any character.
});

//text editor
let input = document.querySelector("#inputText");
let textPara = document.querySelector("#writtenText")
input.addEventListener("input", function () {
    textPara.innerText = input.value;
})

