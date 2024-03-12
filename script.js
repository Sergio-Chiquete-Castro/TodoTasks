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
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.textContent = taskText;
    tasksContent.appendChild(taskDiv);
  }
  