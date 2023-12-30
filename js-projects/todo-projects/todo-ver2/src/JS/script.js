function addTask() {
  var taskText = document.getElementById("newTask").value;
  if (taskText === "") {
    alert("Add Task Please!");
    return;
  }

  var il = document.createElement("li");
  il.textContent = taskText;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => il.remove();
  
  il.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(il);
  
  document.getElementById("newTask").value = "";
}

