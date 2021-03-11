import { Board } from "./board-classes/Board";
import { Ship } from "./ship-classes/Ship";
import { Square } from "./board-classes/Square";
import { ShipPiece } from "./ship-classes/ShipPiece";
import { Output } from "./utilities/Output";
import { Logic } from "./utilities/Logic";
import { Draw } from "./utilities/Draw";

class Game {
    private board: Board;
    private ships: Array<Ship>;
    private draw: Draw;
    private output: Output;
    private logic: Logic;
    constructor(board: Board, ships: Array<Ship>) {
        this.ships = ships;
        this.board = board;
        this.output = new Output();
        this.draw = new Draw();
        this.logic = new Logic();
        for (let i = 0; i < this.ships.length; i++) {
            this.ships[i].setId(i);
            for (let j = 0; j < this.ships[i].getShipPiecePositions().length; j++) {
                this.ships[i].getShipPiecePositions()[j].setId(i);
            }
        }
    };

    startGame(): void {
        this.output.outputWelcome();
        this.logic.randomiseShipParameters(this.ships, this.board.getX(), this.board.getY());
        while (!this.logic.verifyValidPlacements(this.ships)) {
            this.logic.randomiseShipParameters(this.ships, this.board.getX(), this.board.getY());
        }
        this.board.placeShipsOnBoard(this.ships);
        let board = this.draw.drawBoard(this.board);
        this.output.outputToDocument(board);
        this.runGame();
    }
    runGame(): void {
        let board = document.querySelector("#board");
        let squares = board.children;
        for (let i = 0; i < squares.length; i++) {
            squares[i].id = `${i}`;
            squares[i].addEventListener("click", this.performHit);
        }
    }
    endGame(): void {
       this.output.outputWin();
    }
    verifyEndGame(): boolean {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].getSinkStatus()) {
                return false;
            }
        }
        return true;
    }
    private performHit = (e: Event): void => {
        let squareId: any = (<HTMLElement>e.target).id;
        let selectedSquare: Square = this.board.getBoardSquare(squareId);
        let hitShipPiece: ShipPiece = selectedSquare.getSquareContent();

        if (this.logic.verifyHit(selectedSquare)) {
            hitShipPiece.setHitStatus(true);
            let hitShip: Ship = this.logic.findShip(hitShipPiece.getId(), this.ships);
            if (this.logic.verifySunk(hitShip)) {
                hitShip.sinkShip();
                this.output.outputSink();
                this.draw.highlightSunkShip(this.board, hitShip)
                if (this.verifyEndGame()) {
                    this.endGame();
                }
            }
            else {
                this.output.outputHit();
            }
            this.draw.highlightSquare(selectedSquare);
            return;
        }
        this.output.outputMiss();
        return;
    }

}

export {Game};