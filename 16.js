// Events behind the scene

console.log("script starts !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0; i<100000000;i++){
            num += i;
        }
        console.log(e.currentTarget.textContent,num)
    })
})


let outerVar = 0;
for(let i=0; i<100000000; i++){
     outerVar += i;
}
console.log("outer vat is",outerVar)
console.log("script end !!!!");