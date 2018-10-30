// Code your JavaScript / jQuery solution here

function player() {
    if (turn % 2 === 1){
        return "O";
    }
    else {
        return "X";
    }
}

let turn;

function doTurn() {
  turn += 1;
}
