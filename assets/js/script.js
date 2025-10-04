import { TicTacToe } from "./TicTacToe.js";

// SELECTORES
const boardGame = document.getElementById("board-game");
const play = document.getElementById("play");
const playerTurn = document.getElementById("player-turn");

// COLORES WIN
const coloresWinner = 'light-dark(var(--win-text-light), var(--win-text-dark))';
const coloresEmpate = 'light-dark(var(--empate-text-light), var(--empate-text-dark))';

// INSTANCIANDO OBJETO
const board = new TicTacToe();

// CONFIGURACION INICIAL
window.onload = function (){
    optionCreator(3, 10)
    const boardSize = parseInt(document.getElementById("board-size").value);
    board.createBoard(boardGame, boardSize);
    updatePlayerTurn();
};

// AGREGA EVENTO AL TABLERO PARA DETERMINAR GANADOR, EMPATE, RESET, TURNO
boardGame.addEventListener('click', () => {
    if (board.checkWinner(coloresWinner)){
        playerTurn.style.color = coloresWinner;
        playerTurn.textContent = `Gana el jugador ${board.playerTurn()}`;
        alert(`Gana el jugador ${board.playerTurn()}`);
    } else if (board.fullBoard(coloresEmpate) && !board.checkWinner()) {
        playerTurn.textContent = `Empate!`;
    } else {
        play.textContent = 'Reset';
        updatePlayerTurn();
    }
});

// AGREGAR EVENTO AL BOTÓN ELIMINA Y CREA TABLERO, TAMBIÉN ACTUALIZA POR DEFECTO
play.addEventListener("click", () => {
    board.deleteBoard(boardGame);
    board.boardSymbolUpdate("symbol-p1", "symbol-p2");
    board.createBoard(boardGame, board.boardSizeUpdate("board-size"));
    playerTurn.style.color = '';
    play.textContent = 'Play!';
    updatePlayerTurn();
});

// FUNCION PARA ACTUALIZAR EL TURNO
function updatePlayerTurn() {
    playerTurn.textContent = `Turno de: ${board.playerTurn()}`;
}

// FUNCION PARA CREAR LOS TAMAÑOS
function optionCreator(min, max) {
    let selector = document.getElementById("board-size");

    for (let i = min; i <= max; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i.toString();
        selector.appendChild(option);
    }
    selector.selectedIndex = 0;
}