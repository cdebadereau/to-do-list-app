let taskList = document.getElementById("task-list");

function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;

  let editButton = document.createElement("button");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square edit-button"></i>`;
  editButton.onclick = function () {
    editTask(li);
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-circle-xmark delete-button"></i>`;
  deleteButton.onclick = function () {
    deleteTask(li);
  };

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);

  taskInput.value = "";
}

function editTask(task) {
  let taskTextElement = task.firstChild;
  let taskText = taskTextElement.textContent;

  let newTaskText = prompt("Modifica il task", taskText);

  if (newTaskText === null || newTaskText === "") {
    return;
  }

  taskTextElement.textContent = newTaskText;
}

function deleteTask(task) {
  taskList.removeChild(task);
}
