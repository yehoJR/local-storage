const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// 1. Load saved tasks
let tasks = [];

try {
 const tareaGuardado = JSON.parse(
  localStorage.getItem("save1") || "[]" );
 
 if (Array.isArray(tareaGuardado)) {
  tasks = tareaGuardado;
 }
} catch (error) {
 tasks = [];
}

// 2. Save tasks to localStorage
function saveTasks() {
 localStorage.setItem("save1", JSON.stringify(tasks));
}

// 3. Display tasks on the screen
function displayTasks() {
 taskList.innerHTML = "";
 
 tasks.forEach((task, index) => {
  const li = document.createElement("li");
  
  const span = document.createElement("span");
  span.textContent = task;
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  
  deleteButton.addEventListener("click", () => {
   tasks.splice(index, 1);
   
   saveTasks();
   displayTasks();
  });
  
  li.appendChild(span);
  li.appendChild(deleteButton);
  
  taskList.appendChild(li);
 });
}

// 4. Add a new task
function addTask() {
 const taskText = taskInput.value.trim();
 
 if (taskText === "") {
  taskInput.focus();
  return;
 }
 
 tasks.push(taskText);
 
 saveTasks();
 displayTasks();
 
 taskInput.value = "";
 taskInput.focus();
}

// 5. Button click
addButton.addEventListener("click", addTask);

// 6. Press Enter to add a task
taskInput.addEventListener("keydown", (event) => {
 if (event.key === "Enter") {
  addTask();
 }
});

// 7. Display saved tasks when the page opens
displayTasks();

// prevent zooming==========
document.addEventListener("touchstart", function(event) {
 if (event.touches.length > 1) {
  event.preventDefault();
 }
 
}, { passive: false });

document.addEventListener("touchmove", function(event) {
 if (event.touches.length > 1) {
  event.preventDefault();
 }
}, { passive: false });
// ENDS HERE THE PREVENTION
     