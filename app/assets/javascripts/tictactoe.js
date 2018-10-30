// Code your JavaScript / jQuery solution here

const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

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
  $('#message').text(string);
}

function checkWinner() {
  WINNING_COMBOS.forEach(function(spot) {
    if (spot === 'x') {
      return "this kinda works";
    } else {
      return 'not really';
    }
  })
}
