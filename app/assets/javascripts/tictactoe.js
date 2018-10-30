// Code your JavaScript / jQuery solution here

function player() {
  doTurn();
    if (doTurn() % 2 === 0){
        return "X";
    }
    else {
        return "O";
    }
}

let turn;

function doTurn() {
  return turn += 1;
}
