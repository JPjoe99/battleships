import { ShipPiece } from "./ShipPiece";

abstract class Ship {
    private id: number;
    private type: string;
    private length: number;
    private orientation: string;
    private sinkStatus: boolean;
    private shipPieces: Array<ShipPiece>;
    private colour: string;
    constructor(type: string, length: number, colour: string) {
        this.type = type;
        this.length = length;
        this.colour = colour;
        this.sinkStatus = false;
        this.shipPieces = [];
        for (let i = 0; i < length; i++) {
            this.shipPieces.push(new ShipPiece(this.colour));
        }  
    }
    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    getType(): string {
        return this.type;
    }
    getColour(): string {
        return this.colour;
    }
    setColour(colour: string): void {
        this.colour = colour;
        for (let i = 0; i < this.shipPieces.length; i++) {
            this.shipPieces[i].setColour(colour);
        }
    }
    getShipLength(): number {
        return this.length;
    }
    getSinkStatus(): boolean {
        return this.sinkStatus;
    }  
    setShipPiecePositions(positions: Array<ShipPiece>): void {
        this.shipPieces = positions;
    }
    getShipPiecePositions(): Array<ShipPiece> {
        return this.shipPieces;
    }
    sinkShip(): void {
        this.setColour("gray");
        this.setSinkStatus(true);
    }
    setShipOrientation(orientation: string): void {
        this.orientation = orientation;
    }
    getShipOrientation(): string {
        return this.orientation;
    }
    setSinkStatus(status: boolean): void {
        this.sinkStatus = status;
    }
    verifyShipSunk(): boolean {
        for (let i = 0; i < this.shipPieces.length; i++) {
            if (!this.shipPieces[i].getHitStatus()) {
                return false;
            }
        }
        return true;
    }

}

export {Ship}