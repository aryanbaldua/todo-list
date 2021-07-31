//create global variables of html element to be used anywhere in this file
const addBtn = document.querySelector(".add-btn")
const input = document.querySelector(".new-item")
const ul = document.querySelector(".todo-list")

// helper functions to be used after they are defined
const addNewItem = (newItemText) => {
    let newItem = document.createElement("li")
    newItem.innerHTML = `
    <span>${newItemText}</span>
    <button class = "delete">Delete</button>
    `
    ul.appendChild(newItem)
}

//event listeners
addBtn.addEventListener("click", () => {
    addNewItem(input.value)
})


