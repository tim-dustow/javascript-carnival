// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let bodyPartIndex = 0

let clothingIndex = 0

function changeClothes() {
  let headSrc = './images/head' + bodyPartIndex + '.png'
  let bodySrc = './images/body' + bodyPartIndex + '.png'
  let shoesSrc = './images/shoes' + bodyPartIndex + '.png'

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

document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowRight':
      if (bodyPartIndex < 5) {
        bodyPartIndex++
      } else {
        bodyPartIndex = 0
      }
      changeClothes()
      break
    case 'ArrowLeft':
      if (bodyPartIndex < 6 && bodyPartIndex > 0) {
        bodyPartIndex--
      } else {
        bodyPartIndex = 5
      }
      changeClothes()
      break
    case 'ArrowUp':
      if (clothingIndex < 2) {
        clothingIndex++
      } else {
        clothingIndex = 0
      }
      break
    case 'ArrowDown':
      if (clothingIndex < 3 && clothingIndex > 0) {
        clothingIndex--
      } else {
        clothingIndex = 2
      }
  }
})

console.log('Dress The Clown!')
