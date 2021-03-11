import {Ship} from "./Ship"

class Destroyer extends Ship {
    constructor(colour: string) {
        super("D", 4, colour);
    }
}

export {Destroyer};