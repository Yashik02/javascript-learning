//Fetch - returns a promise

let url = "https://icanhazdadjoke.com/";

fetch(url, {
    headers: {
        'Accept': 'application/json'
    }
}).then((response) => {
    console.log(response);
    //the api returns the data but it is not exactly usable here we need to use:-
    //this also returns a promise (chaining is used to make it cleaner)
    return response.json();
})
.then((data) => {
        console.log(data.joke);
})
.catch((error) => {
    console.log("ERROR --- ", error);
})


//using modern async and await to chain it.
//instead of .then and .catch promice chaining
async function getJokes(n) {
    for(let i = 0; i < n; i++) {
        try {
            let response = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });

            let data = await response.json();

            console.log(data.joke);
        } catch (error){
            console.log("ERROR --- ", error);
        }
    }
}

getJokes(10);
