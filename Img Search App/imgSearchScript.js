const formEl = document.querySelector("form");
const inputText = document.querySelector(".inputQuery");
// const searchBtn = document.querySelector(".searchQueryBtn");
const searchResults = document.querySelector(".imgSection");
const showMoreButton = document.querySelector(".showMoreBtn");

const accessKey = "ij0ZJczUktXFUYiKHXWnq0Br6hdE5XmINJXY6TfxtSw";

// initial values:
let inputData = "";
let pageNo = 1;

function searchImgs() {
    inputData = inputText.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputData}&client_id=${accessKey}`;

    fetch(url)
    .then((response) => response.json())
    .then(( json => {
        const results = json.results;
        //* all resulted data is stored in this variable.
    }))
    .catch(error => {
        alert("Oops! Something went wrong.");
    });

    if (pageNo === 1) {
        searchResults.innerHTML = "";
    }

    // No F-king idea tf i'm doing here:
    results.map((result) => {
        // creating dulpicate template for imgSectoin, img & anchor-Tag
        const imgContainer = document.createElement("div");
        imgContainer.classList.add(".searchResult");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.textContent = result.alt_description;


        //append:
        imgContainer.appendChild(image);
        imgContainer.appendChild(imgLink);
        searchResults.appendChild(imgContainer);

    });
    pageNo ++;

    if (pageNo > 1) {
         showMoreButton.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    // preventing all default events:
    event.preventDefault();

    pageNo = 1;

    // calling function:
    searchImgs();
})

showMoreButton.addEventListener("click", (event) => {
    // calling function:
    searchImgs();
})