// VARIABLES
let currentPlayer = "X";
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let cells = Array.from(document.querySelectorAll(".cell"))
let restartBtn = document.querySelector("#restart-btn");
let playerTurnEl = document.getElementById("PT-el")
playerTurnEl.classList.add(`player-${currentPlayer}`)


// what happens when a cell is clicked; if a cell is empty and the game is not over put an X
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
    console.log(currentPlayer)
    console.log(playerTurnEl.classList)
    playerTurnEl.classList.add(`player-${currentPlayer}`)
}
// when restart button is clickfed

function render() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = "X";
    
}

restartBtn.addEventListener("click", function() {
   clear()
})

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
