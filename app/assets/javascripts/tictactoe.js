// Code your JavaScript / jQuery solution here

function player() {
    if (turn % 2 != 0){
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
