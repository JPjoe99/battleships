import {Ship} from "./Ship"

class Battleship extends Ship {
    constructor(colour: string) {
        super("B", 5, colour);
    }
}

export {Battleship};