// Code your JavaScript / jQuery solution here

function player() {
  doTurn();
  //Not sure why the test requires this in reverse for it to work
    if (turn % 2 === 1){
        return "X";
    }
    else {
        return "O";
    }
}

let turn = 0;

function doTurn() {
  turn++;
}

function updateState(spot) {
  spot.innerHTML = player();
}

function setMessage(string) {
  const messageDiv = window.document.getElementById('message');
  messageDiv.innerHTML = string;
}
