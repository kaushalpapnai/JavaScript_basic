// now we use arrow function for event listening

const allButtons = document.querySelectorAll(".my-buttons button")

for(let button of allButtons){
    allButtons.addEventListner("click",(e)=>{
        console.log(e.currentTarget)
    })
}