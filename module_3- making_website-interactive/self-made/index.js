let homeScore = document.getElementById("display-home");
let guestScore = document.getElementById("display-guest");

function incrementOne(param) {
  param.textContent = +param.textContent + +1;
}
function incrementTwo(param) {
  param.textContent = +param.textContent + +2;
}
function incrementThree(param) {
  param.textContent = +param.textContent + +3;
}
function reset() {
  guestScore.textContent = 0;
  homeScore.textContent = 0;
}
