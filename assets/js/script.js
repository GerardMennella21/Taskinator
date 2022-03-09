var buttonEL = document.querySelector("#save-task");
var taksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taksToDoEl.appendChild(listItemEl);
};

buttonEL.addEventListener("click", createTaskHandler);

