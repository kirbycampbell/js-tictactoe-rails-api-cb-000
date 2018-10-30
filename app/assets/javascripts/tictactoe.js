// Code your JavaScript / jQuery solution here

function player() {

    if (doTurn % 2 === 0){
        return "O";
    }
    else {
        return "X";
    }
}

let turn;

function doTurn() {
  return turn += 1;
}
