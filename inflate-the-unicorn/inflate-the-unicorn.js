// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//----create an array of the images----
let imgArr = [
  {
    name: 'state1',
    img: './images/unicorn-0.png',
  },
  {
    name: 'state2',
    img: './images/unicorn-1.png',
  },
  {
    name: 'state3',
    img: './images/unicorn-2.png',
  },
  {
    name: 'state4',
    img: './images/unicorn-3.png',
  },
]
let inflation = imgArr[1].img.charAt(imgArr[1].img.length - 5)

console.log(imgArr)
//create an array of the 3 elements
let unicornImageArr = document.getElementsByTagName('img')
let currentImage = unicornImageArr[i]
for (let i = 0; i < unicornImageArr.length; i++) {
  unicornImageArr[i].onclick = clickedOn
}
console.log(unicornImageArr)

function clickedOn(e) {
  let inflation = currentImage.src.charAt(currentImage.src.length - 5)
  if (inflation < 3) {
    inflation = inflation + 1
  }
}
console.log('inflation is:' + inflation)
console.log()
