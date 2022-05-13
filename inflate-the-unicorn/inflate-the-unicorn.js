// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//----create an array of the images----
//create an array of the 3 elements
let unicornImage = document.getElementsByTagName('img')
for (let i = 0; i < unicornImage.length; i++) {
  unicornImage[i].onclick = clickedOn
}

console.log(unicornImage)

function clickedOn(e) {
  let unicornImage = e.target
  let mySrc = e.target.src
  let inflation = mySrc.charAt(mySrc.length - 5)
  console.log(unicornImage)
  console.log(inflation)
  if (inflation === '0') {
    e.target.src = './images/unicorn-1.png'
  }
  if (inflation === '1') {
    e.target.src = './images/unicorn-2.png'
  }
  if (inflation === '2') {
    e.target.src = './images/unicorn-3.png'
  }
  if (inflation === '3') {
    alert('inflated')
  }
}
