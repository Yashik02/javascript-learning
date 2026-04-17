let btn = document.querySelector("button");
btn.addEventListener("click", randomColorGenerator);

function randomColorGenerator() {
    let red = random(0,255);
    let green = random(0,255);
    let blue = random(0,255);

    let colorString = `rgb(${red}, ${green}, ${blue})`;
    let invertedColorString = `rgb(${255-red}, ${255-green}, ${255-blue})`;

    document.querySelector("div").style.backgroundColor = colorString;
    document.querySelector("div").style.color = invertedColorString;
    document.querySelector("h1").innerText = colorString;
}

function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}