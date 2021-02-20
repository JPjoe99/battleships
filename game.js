import {createBoard, setBoard} from "./board.js";
//import {ships, checkIfAllShipsSunk} from "./ships.js";

export function startGame() {
    createBoard();
    setBoard();
}

// export function endGame() {
//     alert("WIN");
// }

// export function checkGameFinished() {
//    if (!checkIfAllShipsSunk(ships)) {
//        return false;
//    }
//    return true;
// }


