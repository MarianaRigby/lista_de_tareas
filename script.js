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
  } else {
    // Si no tiene algun valor.
    // Mostrar un mensaje de que tiene que ingresar el nombre de la tarea
    alert("Ingresa el nombre de la tarea");
  }
}

//function eliminarTarea(indice) {
// Aqui eliminar la tarea seleccionada
//alert("Eliminando tarea numero: " + (indice + 1));
//Validar para que se elimine la tarea seleccionada
function eliminarTarea(indice) {
  // Confirmar antes de eliminar la tarea
  const confirmacion = confirm(
    `¿Estás seguro de que quieres eliminar la tarea ${indice + 1}?`
  );

  if (confirmacion) {
    tareas.splice(indice, 1); // Eliminar 1 tarea en la posición 'indice'
    mostrarTareas(); // Actualizar la lista en pantalla
  }
}
//}
//Función para mostrar tareas
function mostrarTareas() {
  listaTareas.innerHTML = ""; // Limpia la lista antes de actualizar
  let html = "";
  tareas.forEach((tarea, index) => {
    html += `<li class="text-blue-500 text-lg" id=''>
    
    <div class="flex space-x-4">
      <p>
          Tarea ${index + 1}:  ${tarea}
      </p>  
      <button onclick="eliminarTarea(${index})" class="bg-red-500 text-white px-2 h-7 rounded">X</button>    
      </div>
    </li>`;
  });
  listaTareas.innerHTML = html;
}
// Agregar el evento click al botón
agregarButton.addEventListener("click", agregarTarea);
