const miPerfil = {
  nombre: "Mariana",
  apellidos: "Rigby Castillo",
  edad: 20,
  estaActivo: true,
  correo: "marianarigby10@gmail.com",
  celular: 3313317542,
  coloresFavoritos: ["azul", "rosita", "morado", "amarillo", "verde"],
};
let colorActivo;
let textoActivo;

if (miPerfil.estaActivo === true) {
  colorActivo = "bg-green-500";
  textoActivo = "Activo";
} else {
  colorActivo = "bg-red-500";
  textoActivo = "Inactivo";
}
let nombre = document.getElementById("nombre");
nombre.innerHTML = miPerfil.nombre + " " + miPerfil.apellidos;
let edad = document.getElementById("edad");
edad.innerHTML = miPerfil.edad + " años";
let colores = document.getElementById("colores");

let elementosHtml = ` 
  <div class="flex items-center justify-center mt-2 pb-2">
   <p class="">${textoActivo}</p>
        <div class="w-3 h-3 ${colorActivo} rounded-full ml-2"></div>
    </div>
    <div class="flex flex-col justify-center items-center gap-4">
    <div class="flex justify-center items-center border border-gray-400 h-[40px] w-[300px] rounded-lg">
    <p class="">Datos del Contacto</p>
    </div>
    <div class="flex flex-col  border border-gray-400 h-[50px] w-[400px] rounded-lg">
    <p>Correo:</p>
    <p class=""> ${miPerfil.correo}</p>
    </div>
    <div class="flex flex-col border border-gray-400 h-[50px] w-[400px] rounded-lg">
    <p>Celular:</p>
    <p class="">${miPerfil.celular}</p>
    </div>
  `;

contenedorDatosDelContacto.innerHTML = elementosHtml;

let htmlDeColores = "";
miPerfil.coloresFavoritos.forEach((color) => {
  if (color === "azul") {
    colorClase = "bg-sky-300";
  } else if (color === "rosita") {
    colorClase = "bg-pink-600";
  } else if (color === "morado") {
    colorClase = "bg-purple-400";
  } else if (color === "amarillo") {
    colorClase = "bg-yellow-200";
  } else if (color === "verde") {
    colorClase = "bg-emerald-300";
  }

  htmlDeColores += `<div class="inline-flex w-[80px] h-[20px]  m-1 ${colorClase} ">
  </div>`;
});

colores.innerHTML = htmlDeColores;
