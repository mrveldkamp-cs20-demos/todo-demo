// My Tasks by Mr. V

// HTML Variables
let addTaskBtnEl = document.getElementById("add-task-btn");
let taskInputEl = document.getElementById("task-in");
let taskContainerEl = document.getElementById("task-container");

// Initialize & Display Task List
let tasks = initTasks();
displayTasks();

// EVENT STUFF
addTaskBtnEl.addEventListener("click", addTask);
taskInputEl.addEventListener("keydown", keydownHandler);

function addTask() {
  tasks.push(newTask(taskInputEl.value));
  saveTasks();
  displayTasks();
}

function keydownHandler(e) {
  if (e.code === "Enter") {
    addTask();
    taskInputEl.value = "";
  }
}

function checkboxClick(e) {
  let index = +e.target.dataset.index;
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  displayTasks();
}

function removeBtnClick(e) {
  let index = +e.target.dataset.index;
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

