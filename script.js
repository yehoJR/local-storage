let counter = Number(localStorage.getItem("counter1")) || 0;

const count = document.getElementById("count");

let result = Number(localStorage.getItem("result")) || 0;
 
 const screen = document.getElementById("screen");

screen.textContent = result; 

count.textContent = counter;

function add() {
  counter++;

  count.innerHTML = counter;
  localStorage.setItem("counter1", counter);
}

function minus() {
 if (counter === 0) {
  counter = 0;
  
 } else {
  counter--;
  
  count.innerHTML = counter;
  localStorage.setItem("counter1", counter);

 }
}

function reset() {
 counter = 0;
 
 count.innerHTML = counter;
 localStorage.setItem("counter1", counter);
}


function multiple() {
 result += 1 * 2;
 // result = result * result;
 
 screen.innerHTML = result;
 localStorage.setItem("result", result);
}

function divide() {
 result = result / 2;
 
 screen.innerHTML = result;
 localStorage.setItem("result", result);
}

function cero() {
 result = 0;
 
 screen.innerHTML = result;
 localStorage.setItem("result", result);
}

