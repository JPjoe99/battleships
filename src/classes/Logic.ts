import { Square } from "./board-classes/Square";
import { Ship } from "./ship-classes/Ship";
import { ShipPiece } from "./ship-classes/ShipPiece"

class Logic {
    private availableOrientations: Array<string>;
    constructor() {
        this.availableOrientations = ["H","V"];
    }
    randomiseShipParameters(ships: Array<Ship>, xDimension: number, yDimension: number): void {
        for (let i = 0; i < ships.length; i++) {
            this.randomiseShipOrientations(ships);
            this.randomiseShipPositions(ships, xDimension, yDimension);
        }
    }
    randomiseShipOrientations(ships: Array<Ship>): void {
        for (let i = 0; i < ships.length; i++) {
            this.randomiseOrientation(ships[i]);
        }
    }
    randomiseShipPositions(ships: Array<Ship>, xDimension: number, yDimension: number): void {
        for (let i = 0; i < ships.length; i++) {
            this.randomisePosition(ships[i], xDimension, yDimension);
        }
    }
    findShip(id: number, ships: Array<Ship>): Ship {
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].getId() == id) {
                return ships[i];
            }
        }
    }
    verifyHit(square: Square): boolean {
        if (square.getSquareContent() != null) {
            return true;
        }
        return false;
    }
    verifySunk(ship: Ship): boolean {
        for (let i = 0; i < ship.getShipPiecePositions().length; i++) {
            if (!ship.getShipPiecePositions()[i].getHitStatus()) {
                return false;
            }
        }
        return true;
    }    
    verifyValidPlacements(ships: Array<Ship>): boolean {
        let count = 1;
        for (let i = 0; i < ships.length; i++) {
            for (let j = count; j < ships.length; j++) {
                for (let k = 0; k < ships[i].getShipPiecePositions().length; k++) {
                    for (let l = 0; l < ships[j].getShipPiecePositions().length; l++) {
                        if (ships[i].getShipPiecePositions()[k].getX() == ships[j].getShipPiecePositions()[l].getX()
                        && ships[i].getShipPiecePositions()[k].getY() == ships[j].getShipPiecePositions()[l].getY()) {
                            return false;
                        }
                    }
                }
            }
            count++;
        }
        return true;
    }
    randomiseOrientation(shipIn: Ship) {
        let randomOrientation: string = this.availableOrientations[Math.floor(Math.random() * this.availableOrientations.length)];
        shipIn.setShipOrientation(randomOrientation);

    }
    randomisePosition(shipIn: Ship, xDimension: number, yDimension: number) {
        if (shipIn.getShipOrientation() === "V") { 
            let shipPositions: Array<ShipPiece> = shipIn.getShipPiecePositions();
            shipPositions[0].setX(Math.floor(Math.random() * xDimension));
            for (let i = 1; i < shipPositions.length; i++) {
                shipPositions[i].setX(shipPositions[0].getX());
            }
            shipPositions[0].setY(Math.floor(Math.random() * yDimension));
          
            if (shipPositions[0].getY() <= 5) {
                for (let i = 1; i < shipPositions.length; i++) {
                    shipPositions[i].setY(shipPositions[i-1].getY() + 1);
                }    
            }
            else if (shipPositions[0].getY() >= 5) {
                for (let i = 1; i < shipPositions.length; i++) {
                    shipPositions[i].setY(shipPositions[i-1].getY() - 1);
                }
          
            }
        }
        else if (shipIn.getShipOrientation() === "H") {
            let shipPositions: Array<ShipPiece> = shipIn.getShipPiecePositions();
            shipPositions[0].setY(Math.floor(Math.random() * yDimension));
            for (let i = 1; i< shipPositions.length; i++) {
                shipPositions[i].setY(shipPositions[0].getY());
            }
            shipPositions[0].setX(Math.floor(Math.random() * xDimension));
          
            if (shipPositions[0].getX() <= 5) {
                for (let i = 1; i < shipPositions.length; i++) {
                    shipPositions[i].setX(shipPositions[i-1].getX() + 1);
                }    
            }
            else if (shipPositions[0].getX() >= 5) {
                for (let i = 1; i < shipPositions.length; i++) {
                    shipPositions[i].setX(shipPositions[i-1].getX() - 1);
                }
               
            }
        }
    }
}

export {Logic};

