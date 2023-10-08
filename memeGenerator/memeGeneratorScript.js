let generateMemeBtn = document.querySelector(".generateBtn");
let memeTitleText = document.querySelector(".memeTitle");
let memeImg = document.querySelector(".mainDiv img");
let memeAuthorText = document.querySelector(".authorName");


// update
// function updateDetails(title, url, author) {
//     memeTitleText.innerHTML = title;
//     memeImg.setAttribute("src", url);
//     memeAuthorText.innerHTML = `Meme by: ${author}`;
// }
//* neo:
function updateDetails(title, url) {
    memeTitleText.innerHTML = title;
    memeImg.setAttribute("src", url);
    // memeAuthorText.innerHTML = `Meme by: ${author}`;
}


// error handling
function errorHandler(error) {
    alert("Sorry, the API is out of service😔");
}


function generateMeme() {
    // fetch("https://meme-api.com/gimme/wholesomememes")
    // .then((response) => {
    //     response.json();
    // })
    // .then((data) => {
    //     updateDetails(data.title, data.url, data.author);
    // })
    // .catch(errorHandler)

    //* neo:
    fetch("https://vast-puce-mite-fez.cyclic.app/animeme")
    .then((response) => {
        response.json();
    })
    .then((data) => {
        updateDetails(data.title, data.url);
    })
    .catch(errorHandler)
}

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
