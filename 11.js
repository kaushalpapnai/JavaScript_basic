// how to get dimensions of elements

const sectionTodo = document.querySelector(".section-todo")
const info = sectionTodo.getBoundingClientRect() // this will give the dimensions of element if you want specific like height you can use .height
console.log(info)