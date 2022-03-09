var formEL = document.querySelector("#task-form");
var taksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taksToDoEl.appendChild(listItemEl);
};

formEL.addEventListener("submit", createTaskHandler);

