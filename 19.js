// mouseover event and keypress event


const body = document.body

body.addEventListener("keypress",(e)=>{
    console.log(e.key)
})

const mainButton = document.querySelector(".btn-headline")
mainButton.addEventListener("mouseover",(e)=>{
    console.log("mouseover")
})

mainButton.addEventListener("mouseleave",(e)=>{
    console.log("mouseleave")
})