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



//* Google Bard Code:

// let generateMemeBtn = document.querySelector(".generateBtn");
// let memeTitleText = document.querySelector(".memeTitle");
// let memeImg = document.querySelector(".mainDiv img");


// function updateDetails(title, url) {
//   memeTitleText.innerHTML = title;
//   memeImg.src = url;
// }

// function errorHandler(error) {
//     alert("Sorry, the API is out of service😔");
// }

// function generateMeme() {
//   fetch("https://vast-puce-mite-fez.cyclic.app/animeme")
//     .then((response) => {
//       response.json();
//     })
//     .then((data) => {
//       const memeUrl = data.url;

//       // Fetch the meme image
//       fetch(memeUrl)
//         .then(imageResponse => imageResponse.blob())
//         .then(blob => {
//           // Set the meme image src
//           memeImg.src = URL.createObjectURL(blob);
//         })
//         .catch(error => {
//           // Handle the error
//           alert("Sorry, the API is out of service😔");
//         });
//     })
//     .catch(errorHandler);
// }

// generateMemeBtn.addEventListener("click", generateMeme);





// // * bard noe2:
// function generateMeme() {
//   fetch("https://vast-puce-mite-fez.cyclic.app/animeme", {
//     responseType: "blob",
//   })
//     .then((response) => {
//       // Get the meme image data as a blob
//       const memeImageBlob = response.blob();

//       // Create a blob URL from the meme image blob
//       const memeImageBlobUrl = URL.createObjectURL(memeImageBlob);

//       // Set the meme image src
//       memeImg.src = memeImageBlobUrl;
//     })
//     .catch((error) => {
//       // Handle the error
//     });
// }
  
// generateMemeBtn.addEventListener("click", generateMeme);