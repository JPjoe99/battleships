(()=>{"use strict";var t,e=function(){function t(t){this.x=0,this.y=0,this.hitStatus=!1,this.colour=t,this.id=0}return t.prototype.getId=function(){return this.id},t.prototype.setId=function(t){this.id=t},t.prototype.getX=function(){return this.x},t.prototype.getColour=function(){return this.colour},t.prototype.setColour=function(t){this.colour=t},t.prototype.setX=function(t){this.x=t},t.prototype.getY=function(){return this.y},t.prototype.setY=function(t){this.y=t},t.prototype.getHitStatus=function(){return this.hitStatus},t.prototype.setHitStatus=function(t){this.hitStatus=t},t}(),i=function(){function t(t,i,o){this.type=t,this.length=i,this.colour=o,this.sinkStatus=!1,this.shipPieces=[];for(var n=0;n<i;n++)this.shipPieces.push(new e(this.colour))}return t.prototype.getId=function(){return this.id},t.prototype.setId=function(t){this.id=t},t.prototype.getType=function(){return this.type},t.prototype.getColour=function(){return this.colour},t.prototype.setColour=function(t){this.colour=t;for(var e=0;e<this.shipPieces.length;e++)this.shipPieces[e].setColour(t)},t.prototype.getShipLength=function(){return this.length},t.prototype.getSinkStatus=function(){return this.sinkStatus},t.prototype.setShipPiecePositions=function(t){this.shipPieces=t},t.prototype.getShipPiecePositions=function(){return this.shipPieces},t.prototype.sinkShip=function(){this.setColour("gray"),this.setSinkStatus(!0)},t.prototype.setShipOrientation=function(t){this.orientation=t},t.prototype.getShipOrientation=function(){return this.orientation},t.prototype.setSinkStatus=function(t){this.sinkStatus=t},t.prototype.verifyShipSunk=function(){for(var t=0;t<this.shipPieces.length;t++)if(!this.shipPieces[t].getHitStatus())return!1;return!0},t}(),o=(t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)},function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}),n=function(t){function e(e){return t.call(this,"B",5,e)||this}return o(e,t),e}(i),r=function(){function t(t,e,i){this.x=t,this.y=e,this.content=null,this.id=i}return t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t.prototype.getId=function(){return this.id},t.prototype.getCoordinates=function(){return[this.x,this.y]},t.prototype.placeShipPieceOnSquare=function(t){this.content=t},t.prototype.getSquareContent=function(){return this.content},t}(),s=function(){function t(t,e){this.boardSquares=[],this.y=t,this.x=e;for(var i=0;i<e;i++)for(var o=0;o<t;o++){var n=this.x*i+o;this.boardSquares.push(new r(o,i,n))}}return t.prototype.placeShipsOnBoard=function(t){this.ships=t;for(var e=0;e<this.ships.length;e++)for(var i=0;i<this.ships[e].getShipPiecePositions().length;i++){var o=this.ships[e].getShipPiecePositions(),n=o[i].getX(),r=o[i].getY(),s=this.x*r+n;this.getBoardSquare(s).placeShipPieceOnSquare(o[i])}},t.prototype.getX=function(){return this.x},t.prototype.getY=function(){return this.y},t.prototype.getBoardSquare=function(t){return this.boardSquares[t]},t.prototype.getBoardSquares=function(){return this.boardSquares},t.prototype.getShipPieceOnBoard=function(t){for(var e=0;e<this.ships.length;e++)for(var i=0;i<this.ships[e].getShipPiecePositions().length;i++)if(this.ships[e].getShipPiecePositions()[i].getX()==t.getX()&&this.ships[e].getShipPiecePositions()[i].getY()==t.getY())return this.ships[e].getShipPiecePositions()[i]},t}(),u=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(e,i)};return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),h=function(t){function e(e){return t.call(this,"D",4,e)||this}return u(e,t),e}(i),p=function(){function t(){this.mainBody=document.querySelector("#main")}return t.prototype.outputToDocument=function(t){this.mainBody.appendChild(t)},t.prototype.outputSink=function(){alert("SINK")},t.prototype.outputMiss=function(){alert("MISS")},t.prototype.outputHit=function(){alert("HIT")},t.prototype.outputWin=function(){confirm("You won! Press OK to restart")&&window.location.reload()},t.prototype.outputWelcome=function(){alert("Welcome to Battleships!\n\nAim: Sink the enemy's three ships\n\nSelect a square to make a move!")},t}(),a=function(){function t(){this.availableOrientations=["H","V"]}return t.prototype.randomiseShipParameters=function(t,e,i){for(var o=0;o<t.length;o++)this.randomiseShipOrientations(t),this.randomiseShipPositions(t,e,i)},t.prototype.randomiseShipOrientations=function(t){for(var e=0;e<t.length;e++)this.randomiseOrientation(t[e])},t.prototype.randomiseShipPositions=function(t,e,i){for(var o=0;o<t.length;o++)this.randomisePosition(t[o],e,i)},t.prototype.findShip=function(t,e){for(var i=0;i<e.length;i++)if(e[i].getId()==t)return e[i]},t.prototype.verifyHit=function(t){return null!=t.getSquareContent()},t.prototype.verifySunk=function(t){for(var e=0;e<t.getShipPiecePositions().length;e++)if(!t.getShipPiecePositions()[e].getHitStatus())return!1;return!0},t.prototype.verifyValidPlacements=function(t){for(var e=1,i=0;i<t.length;i++){for(var o=e;o<t.length;o++)for(var n=0;n<t[i].getShipPiecePositions().length;n++)for(var r=0;r<t[o].getShipPiecePositions().length;r++)if(t[i].getShipPiecePositions()[n].getX()==t[o].getShipPiecePositions()[r].getX()&&t[i].getShipPiecePositions()[n].getY()==t[o].getShipPiecePositions()[r].getY())return!1;e++}return!0},t.prototype.randomiseOrientation=function(t){var e=this.availableOrientations[Math.floor(Math.random()*this.availableOrientations.length)];t.setShipOrientation(e)},t.prototype.randomisePosition=function(t,e,i){if("V"===t.getShipOrientation()){(n=t.getShipPiecePositions())[0].setX(Math.floor(Math.random()*e));for(var o=1;o<n.length;o++)n[o].setX(n[0].getX());if(n[0].setY(Math.floor(Math.random()*i)),n[0].getY()<=5)for(o=1;o<n.length;o++)n[o].setY(n[o-1].getY()+1);else if(n[0].getY()>=5)for(o=1;o<n.length;o++)n[o].setY(n[o-1].getY()-1)}else if("H"===t.getShipOrientation()){var n;for((n=t.getShipPiecePositions())[0].setY(Math.floor(Math.random()*i)),o=1;o<n.length;o++)n[o].setY(n[0].getY());if(n[0].setX(Math.floor(Math.random()*e)),n[0].getX()<=5)for(o=1;o<n.length;o++)n[o].setX(n[o-1].getX()+1);else if(n[0].getX()>=5)for(o=1;o<n.length;o++)n[o].setX(n[o-1].getX()-1)}},t}(),c=function(){function t(){}return t.prototype.drawBoard=function(t){var e=document.createElement("div");e.id="board",e.className="grid-container",e.style.gridTemplateColumns="repeat("+t.getX()+", 1fr)",e.style.gridTemplateRows="repeat("+t.getY()+", 1fr)";for(var i=0;i<t.getBoardSquares().length;i++)e.appendChild(this.drawSquare(t.getBoardSquare(i)));return e},t.prototype.drawSquare=function(t){var e=document.createElement("div");return e.className="board-square",e.id=""+t.getId(),e},t.prototype.highlightSquare=function(t){console.log(t);var e=document.getElementById(""+t.getId()),i=t.getSquareContent().getColour();e.style.backgroundColor=""+i},t.prototype.highlightSunkShip=function(t,e){for(var i=e.getShipPiecePositions(),o=0;o<i.length;o++){var n=t.getX()*i[o].getY()+i[o].getX(),r=t.getBoardSquare(n);this.highlightSquare(r)}},t}(),f=function(){function t(t,e){var i=this;this.performHit=function(t){var e=t.target.id,o=i.board.getBoardSquare(e),n=o.getSquareContent();if(i.logic.verifyHit(o)){n.setHitStatus(!0);var r=i.logic.findShip(n.getId(),i.ships);return i.logic.verifySunk(r)?(r.sinkShip(),i.output.outputSink(),i.draw.highlightSunkShip(i.board,r),i.verifyEndGame()&&i.endGame()):i.output.outputHit(),void i.draw.highlightSquare(o)}i.output.outputMiss()},this.ships=e,this.board=t,this.output=new p,this.draw=new c,this.logic=new a;for(var o=0;o<this.ships.length;o++){this.ships[o].setId(o);for(var n=0;n<this.ships[o].getShipPiecePositions().length;n++)this.ships[o].getShipPiecePositions()[n].setId(o)}}return t.prototype.startGame=function(){for(this.output.outputWelcome(),this.logic.randomiseShipParameters(this.ships,this.board.getX(),this.board.getY());!this.logic.verifyValidPlacements(this.ships);)this.logic.randomiseShipParameters(this.ships,this.board.getX(),this.board.getY());this.board.placeShipsOnBoard(this.ships);var t=this.draw.drawBoard(this.board);this.output.outputToDocument(t),this.runGame()},t.prototype.runGame=function(){for(var t=document.querySelector("#board").children,e=0;e<t.length;e++)t[e].id=""+e,t[e].addEventListener("click",this.performHit)},t.prototype.endGame=function(){this.output.outputWin()},t.prototype.verifyEndGame=function(){for(var t=0;t<this.ships.length;t++)if(!this.ships[t].getSinkStatus())return!1;return!0},t}(),g=[],l=new s(10,10),d=new h("red"),y=new h("blue"),S=new n("green");g.push(d),g.push(y),g.push(S),new f(l,g).startGame()})();