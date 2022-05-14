// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let cellsArray = document.getElementsByTagName('TD') //---Get individual cells
console.log()
//---get random number 0-24 or 1-25 -1, assign to 'x' array
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function showMole() {
  let randomNum = getRandomNumber(0, 25)
  let randomCell = cellsArray[randomNum]
  const img = document.createElement('img')
  img.src = 'mole.PNG'
  img.style.width = '75px'
  img.style.height = '75px'
  img.id = 'mole'
  randomCell.appendChild(img)
  document.getElementById('mole').onclick = function () {
    whackedMole()
  }
}
showMole()

function whackedMole() {
  document.getElementById('mole').remove()
  const soundEffect = new Audio()
  soundEffect.src = 'whack-audio.wav'
  soundEffect.play()
  showMole()
}
console.log('Whack-a-Mole!')
