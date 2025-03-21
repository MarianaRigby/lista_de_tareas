const nombre = "Mariana";
const apellidos = "Rigby Castillo";

let elementoNombre = document.getElementById("nombre");
elementoNombre.innerHTML = nombre + " " + apellidos;
const URLDeImagen =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
let contenedorDeImagen = document.getElementById("contenedorDeImagen");
contenedorDeImagen.innerHTML = `<img class="h-20 w-20 rounded-lg "src=${URLDeImagen}/>`;
