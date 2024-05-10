const player1 = 'X'
const player2 = 'O'
const restartBtn = document.getElementById("restart-btn")
let currentPlayer = player1
// Initial board state
let boardState = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

// when cell is clicked function
function handleCellClick(index) {
    if (boardState[index] === " ") {
        boardState[index] = currentPlayer;
        renderBoard();
        if (checkWin(currentPlayer)) {
            console.log(currentPlayer + ' wins!');
            resetBoard();
        } else if (isBoardFull()) {
            console.log('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Function to render the game board
function renderBoard() {
    const boardEl = document.getElementById("board-el");
    boardEl.innerHTML = " ";
    boardState.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardEl.appendChild(cellElement);
    });
}

// Function to check if a player has won
function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (boardState[i] === player && boardState[i + 3] === player && boardState[i + 6] === player) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (boardState[i] === player && boardState[i + 1] === player && boardState[i + 2] === player) {
            return true;
        }
    }
    // Check diagonals
    if ((boardState[0] === player && boardState[4] === player && boardState[8] === player) ||
        (boardState[2] === player && boardState[4] === player && boardState[6] === player)) {
        return true;
    }
    return false;
}

// Function to check if the board is full
function isBoardFull() {
    return !boardState.includes(" ");
}

// Function to reset the board
function resetBoard() {
    boardState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    currentPlayer = player1;
    renderBoard();
}

// Restart button
restartBtn.addEventListener("dblclick", resetBoard);

// Example usage
handleCellClick(0); // X
handleCellClick(4); // O
handleCellClick(1); // X
handleCellClick(7); // O
handleCellClick(2); // X (wins)