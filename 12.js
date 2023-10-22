// intro to events 
// three methods to add events
// 1. normal as a attribute in html files element

// 2. as a function

// const btn = document.querySelector(".btn-headline")
// console.dir(btn)
// btn.onclick = function(){
//     console.log("hello world")
// }

// 3. add event listner this is the 99% used method

// const btn = document.querySelector(".btn-headline")

// function clickMe(){
//     console.log("this is 3 method")
// }

// btn.addEventListener("click",clickMe)

// using arrow function

const btn = document.querySelector(".btn-headline")
btn.addEventListener("click",()=>{
    console.log("you clicked me")
})