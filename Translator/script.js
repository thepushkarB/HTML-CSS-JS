// var readlineSync = require("readline-sync");

let inputField = document.querySelector(".inputTextBox");
let btnTranslate = document.getElementsByClassName("translateBtn");
let outputField = document.querySelector(".outputTextBox");

// encoding
function getTranslationURL(text) {
    // return "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + text;
    return "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + encodeURIComponent(text);
    // return server_URL + ? + text= + input_Text
    // return `https://api.funtranslations.com/translate/minion.json?text=${text}`;
}

// error
function errorHandler(error) {
    alert("something's wrong!");
}

function clickHandler() {

    // taking input
    let inputTextValue = inputField.value;
    // fetch().then( (reponse) => response.json).then( (jsonFile) => )

    // calling server for processing
    fetch(getTranslationURL(inputTextValue))
    .then( (response) => response.json())
    .then( (json) => {
            let translatedText = json.contents.translated;
            outputField.innerText = translatedText;
    })
    .catch(errorHandler)
        // .then(json => console.log(json))
}

btnTranslate.addEventListener("click", clickHandler);