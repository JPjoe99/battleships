const gridSize = 10;

export function setRandomPosition(boardPiece) {
    if (boardPiece.plane === "V") { 
        boardPiece.positions[0].x = Math.floor((Math.random() * gridSize) + 1);
        for (let i = 1; i< boardPiece.positions.length; i++) {
            boardPiece.positions[i].x = boardPiece.positions[0].x;
        }
        boardPiece.positions[0].y = Math.floor((Math.random() * gridSize) + 1);
      
        if (boardPiece.positions[0].y <= 5) {
            for (let i = 1; i < boardPiece.positions.length; i++) {
                boardPiece.positions[i].y = boardPiece.positions[i-1].y + 1;
            }    
        }
        else if (boardPiece.positions[0].y >= 5) {
            for (let i = 1; i < boardPiece.positions.length; i++) {
                boardPiece.positions[i].y = boardPiece.positions[i-1].y - 1;
            }
      
        }
    }
    else if (boardPiece.plane === "H") {
        boardPiece.positions[0].y = Math.floor((Math.random() * gridSize) + 1);
        for (let i = 1; i< boardPiece.positions.length; i++) {
            boardPiece.positions[i].y = boardPiece.positions[0].y;
        }
        boardPiece.positions[0].x = Math.floor((Math.random() * gridSize) + 1);
      
        if (boardPiece.positions[0].x <= 5) {
            for (let i = 1; i < boardPiece.positions.length; i++) {
                boardPiece.positions[i].x = boardPiece.positions[i-1].x + 1;
            }    
        }
        else if (boardPiece.positions[0].x >= 5) {
            for (let i = 1; i < boardPiece.positions.length; i++) {
                boardPiece.positions[i].x = boardPiece.positions[i-1].x - 1;
            }
           
        }
    }
}