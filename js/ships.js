let possiblePlanes = ["H","V"];

import {setRandomPosition} from "./grid.js";


export let ships = [
    {
        "type": "B1",
        "length": 5,
        "plane": possiblePlanes[Math.floor(Math.random() * possiblePlanes.length)],
        "positions": [
            {x: 4, y: 4, hit: false},
            {x: 4, y: 5, hit: false},
            {x: 4, y: 6, hit: false},
            {x: 4, y: 7, hit: false},
            {x: 4, y: 8, hit: false}
        ],
        "sunk": false
    },
    {
        "type": "D1",
        "length": 4,
        "plane": possiblePlanes[Math.floor(Math.random() * possiblePlanes.length)],
        "positions": [
            {x: 1, y: 1, hit: false},
            {x: 2, y: 1, hit: false},
            {x: 3, y: 1, hit: false},
            {x: 4, y: 1, hit: false}
        ],
        "sunk": false
    },
    {
        "type": "D2",
        "length": 4,
        "plane": possiblePlanes[Math.floor(Math.random() * possiblePlanes.length)],
        "positions": [
            {x: 1, y: 1, hit: false},
            {x: 2, y: 1, hit: false},
            {x: 3, y: 1, hit: false},
            {x: 4, y: 1, hit: false}
        ],
        "sunk": false
    },
]

export function placeShips(ships) {
    for (let i = 0; i < ships.length; i++) {
        setRandomPosition(ships[i]);
    }
    let valid = checkShipPlacementsValid(ships);
    if (valid) {
        for (let i = 0; i < ships.length; i++) {
            for (let j = 0; j < ships[i].positions.length; j++) {
                let position = document.getElementById(`${10*(ships[i].positions[j].y - 1) + ships[i].positions[j].x}`)
                position.innerHTML = `<div class="square-inner">${ships[i].type}</div>`
            }
        }
    }
    else {
        placeShips(ships);
    }
}

export function checkShipPlacementsValid(ships) {
    let count = 1;
    for (let i = 0; i < ships.length; i++) {
        for (let j = count; j < ships.length; j++) {
            for (let k = 0; k < ships[i].positions.length; k++) {
                for (let l = 0; l < ships[j].positions.length; l++) {
                    if (JSON.stringify(ships[i].positions[k]) == JSON.stringify(ships[j].positions[l])) {
                        return false;
                    }
                }
            }
        }
        count++;
    }
    return true;
}

export function hitShipAndCheckIfSunk(shipPiece, x, y) {
    return hitShip(shipPiece, x, y);
}

export function hitShip(shipPiece, x, y) {
    let shipType = shipPiece.firstElementChild.textContent;
    let gridPosition = {
        x: x,
        y: y,
        hit: false
    }
    for (let i = 0; i < ships.length; i++) {
        if (ships[i].type == shipType) {
            for (let j = 0; j < ships[i].positions.length; j++) {
                if (JSON.stringify(ships[i].positions[j]) == JSON.stringify(gridPosition)) {
                    ships[i].positions[j].hit = true;
                    return checkIfShipSunk(ships[i]);
                }
            }
        }
    }
}

export function checkIfShipSunk(ship) {
    for (let i = 0; i < ship.positions.length; i++) {
        if (!ship.positions[i].hit) return false;
    }
    ship.sunk = true;
    return true;
}

export function checkIfAllShipsSunk(ships) {
    for (let i = 0; i < ships.length; i++) {
        if (!ships[i].sunk) return false;
    }
    return true;
}