// this keyword inside normal function

// const btn = document.querySelector(".btn-headline")

// btn.addEventListener("click",function(){
//     console.log("you clicked me")
//     console.log(this)
// })


// this keyword inside arrow function

const btn = document.querySelector(".btn-headline")

btn.addEventListener("click",()=>{
    console.log("you clicked me")
    console.log(this)
})


