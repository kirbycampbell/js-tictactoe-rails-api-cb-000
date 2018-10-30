// Code your JavaScript / jQuery solution here

const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

var turn = 0;
var currentGame = 0;

$(document).ready(function() {
  attachListeners();
});

var player = () => turn % 2 ? 'O' : 'X';

function doTurn(space) {
  updateState(space);
  turn++;
  if (checkWinner()) {
  saveGame();
  resetBoard();
} else if (turn === 9) {
  setMessage("Tie game.");
  saveGame();
  resetBoard();
}
}

function updateState(spot) {
  spot.innerHTML = player();
}

function setMessage(string) {
  $('#message').text(string);
}
