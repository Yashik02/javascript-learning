function addTask () {
    let task = document.createElement("li");
    let input = document.querySelector("input");
    let delbtn = document.createElement("button");
    task.innerText = input.value + " ";
    input.value = "";
    delbtn.innerText = "delete";
    delbtn.classList.add("delete-button")
    task.appendChild(delbtn);
    document.querySelector("ul").appendChild(task);
}

let btn = document.querySelector("button");
btn.addEventListener("click", addTask);

let input = document.querySelector("input");
input.addEventListener("keypress",function (event) {
    if(event.key === "Enter") {
        addTask();
    }
});

let list = document.querySelector("ul");
list.addEventListener("click", function () {
    if(event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
});
