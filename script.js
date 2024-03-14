document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var taskInput = document.getElementById("task");
  var dueTimeInput = document.getElementById("dueTime");
  var taskText = taskInput.value.trim();
  var dueTime = dueTimeInput.value.trim();
  if (taskText !== "" && dueTime !== "") {
    // Convert 24-hour time to 12-hour format with AM/PM
    var formattedDueTime = formatDueTime(dueTime);
    addTaskToList(taskText, formattedDueTime);
    taskInput.value = "";
    dueTimeInput.value = "";
  }
});

function formatDueTime(dueTime) {
  var [hours, minutes] = dueTime.split(":");
  var hour = parseInt(hours);
  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // Handle midnight (00:00) as 12 AM
  return hour + ':' + minutes + ' ' + ampm;
}

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
      // Convert edited due time to 12-hour format with AM/PM
      var formattedNewDueTime = formatDueTime(newDueTime);
      dueTimeDiv.textContent = "Due: " + formattedNewDueTime;
    }
  });

  taskContainer.appendChild(taskDiv);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);
  taskContainer.appendChild(dueTimeDiv);

  tasksContent.appendChild(taskContainer);
}
