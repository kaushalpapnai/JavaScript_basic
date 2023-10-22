const formText = document.querySelector(".form-todo input[type = 'text']")
const form = document.querySelector(".form-todo")
let newLi = document.createElement("li")
const todoList = document.querySelector(".todo-list")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    formTextvalue = formText.value
    let element = `<span class="text">${formTextvalue}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = element
    todoList.append(newLi)
    console.log(element)
    formText.value = ""
})

todoList.addEventListener("click",(e)=>{
  if(e.target.classList.contains("remove")){
      const targetedValue = e.target.parentNode.parentNode
      targetedValue.remove()
  }
  if(e.target.classList.contains("done")){
    const span = e.target.parentNode.parentNode.firstElementChild
    span.style.textDecoration = "line-through"
  }
})