const searchButton = document.getElementById("search");
const search = document.getElementById("input");
const img = document.getElementById("img");
const error = document.getElementById("error");

const getImage = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) throw new Error("Denne brukeren finnes ikke.");

    const json = await res.json();
    return json.avatar_url;
}

searchButton.addEventListener("click", async () => {
    img.src = "";
    img.style.display = "none";
    error.innerText = "";
    error.style.display = "none";
    try {
        const avatar = await getImage(search.value);
        img.src = avatar;
        img.style.display = "block";
    } catch (e) {
        error.innerText = e.message;
        error.style.display = "block";
    } finally {
        search.value = "";
    }
});