export class TicTacToe{

    constructor(){
        this.playCounter = 0;
        this.boardSize;
        this.playerOne = "X";
        this.playerTwo = "O";
    }

    // Crea el tablero en un destino con un tamaño especificado | Agrega eventos y contenido al tablero
    createBoard(destino, boardSize) {
        this.boardSize = boardSize;
        const times = this.boardSize * this.boardSize;
        let coordX = 1;
        let coordY = 1;
        for(let i = 0; i < times; i++){
            let cell = document.createElement('div');
            cell.setAttribute("id", `cell-${coordX}-${coordY}`);
            cell.textContent = "-";
            cell.classList.add("cell", "playable");
            cell.addEventListener("click", () => {
                this.choicePlay(cell, this.playerTurn());
                if (this.checkWinner()) {
                    this.closingGame(destino);
                } else {
                    this.playCounter ++;
                }
            });
            coordX >= this.boardSize ? (coordX = 1, coordY++) : coordX++;
            destino.appendChild(cell);
        }
        destino.style.gridTemplateColumns = `repeat(${this.boardSize},1fr)`;
        destino.style.gridTemplateRows = `repeat(${this.boardSize},1fr)`;
    }

    // Determina el turno y simbolo correspondiente a cada jugada (actualizador)
    playerTurn(){
        let symbol = this.playCounter % 2 === 0 ? this.playerOne : this.playerTwo;
        return symbol;
    }

    // Elimina el tablero para dar espacio a uno nuevo
    deleteBoard(destino){
        while (destino.hasChildNodes()) {
            destino.removeChild(destino.firstChild);
        }
        this.playCounter = 0;
    }

    // Intercambia clases para dar identidad de grupo y caracteristicas para cada celda
    choicePlay(cell, symbol){
        if (cell.classList.contains("playable")){
            cell.classList.remove("playable");
            cell.style.fontSize = `${20/this.boardSize}em` // factor para modificar el txt en funcion del tamaño del boardSize
            cell.style.pointerEvents = "none"; // desactiva el css cell:active y :hover
            cell.classList.add("unplayable");
            cell.classList.add(symbol);
            cell.textContent = symbol;
        }
    }

    // Captura y actualiza los valores de inputs para identificar a cada jugador
    boardSymbolUpdate(playerOneId, playerTwoId) {
        this.playerOne = document.getElementById(playerOneId).value;
        this.playerTwo = document.getElementById(playerTwoId).value;
    }

    // Captura el valor del nuevo tamaño para el tablero
    boardSizeUpdate(boarSizeId) {
        this.boardSize = parseInt(document.getElementById(boarSizeId).value);
        return this.boardSize;
    }

    // Busca un ganador en el boardGame
    checkWinner(coloresWinner){
        const symbolArray = [this.playerOne, this.playerTwo];
        let cellColors = [];
        // Ciclo para buscar segun el simbolo
        for (const player of symbolArray) {
            // Ciclo que busca jugadas en todo el tablero H/V
            for (let i = 1; i <= this.boardSize; i++) {
                let horizontalCount = 0;
                cellColors = [];
                // Horizontal
                for (let j = 1; j <= this.boardSize; j++) {
                    if (document.getElementById(`cell-${j}-${i}`).classList.contains(player)) {
                        cellColors.push(`cell-${j}-${i}`);
                        horizontalCount ++;
                    }
                }
                if (horizontalCount == this.boardSize) {
                    for (const cellId of cellColors) {
                        let cell = document.getElementById(cellId);
                        cell.style.color = coloresWinner;
                    }
                    return true;
                };
                // Vertical
                let verticalCount = 0;
                cellColors = [];
                for (let j = 1; j <= this.boardSize; j++) {
                    if (document.getElementById(`cell-${i}-${j}`).classList.contains(player)) {
                        cellColors.push(`cell-${i}-${j}`);
                        verticalCount ++;
                    }
                }
                if (verticalCount == this.boardSize) {
                    for (const cellId of cellColors) {
                        let cell = document.getElementById(cellId);
                        cell.style.color = coloresWinner;
                    }
                    return true;
                };
            }
            //Diagonal principal
            let primaryDiagonalCount = 0;
            cellColors = [];
            for (let i = 1; i <= this.boardSize; i++) {
                if (document.getElementById(`cell-${i}-${i}`).classList.contains(player)){
                    cellColors.push(`cell-${i}-${i}`);
                    primaryDiagonalCount ++;
                }
                if (primaryDiagonalCount == this.boardSize) {
                    for (const cellId of cellColors) {
                        let cell = document.getElementById(cellId);
                        cell.style.color = coloresWinner;
                    }
                    return true;
                };
            }
            //Diagonal secundaria
            let secondaryDiagonalCount = 0;
            cellColors = [];
            for (let i = 1; i <= this.boardSize; i++) {
                if (document.getElementById(`cell-${i}-${this.boardSize - i + 1}`).classList.contains(player)){
                    cellColors.push(`cell-${i}-${this.boardSize - i + 1}`);
                    secondaryDiagonalCount ++;
                }
                if (secondaryDiagonalCount == this.boardSize) {
                    for (const cellId of cellColors) {
                        let cell = document.getElementById(cellId);
                        cell.style.color = coloresWinner;
                    }
                    return true;
                };
            }
        }
    }

    // Determina si el tablero esta lleno para validar empate
    fullBoard(coloresEmpate){
        if (this.playCounter == (this.boardSize**2)) {
            const cells = document.getElementsByClassName('cell');
            for (const cell of cells) {
                cell.style.color = coloresEmpate;
            }
            return true;
        }
        return false;
    }

    // Al detectar terminar el juego deshabilita las celdas
    closingGame(boardGame){
        const cells = boardGame.children;
        for (const cell of cells) {
            cell.style.pointerEvents = "none";
            cell.classList.add("unplayable");
        }
    }
}