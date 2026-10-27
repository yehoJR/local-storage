const input = document.getElementById("searchInput");

const btn = document.getElementById("searchBtn");

const box = document.getElementById("box");

// empezo desde aqui ==========================
btn.addEventListener("click", function() {
 const taskText = input.value.trim();
 
 if (taskText === "") {
  alert("escribe una tarea primero?");
  return;
 }
 
 // crear el elemnto de la tarea==========
 const li = document.createElement("li");
 
 // crear el texto
 const span = document.createElement("span");
 span.textContent = taskText;
 
 // marcar cmo completa al hacer click=====
 span.addEventListener("click", function() {
  span.classList.toggle("completo");
 });
 
 // crear boton para eliminar=======
 const deletebtn = document.createElement("button");
 deletebtn.classList.toggle("eliminar");
 deletebtn.textContent = " x "
 
 // ===========================================
 deletebtn.addEventListener("click", function() {
  li.remove();
 });
 
 // ageragar elemento a la lista==========
 
 li.appendChild(span);
 li.appendChild(deletebtn);
 box.appendChild(li);
 
 // limpiar el input======
 input.value = "";
 input.focus();
});