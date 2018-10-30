// Code your JavaScript / jQuery solution here

function player() {
  doTurn();
    if (turn % 2 === 0){
        return "X";
    }
    else {
        return "O";
    }
}

let turn;

function doTurn() {
  turn++;
}
