const sectionTodo = document.querySelector(".section-todo")
console.log(sectionTodo.classList) // this will give the list of classes in that element

sectionTodo.classList.add("bg-dark") // we can add properties to the classes like that

// sectionTodo.classList.remove("container") // we can remove the class like that

const ans = sectionTodo.classList.contains("container") // we can check if the class is avialable in the element or not
console.log(ans)




