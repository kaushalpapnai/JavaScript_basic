const allButtons = document.querySelectorAll(".my-buttons button")
console.log(allButtons)

allButtons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "red";
    })
})