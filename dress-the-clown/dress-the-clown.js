// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let bodyPartIndex = -1

let clothingIndex = 0

function changeClothes() {
  let headSrc = './images/head' + bodyPartIndex + '.png'
  let bodySrc = './images/body' + bodyPartIndex + '.png'
  let shoesSrc = './images/shoes' + bodyPartIndex + 'png'

  let head = document.getElementById('head')
  let body = document.getElementById('body')
  let shoes = document.getElementById('shoes')

  if (clothingIndex == 0) {
    head.src = headSrc
  } else if (clothingIndex == 1) {
    body.src = bodySrc
  } else if (clothingIndex == 2) {
    shoes.src = shoesSrc
  }
}

console.log('Dress The Clown!')
