const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


let tarea = [];

const tareaGuardada = JSON.parse(
  localStorage.getItem("save1") || "[]");

function guardarTarea() {
  localStorage.setItem("save1", JSON.stringify(tarea));
}

function mostrarEnpantalla() {
  taskList.innerHTML = "";

  const tareaTexto = taskInput.value.trim();

if (tareaTexto === "") {
  
}
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    taskInput.focus();
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.className = "delete-button";
  deleteButton.type = "button";

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

// Agregar con el botón de la pantalla
addButton.addEventListener("click", addTask);

// Agregar presionando Enter
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
