// select element using id
// but this method is used for just selecting id's

const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)

// query selector 
// with the help of query selector we can select any element like id's and classes etc

const sample = document.querySelector("#main-heading") // for id's we use #
console.log(sample) 

const header = document.querySelector(".header")
console.log(header)

const items = document.querySelectorAll(".nav-item") // here you can see i used querySelectorAll because we have three items which have same class so simple querySelector will give first item only but querySelectoryAll will give all items 
console.log(items)