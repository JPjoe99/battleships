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
    console.log(innerWidth);
    console.log(innerHeight);
    let x = Math.ceil((e.clientX - ((innerWidth - clientWidth) / 2)) / (clientWidth / 10));
    let y = Math.ceil((e.clientY - ((innerHeight - clientHeight) / 2)) / (clientHeight / 10));
    // let x = Math.ceil((5 / screen.width) * (2 * e.clientX + clientWidth) - 5);
    // let y = Math.ceil((5 / screen.height) * (2 * e.clientY + clientHeight) - 5);

    console.log("x: " + x);
    console.log("y: " + y);
    console.log(e);
    // console.log("x: " + Math.ceil((e.clientX - 326.5) / 33.9));
    // console.log("y: " + Math.ceil(e.clientY / 33.9));
    //console.log(e.clientHeight )
    if (e.target.textContent != "") {
        if (hitShipAndCheckIfSunk(e.target, x, y)) {
            alert("Target sunk!");
            if (checkIfAllShipsSunk(ships)) {
               alert("WIN");
            }
        }
        else {
            alert(`Target hit! x: ${x}, y: ${y}, screen.width: ${innerWidth}, screen.height: ${innerHeight}`);
            e.target.removeEventListener("click", onClick);
        }
        e.target.style.backgroundColor = "gray";
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