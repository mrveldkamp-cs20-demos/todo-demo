// Task Functions

function initTasks() {
  let tasksStr = localStorage.getItem("tasks");
  if (!tasksStr) {
    return [];
  } else {
    return JSON.parse(tasksStr);
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
  taskContainerEl.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    taskContainerEl.append(taskAsElement(tasks[i], i));
  }
}

function newTask(taskStr) {
  return {
    task: taskStr,
    completed: false
  }
}

function taskAsElement(task, index) {
  // Checkbox
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = task.completed;
  checkBox.dataset.index = index;
  checkBox.addEventListener("input", checkboxClick);

  // Task Span
  let taskSpan = document.createElement("span");
  taskSpan.innerHTML = task.task;
  if (task.completed) {
    taskSpan.className = "completed";
  }

  // Remove Button
  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "remove";
  removeBtn.dataset.index = index;
  removeBtn.addEventListener("click", removeBtnClick);
  
  let divEl = document.createElement("div");
  divEl.className = "task-div";
  divEl.append(checkBox);
  divEl.append(taskSpan);
  divEl.append(removeBtn);

  return divEl;
}


