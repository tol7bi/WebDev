function addItem() {

    const input = document.getElementById("ToDo");
    const todoText = input.value.trim();

    if (!todoText) {
      alert("Please enter a todo item.");
      return; 
    }
  
    const newItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      newItem.classList.toggle("completed", checkbox.checked); 
    });

    const textNode = document.createTextNode(todoText);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.textContent = ""; 
    deleteBtn.addEventListener("click", function() {
      newItem.remove();
    });
    
    newItem.appendChild(checkbox);
    newItem.appendChild(textNode);
    newItem.appendChild(deleteBtn);
    document.getElementById("ToDoList").appendChild(newItem);
  

    input.value = "";
  }
  
