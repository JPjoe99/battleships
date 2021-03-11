import { Battleship } from "./classes/ship-classes/Battleship";
import {Board} from "./classes/board-classes/Board";
import { Destroyer } from "./classes/ship-classes/Destroyer";
import { Game } from "./classes/game";
import { Ship } from "./classes/ship-classes/Ship";

let ships: Array<Ship> = [];

let battleshipsBoard: Board = new Board(10,10);

let Destroyer1: Destroyer = new Destroyer("red");
let Destroyer2: Destroyer = new Destroyer("blue");
let Battleship1: Battleship = new Battleship("green");

ships.push(Destroyer1);
ships.push(Destroyer2);
ships.push(Battleship1);

let battleShipsGame = new Game(battleshipsBoard, ships);
battleShipsGame.startGame();
