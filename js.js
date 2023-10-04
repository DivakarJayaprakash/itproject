let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const boardCells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

function makeMove(cellIndex) {
    if (board[cellIndex] === "" && gameActive) {
        board[cellIndex] = currentPlayer;
        boardCells[cellIndex].textContent = currentPlayer;
        checkResult();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkResult() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            message.textContent = `${currentPlayer} wins!`;
        }
    }

    if (!board.includes("") && gameActive) {
        gameActive = false;
        message.textContent = "It's a draw!";
    }
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    message.textContent = "";
    boardCells.forEach(cell => cell.textContent = "");
}

resetBoard();
