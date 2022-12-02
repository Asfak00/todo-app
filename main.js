onload = () => {
  main();
};

// main function
const main = () => {
  //html element reference
  const todoInput = document.getElementById("todo-input");
  const addTodoBtn = document.getElementById("add-todo-button");
  const todoStorageDiv = document.getElementById("todo-stored-section");
  const todoWishListDiv = document.getElementById("todo-done-section");

  addTodoBtn.addEventListener("click", function () {
    const div = document.createElement("div");
    div.style.marginTop = "0.6rem";
    const todoText = document.createElement("span");
    const checkBox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    deleteBtn.className = "delete-btn";
    checkBox.type = "checkbox";
    todoText.className = "added-todo";
    todoText.style.marginLeft = "0.3rem";
    const todoInputValue = todoInput.value;
    todoText.innerText = todoInputValue;
    div.appendChild(checkBox);
    div.appendChild(todoText);
    div.appendChild(deleteBtn);
    if (todoInput.value === "") {
      alert("Please write anything");
    } else {
      todoStorageDiv.appendChild(div);
      todoStorageDiv.style.display = "block";
    }

    todoInput.value = "";

    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        todoWishListDiv.style.display = "block";
        todoStorageDiv.removeChild(div);
        todoWishListDiv.appendChild(div);
      } else {
        todoStorageDiv.appendChild(div);
        todoWishListDiv.removeChild(div);
        todoWishListDiv.style.display = "none";
      }
    });

    deleteBtn.addEventListener("click", function () {
      div.remove();
    });
  });
};
