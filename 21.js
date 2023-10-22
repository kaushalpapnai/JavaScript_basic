const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
console.log(todoInput)

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(todoInput.value)
    todoInput.value = "";
})