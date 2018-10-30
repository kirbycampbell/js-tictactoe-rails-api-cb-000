// Code your JavaScript / jQuery solution here

function player() {
    if (turn() % 2 ===0){
        console.log("its even")
    }
    else {
        console.log("its odd")
    }
}

let num = 0;

function turn() {
  return num++;
}
