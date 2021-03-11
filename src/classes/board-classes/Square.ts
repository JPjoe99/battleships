import { ShipPiece } from "../ship-classes/ShipPiece";

class Square {
    private id: number;
    private x: number;
    private y: number;
    private content: ShipPiece;
    constructor(x: number, y: number, id: number) {
        this.x = x;
        this.y = y;
        this.content = null;
        this.id = id;
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    getId(): number {
        return this.id;
    }
    getCoordinates(): Array<number> {
        let coordinates = [this.x,this.y];
        return coordinates;
    }
    placeShipPieceOnSquare(piece: ShipPiece): void {
        this.content = piece;
    }
    getSquareContent(): ShipPiece {
        return this.content;
    }

}

export {Square};