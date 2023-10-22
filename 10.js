// const listItems = document.querySelectorAll(".todo-list li")
// const sixthLi = document.createElement("li")
// sixthLi.textContent = "sixth li"
// const ul = document.querySelector(".todo-list")
// ul.append(sixthLi)
// console.log(listItems)
// in querySelector we have added sixth li but in console it is showing only five li it is because querrySelector gives us static list


// we can use getElementSomething like to get live element which show us live list instead of static
const ul = document.querySelector(".todo-list")
const listItems = ul.getElementsByTagName("li")
const sixthLi = document.createElement("li")
sixthLi.textContent = "sixth li"
ul.append(sixthLi)
console.log(listItems)