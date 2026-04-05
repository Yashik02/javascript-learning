let todo = [];

let request = prompt("Please enter your request :");

while (true) {
    if(request === "quit") {
        console.log("quitting the app");
        break;
    } else if (request === "list") {
        console.log("===LIST===");
        console.log("|----------------------|");
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i} => ${todo[i]}`);
        }
        console.log("|----------------------|");
    } else if (request === "add") {
        let task = prompt("Enter the item : ");
        todo.push(task);
        console.log("task added");
    } else if (request === "delete"){
        let idx = prompt("Enter the task no : ")
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        alert("invalid command");
    }
    request = prompt("Please enter your request :");
}