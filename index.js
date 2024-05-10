// Initialize game variables
let currentPlayer = 1;
let gameOver = false;
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

// Get the board and restart button elements
const boardEl = document.getElementById('board-el');
const restartBtn = document.getElementById('restart-btn');
const currentPlayerEl = document.getElementById('current-player-el');

// Function to render the game board
function renderBoard() {
    // Clear the board
    boardEl.innerHTML = '';

    // Loop through each cell in the board
    for (let i = 0; i < board.length; i++) {
        // Create a new cell element
        const cellEl = document.createElement('div');
        cellEl.classList.add('cell');
        cellEl.textContent = board[i];

        // Add a click event listener to the cell
        cellEl.addEventListener('click', () => handleCellClick(i));

        // Append the cell to the board
        boardEl.appendChild(cellEl);
    }

    // Display the current player
    currentPlayerEl.textContent = `Current player: ${currentPlayer}`;
}

// Function to handle cell clicks
function handleCellClick(index) {
    // If the game is over, return early
    if (gameOver) return;

    // If the cell is already occupied, return early
    if (board[index] !== ' ') return;

    // Update the board with the current player's mark
    board[index] = currentPlayer;

    // Render the updated board
    renderBoard();

    // Check if the current player has won
    if (checkWin(currentPlayer)) {
        console.log(`Player ${currentPlayer} wins!`);
        gameOver = true;
    }

    // Check if the board is full (draw)
    else if (isBoardFull()) {
        console.log('It\'s a draw!');
        gameOver = true;
    }

    // Switch to the other player
    else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
}

// Function to check if a player has won
function checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i] === player.toString() && board[i + 3] === player.toString() && board[i + 6] === player.toString()) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[i] === player.toString() && board[i + 3 * 1] === player.toString() && board[i + 3 * 2] === player.toString()) {
            return true;
        }
    }

    // Check diagonals
    if ((board[0] === player.toString() && board[4] === player.toString() && board[8] === player.toString()) ||
        (board[2] === player.toString() && board[4] === player.toString() && board[6] === player.toString())) {
        return true;
    }

    return false;
}

// Function to check if the board is full
function isBoardFull() {
    return !board.includes(' ');
}

// Function to reset the board
function resetBoard() {
    board.fill(' ');
    currentPlayer = 1;
    gameOver = false;
    renderBoard();
}

// Add a click event listener to the restart button
restartBtn.addEventListener('click', resetBoard);

// Render the initial board
renderBoard();