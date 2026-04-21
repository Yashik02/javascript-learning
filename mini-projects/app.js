let grandparents = document.querySelectorAll(".grandParent");
let parents = document.querySelectorAll(".parent");
let childs = document.querySelectorAll(".child");

//event chaining
grandparents[0].addEventListener("click", function () {
    console.log("grandParent was clicked");
});
parents[0].addEventListener("click", function () {
    console.log("parent was clicked");
});
childs[0].addEventListener("click", function () {
    console.log("child was clicked");
});

//event bubbeling
grandparents[1].addEventListener("click", function () {
    console.log("grandParent was clicked");
}, { capture: true });
parents[1].addEventListener("click", function () {
    console.log("parent was clicked");
}, { capture: true });
childs[1].addEventListener("click", function () {
    console.log("child was clicked");
}, { capture: true });

//event stop propogation
grandparents[2].addEventListener("click", function () {
    event.stopPropagation();
    console.log("grandParent was clicked");
});
parents[2].addEventListener("click", function () {
    event.stopPropagation();
    console.log("parent was clicked");
});
childs[2].addEventListener("click", function () {
    event.stopPropagation();
    console.log("child was clicked");
});