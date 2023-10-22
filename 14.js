// if we want to select multiple buttons and apply them properties individually

// by normal function we use this method

const allButtons = document.querySelectorAll("button")

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }

// by using simple for loop

// for(i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this)
//     })
// }

// by using forEach loop

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
                console.log(this)
            })
})