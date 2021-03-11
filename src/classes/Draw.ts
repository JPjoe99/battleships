import { Board } from "./board-classes/Board";
import { Square } from "./board-classes/Square";
import { Ship } from "./ship-classes/Ship";
import { ShipPiece } from "./ship-classes/ShipPiece";

class Draw {
    constructor() {}
    drawBoard(boardIn: Board): HTMLDivElement {
        let board = document.createElement("div");
        board.id = "board";
        board.className = "grid-container";
        board.style.gridTemplateColumns = `repeat(${boardIn.getX()}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${boardIn.getY()}, 1fr)`;
        for (let i = 0; i < boardIn.getBoardSquares().length; i++) {
            board.appendChild(this.drawSquare(boardIn.getBoardSquare(i)));
        }
        return board;
    }
    drawSquare(squareIn: Square): HTMLDivElement {
        let square = document.createElement("div");
        square.className = "board-square";
        square.id = `${squareIn.getId()}`;
        // if (squareIn.getSquareContent() != null) {
        //     square.textContent = "X";
        // }
        return square;
    }
    highlightSquare(squareIn: Square): void {
        console.log(squareIn);
        let square = document.getElementById(`${squareIn.getId()}`);
        let colour = squareIn.getSquareContent().getColour();
        square.style.backgroundColor = `${colour}`;
    
    }
    highlightSunkShip(boardIn: Board, shipIn: Ship): void {
        let shipPiecePositions: Array<ShipPiece> = shipIn.getShipPiecePositions();
        for (let i = 0; i < shipPiecePositions.length; i++) {
            let position = (boardIn.getX() * shipPiecePositions[i].getY()) + shipPiecePositions[i].getX();
            let selectedSquare = boardIn.getBoardSquare(position);
            this.highlightSquare(selectedSquare);
        }

    }
}

export {Draw};