let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random"

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (err) {
        console.log(err);
        return null;
    }
}

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("img");

    img.setAttribute("src", link);
})