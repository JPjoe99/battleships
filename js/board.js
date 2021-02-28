import {ships, placeShips, hitShipAndCheckIfSunk, checkIfAllShipsSunk} from "./ships.js";

let clientHeight;
let clientWidth;

export function createBoard() {
    let board = document.querySelector("#board");
    clientHeight = board.clientHeight;
    clientWidth = board.clientWidth;
    for (let i = 0; i < 100; i++) {
        board.innerHTML += createBoardSquare(i+1);
    }
    for (let i = 1; i < 101; i++) {
        document.getElementById(`${i}`).addEventListener("click", onClick);
    }
}

function onClick(e) {
    let x = Math.ceil((e.clientX - ((innerWidth - clientWidth) / 2)) / (clientWidth / 10));
    let y = Math.ceil((e.clientY - ((innerHeight - clientHeight) / 2)) / (clientHeight / 10));
    if (e.target.textContent != "") {
        if (hitShipAndCheckIfSunk(e.target, x, y)) {
            alert("Target sunk!");
            e.target.style.backgroundColor = "lightBlue";
            if (checkIfAllShipsSunk(ships)) {
               if (confirm("You won! Press OK to restart,")) {
                   window.location.reload();
               }
            }
        }
        else {
            alert("Target hit!");
            e.target.style.backgroundColor = "lightBlue";
            e.target.removeEventListener("click", onClick);
        }
    }
    else {
        alert("Target missed!");
    }
}

function createBoardSquare(squareNumber) {
    let boardSquareHTML = `<div id="${squareNumber}"class="board-square"></div>`;
    return boardSquareHTML;
}

export function setBoard() {
    placeShips(ships);
}
