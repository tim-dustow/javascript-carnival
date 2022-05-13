// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let cell = document.getElementsByTagName('td') //---Get individual cells

//---get random number 0-24 or 1-25 -1, assign to 'x' array
function getRandomNumer(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
let hitMoles = 0

function revealMole() {
  let randomNum = getRandomNumer(0, 25)
  let randomCell = cell[randomNum]
}

console.log(cell)
console.log('Whack-a-Mole!')
