let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search"

async function getUniversities(name, country) {
    try {
        let searchQuery = url + (`?name=${name}&country=${country}`);
        let res = await axios.get(searchQuery);
        console.log(res.data);
        return res.data;
    } catch (err) {
        return err;
    }
}

btn.addEventListener("click", async () => {
    let name = document.querySelector("#name").value;
    let country = document.querySelector("#country").value;
    let list = document.querySelector("#universities");
    list.innerHTML = "";

    let countries = await getUniversities(name, country);

    for(let i = 0; i < countries.length; i++) {
        let c = document.createElement("li");
        c.innerText = countries[i].name;
        list.appendChild(c);
    }
})