// VARIABLES
let currentPlayer = "X";
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let cells = Array.from(document.querySelectorAll(".cell"))
let restartBtn = document.querySelector("#restart-btn");
let playerTurnEl = document.getElementById("PT-el")
let rollingEl = document.getElementById("rolling-el")
let rollingContainerEl = document.getElementById("rollingContainer-el")
playerTurnEl.classList.add(`player-${currentPlayer}`)//set animation to x
playerTurnEl.innerHTML = `player x, your turn`

//FUNCTIONS
function cellClicked(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive === true) {
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (currentPlayer === "X") {
            message = `player x, your turn`
        } else {
            message = `player y, your turn`
        }
        playerTurnEl.innerHTML = message
    }
    playerTurnEl.classList.remove('player-X');
    playerTurnEl.classList.remove('player-O');
    rollingContainerEl.classList.remove('rolling-X');
    rollingContainerEl.classList.remove('rolling-O');
    console.log(currentPlayer)
    console.log(playerTurnEl.classList)
    playerTurnEl.classList.add(`player-${currentPlayer}`)
    rollingContainerEl.classList.add(`rolling-${currentPlayer}`)
}



const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [0, 1, 2],
    [2, 4, 6]
];

function clear() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    for (let i=0; i<cells.length; i++) {
        cells[i].textContent = '';
    }
}

//EVENTS
restartBtn.addEventListener("click", function() {
    clear()
 })
 