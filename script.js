document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var taskInput = document.getElementById("task");
  var dueTimeInput = document.getElementById("dueTime");
  var taskText = taskInput.value.trim();
  var dueTime = dueTimeInput.value.trim();
  if (taskText !== "" && dueTime !== "") {
    addTaskToList(taskText, dueTime);
    taskInput.value = "";
    dueTimeInput.value = "";
  }
});

function addTaskToList(taskText, dueTime) {
  var tasksContent = document.getElementById("tasksContent");
  var taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  var taskDiv = document.createElement("div");
  taskDiv.classList.add("task-text");
  taskDiv.textContent = taskText;

  var dueTimeDiv = document.createElement("div");
  dueTimeDiv.classList.add("due-time");
  dueTimeDiv.textContent = "Due: " + dueTime;

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "done";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function() {
    taskContainer.remove();
  });

  editButton.addEventListener("click", function() {
    var newTaskText = prompt("Edit task:", taskText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskDiv.textContent = newTaskText.trim();
    }

    var newDueTime = prompt("Edit due time (HH:MM AM/PM):", dueTime);
    if (newDueTime !== null && newDueTime.trim() !== "") {
      dueTimeDiv.textContent = "Due: " + newDueTime.trim();
    }
  });

  taskContainer.appendChild(taskDiv);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);
  taskContainer.appendChild(dueTimeDiv);

  tasksContent.appendChild(taskContainer);
}
 
