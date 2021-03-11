import { Ship } from "../ship-classes/Ship";
import { ShipPiece } from "../ship-classes/ShipPiece";
import { Square } from "./Square";

class Board {
    private ships: Array<Ship>;
    private y: number;
    private x: number;
    private boardSquares: Array<Square> = [];
    constructor(y: number, x: number) {
        this.y = y;
        this.x = x;
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                let id = (this.x * i) + j;
                this.boardSquares.push(new Square(j, i, id));
            }
        }
    }
    placeShipsOnBoard(ships: Array<Ship>): void {
        this.ships = ships;
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].getShipPiecePositions().length; j++) {
                let shipPositions = this.ships[i].getShipPiecePositions();
                let x = shipPositions[j].getX();
                let y = shipPositions[j].getY();
                let gridPosition = ((this.x) * (y)) + x;
                let square = this.getBoardSquare(gridPosition);
                square.placeShipPieceOnSquare(shipPositions[j]);
            }
        }
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    getBoardSquare(gridNumber: number): Square {
        return this.boardSquares[gridNumber]; 
    }
    getBoardSquares(): Array<Square> {
        return this.boardSquares;
    }
    getShipPieceOnBoard(square: Square): ShipPiece {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].getShipPiecePositions().length; j++) {
                if (this.ships[i].getShipPiecePositions()[j].getX() == square.getX() &&
                this.ships[i].getShipPiecePositions()[j].getY() == square.getY()) {
                    return this.ships[i].getShipPiecePositions()[j];
                }                
            }
        }
    }   
}

export {Board};