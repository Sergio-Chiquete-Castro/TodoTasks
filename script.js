document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var taskInput = document.getElementById("task");
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToList(taskText);
    taskInput.value = "";
  }
});

function addTaskToList(taskText) {
  var tasksContent = document.getElementById("tasksContent");
  var taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  var taskDiv = document.createElement("div");
  taskDiv.classList.add("task-text");
  taskDiv.textContent = taskText;

  // Create delete button with check mark symbol
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#x2713;"; // Check mark symbol
  deleteButton.classList.add("delete-button");

  // Create edit button
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");

  // Add event listener to delete button
  deleteButton.addEventListener("click", function() {
    tasksContent.removeChild(taskContainer); // Remove task element from DOM
  });

  // Add event listener to edit button
  editButton.addEventListener("click", function() {
    var newText = prompt("Edit task:", taskText);
    if (newText !== null && newText.trim() !== "") {
      taskDiv.textContent = newText.trim();
    }
  });

  // Append task text, edit button, and delete button to task container
  taskContainer.appendChild(taskDiv);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  // Append task container to tasks content
  tasksContent.appendChild(taskContainer);
}