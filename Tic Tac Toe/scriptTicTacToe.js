let boxes = document.querySelectorAll(".box");
let boxColumn = document.querySelectorAll(".boxesLine");
let turn = "X";
let x = document.querySelectorAll(".cross");
let o = document.querySelectorAll(".circle");


//* Function to change turns:
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

//* Function to check for a win:
function checkWin() {
    let wins = [
        // winning patterns:
        //? columns:
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //? rows:
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //? diagonals:
        [0, 4, 8],
        [6, 4, 2]
    ];

    wins.forEach(e => {
        if((x[e[0]].innerText === x[e[1]].innerText) && (x[e[2]].innerText === x[e[1]].innerText) && (x[e[0]].innerText != "")) {
            alert("Player X Wins! 🎊");
        }
        else if((o[e[0]].innerText === x[e[1]].innerText) && (o[e[2]].innerText === x[e[1]].innerText) && (o[e[0]].innerText != "")) {
            alert("Player O Wins! 🎊");
        }
    });
}


//* Game Logic:
boxes.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "") {
            element.innerText = turn;
            // console.log(x);
            // console.log(o);

            turn = changeTurn();

            checkWin();
        }
    });
});
