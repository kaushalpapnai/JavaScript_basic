const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// capturing event 
// grandParent.addEventListener("click",(e)=>{
//     console.log("capture grandParent")
// },true)

// parent.addEventListener("click",(e)=>{
//     console.log("capture parent")
// },true)

// child.addEventListener("click",(e)=>{
//     console.log("capture child")
// },true)

// document.body.addEventListener("click",(e)=>{
//     console.log("capture body")
// },true)



// this is called bubbling events
// grandParent.addEventListener("click",(e)=>{
//     console.log("bubble grandParent")
// })

// parent.addEventListener("click",(e)=>{
//     console.log("bubble parent")
// })

// child.addEventListener("click",(e)=>{
//     console.log("bubble child")
// })

// document.body.addEventListener("click",(e)=>{
//     console.log("bubble body")
// })


// event delegation 
grandParent.addEventListener("click",(e)=>{
    console.dir(e.target.textContent)
})