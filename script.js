//console.log("Hello from Vercel!");
//Defino el array de Tareas
let tareas = [];
let indiceSeleccionado = null;
//Obtengo elementos del DOM
const tareaInput = document.getElementById("tareaInput");
const agregarButton = document.getElementById("agregarButton");
const listaTareas = document.getElementById("listaTareas");
const editarButton = document.getElementById("editarButton");
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

//Función para mostrar tareas
function mostrarTareas() {
  listaTareas.innerHTML = ""; // Limpia la lista antes de actualizar
  let htmlDeLaLista = "";
  tareas.forEach((tarea, index) => {
    htmlDeLaLista += `<li class="text-blue-500 text-lg" id=''>
    
    <div class="flex space-x-4">
      <p onclick="seleccionarTarea(${index})">
          Tarea ${index + 1}:  ${tarea}

      </p>  
      <button onclick="eliminarTarea(${index})" class="bg-red-500 text-white px-2 h-7 rounded">X</button>    
      </div>
    </li>`;
  });
  console.log(htmlDeLaLista);
  listaTareas.innerHTML = htmlDeLaLista;
}
function editarTarea() {
  if (indiceSeleccionado !== null) {
    tareas[indiceSeleccionado] = tareaInput.value; // Actualiza la tarea en el array
    mostrarTareas(); // Vuelve a renderizar la lista
    indiceSeleccionado = null; // Resetear el índice
    tareaInput.value = ""; // Limpiar el input
    editarButton.style.display = "none";
    agregarButton.style.display = "block";
  }
  console.log(indiceSeleccionado);
  console.log(tareaInput.value);
}

function seleccionarTarea(indice) {
  tareaInput.value = tareas[indice];
  indiceSeleccionado = indice;
  agregarButton.style.display = "none";
  editarButton.style.display = "block";
}
editarButton.style.display = "none";
// Agregar el evento click al botón
agregarButton.addEventListener("click", agregarTarea);
editarButton.addEventListener("click", editarTarea);
