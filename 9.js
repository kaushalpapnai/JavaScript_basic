// adding html elements using javascript

// const todoList = document.querySelector(".todo-list")
// todoList.innerHTML += "<li>New list </li>" // after adding + sign the browser add new list but not remove the previous list
// but this method is not recommended 


// we have another method for creating new elements 

// const newTodoItem = document.createElement("li")
// const newTodoText = document.createTextNode("this is new item")
// newTodoItem.append(newTodoText) // append add the element at the last
// newTodoItem.prepend(newTodoText) // prepand add the element at the starting
// const list = document.querySelector(".todo-list")
// list.append(newTodoItem)
 

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "hello world"
const todoItem = document.querySelector(".todo-list")
todoItem.after(newTodoItem)

// note --> prepend and append add the Element inside that Element but before and after add the element outside that element 