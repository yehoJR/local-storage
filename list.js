const input = document.getElementById("searchInput");

const btn = document.getElementById("searchBtn");

const box = document.getElementById("box");

// empezo desde aqui ==========================
btn.addEventListener("click", function() {
 const taskText = input.value.trim();
 
 if (taskText === "") {
  alert("escribe una tarea primero?");
  return;o
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