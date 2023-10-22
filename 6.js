// iterable elements 

// let items = document.getElementsByTagName("a")  // HTMLcollection
// console.log(items)

// there are three type of for loops
// simple for loop 
// for of loop
// forEach loop 

// note --> we cannot use forEach loop in HTMLcollection


// simple for loop 
// for( let i=0; i<items.length; i++){
//     const item = items[i]
//     item.style.backgroundColor = "#fff"
//     item.style.color = "green"
// }

// for of loop
// for(let item of items){
//     item.style.backgroundColor = "#fff"
//     item.style.color = "green"
// }

// note --> here we first convert html collection to array than we can use forEach method 
// items = Array.from(items)
// items.forEach((item)=>{
//     item.style.backgroundColor = "#fff"
//     item.style.color = "green"
// })



// note --> here we use querySelectorAll
// because in querySelectorAll we can use forEach loop directly because it return node collection not HTMLcollection
let items = document.querySelectorAll("a")
items.forEach((item)=>{
    item.style.backgroundColor = "#fff"
    item.style.color = "green"
})

