//change contents of h1

const title = document.querySelector('h1')
title.textContent = "HACKED!"
console.log("title", title)

//change the href of all the links

const anchors = document.querySelectorAll('a')
anchors.forEach(anchor => anchor.href="https://thebadguys.com")
   
// for (let e of anchors) {e.href = "https://thebadguys.com"}
// console.log(anchors)

//add an image to the beginning of the body

const newImage = document.createElement('img')
newImage.src = `https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png`
document.body.prepend(newImage)

//delete all the p tag direct children of main

const main = document.querySelector('main')
const children = document.querySelectorAll('main > p')
console.log(child)
children.forEach(child => main.removeChild(child))
    
// for (let e of child) {main.removeChild(e)}

//adds a p tag at the end of the doucment
const ending = document.createElement('p')
ending.textContent = "Your account has been compromised."
document.body.append(ending)

//reset the counter of days to 0
const daysCounter = document.querySelector('span')
daysCounter.textContent = "0"



