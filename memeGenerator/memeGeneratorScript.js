̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨̨let generateMemeBtn = document.querySelector(".generateBtn");
let memeTitleText = document.querySelector(".memeTitle");
let memeImg = document.querySelector(".mainDiv img");
let memeAuthorText = document.querySelector(".authorName");


// update
function updateDetails(title, url) {
    memeTitleText.innerHTML = title;
    memeImg.setAttribute("src", url);
}


// error handling
function errorHandler(error) {
    alert("Sorry, the API is out of service😔");
}


function generateMeme() {
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
