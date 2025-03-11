//console.log("Hello from Vercel!");
//Defino el array de Tareas
let tareas = [];
//Obtengo elementos del DOM
const tareaInput = document.getElementById("tareaInput");
const agregarButton = document.getElementById("agregarButton");
const listaTareas = document.getElementById("listaTareas");
//Función para agregar una tarea
function agregarTarea() {
  const tareaTexto = tareaInput.value.trim();
  if (tareaTexto !== "") {
    tareas.push(tareaTexto); // Agrega al array
    tareaInput.value = ""; // Limpia el input
    mostrarTareas(); // Llama a la función para mostrar las tareas
  }
}
//Función para mostrar tareas
function mostrarTareas() {
  listaTareas.innerHTML = ""; // Limpia la lista antes de actualizar
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea;
    li.classList.add(
      "text-sky-300",
      "border",
      "border-sky-950",
      "p-2",
      "rounded-lg",
      "bg-sky-950"
    );
    listaTareas.appendChild(li);
  });
}
// Agregar el evento click al botón
agregarButton.addEventListener("click", agregarTarea);
