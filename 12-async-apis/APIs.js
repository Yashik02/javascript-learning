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

//getJokes(10);

//Axios
// it is a library used to make http request, it internally uses fetch.
// it solves an issue, fetch does not give us exact json data, axios fixes that by giving us direct readable data
// HTML link added!

async function getJokesAxios() {

    try {
        let res = await axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        });

        //console.log(res);
        //console.log(res.data.joke);
        return res.data.joke;

    } catch (error){
        //console.log("ERROR --- ", error);
        return error;
    }

}

let btn = document.querySelector("button");
let jokePara = document.querySelector("#joke");

btn.addEventListener("click", async () => {
    let joke = await getJokesAxios();
    jokePara.innerText = joke;
})
