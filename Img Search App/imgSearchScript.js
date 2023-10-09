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

        results.map((result) => {
            // creating dulpicate template for imgSection, img & anchor-Tag
            //? where .imgContainer === .searchResult
            const imgContainer = document.createElement("div");
            imgContainer.classList.add(".searchResult");
    
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;
    
            const imgLink = document.createElement("a");
            imgLink.href = result.links.html;
            imgLink.target = "_blank";
            imgLink.textContent = result.alt_description;


            // Apply CSS properties to the imgContainer element:
            //? where imgContainer === searchResult
            // .searchResult CSS:
            imgContainer.style.marginBottom = "60px";
            imgContainer.style.width = "30%";
            imgContainer.style.height = "100%";
            imgContainer.style.borderRadius = "6px";
            imgContainer.style.boxShadow = "0 0 6px rgba(0, 0, 0, 0.2)";
            // .searchResult > img CSS:
            image.style.width = "100%";
            image.style.height = "200px";
            image.style.cursor = "pointer";
            image.style.objectFit = "cover";
            // .searchResult > a CSS:
            imgLink.style.textTransform = "capitalize";
            imgLink.style.textDecoration = "none";
            imgLink.style.color = "black";
            imgLink.style.display = "block";
            imgLink.style.padding = "10px";
            
            //append:
            imgContainer.appendChild(image);
            imgContainer.appendChild(imgLink);
            searchResults.appendChild(imgContainer);
    
        });
    }))
    .catch(error => {
        alert("Oops! Something went wrong.");
    });

    if (pageNo === 1) {
        searchResults.innerHTML = "";
    }
    
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
