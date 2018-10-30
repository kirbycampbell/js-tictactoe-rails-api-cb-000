// Code your JavaScript / jQuery solution here

const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                        [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let turn = 0;
let currentGame = 0;

$(document).ready(function() {
  attachListeners();
});

var player = () => turn % 2 ? 'O' : 'X';



function doTurn() {
  turn++;
}

function updateState(spot) {
  spot.innerHTML = player();
}

function setMessage(string) {
  $('#message').text(string);
}
