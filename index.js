// VARIABLES
let currentPlayer = "X";
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let cells = document.querySelectorAll(".cell");
let restartBtn = document.querySelectorAll("#restart-btn");

// what happens when a cell is clicked
function cellClicked(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive === true) {
        gameBoard[cellIndex] = currentPlayer;
         
        "Cell clicked:", cellIndex;
        "Updated game board:", gameBoard;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
// when restart button is clickfed

restartBtn.addEventListener("click", function() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = "X";
    cells.textContent = '';
    gameActive = true;
})

/*function for current player. I dont know where we'll fix this function but whatever*/
/* function changePlayer() {
    currentPlayer = currentPlayer === "X"? "O" : "X"; */
    //display a message below
    /* STATUSDISPLAY.TEXTCONTENT = MESSAGE FOR CURRENT PLAYER TURN
} */

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

