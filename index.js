
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

document.addEventListener('DOMContentLoaded', () => {
    const restartBtn = document.getElementById("restart-btn");
    const body = document.body;
    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
        'img6.jpg',
        'img7.jpg',
        'img8.jpg',
        'img9.jpg',
        'img10.jpg'
    ];

    let currentIndex = 0; // Index of the current background image

    // Function to change background image
    function changeBackground() {
        body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    }

    // Initial background image
    changeBackground();

    // Restart button click handler
    restartBtn.addEventListener('click', () => {
        changeBackground(); // Change background image on button click
    });
});


// Example usage
handleCellClick(0); // X
handleCellClick(4); // O
handleCellClick(1); // X
handleCellClick(7); // O
handleCellClick(2); // X (wins)