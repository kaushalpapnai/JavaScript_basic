const button = document.querySelector(".container button")
const body = document.body
const colorTitle = document.querySelector("span")
console.log(colorTitle.textContent)
let randomColorGenerator=()=>{
    let red = (Math.floor(Math.random()*256))
    let green = (Math.floor(Math.random()*256))
    let blue = (Math.floor(Math.random()*256))
    let randomColor = `rgb(${red},${green},${blue})`
    return randomColor

}

button.addEventListener("click",(e)=>{
    const randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor
    colorTitle.textContent = randomColor
})
 