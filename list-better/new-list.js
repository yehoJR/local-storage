 const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

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