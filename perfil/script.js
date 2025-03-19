const miPerfil = {
  nombreApellidos: "Mariana Rigby Castillo",
  edad: 20,
  estaActivo: true,
  imagen:
    "https://orquideafloral.com.mx/wp-content/uploads/2024/06/89f722edf28550b553d2faa3e83d48f2-844x1500.webp",
  correo: "marianarigby10@gmail.com",
  celular: 3313317542,
  coloresFavoritos: ["azul", "rosita", "morado", "amarillo", "verde"],
};
let colorEstado;
let textoEstado;
const perfilContainer = document.getElementById("perfilContainer");

if (miPerfil.estaActivo === true) {
  colorEstado = "bg-green-500";
  textoEstado = "Activo";
} else {
  colorEstado = "bg-red-500";
  textoEstado = "Inactivo";
}
let html = `
    <img src="${miPerfil.imagen}" class="w-[250px] h-[250px] mx-auto rounded-full">
      
    <div class="flex items-center justify-center mt-2">
        <div class="w-3 h-3 ${colorEstado} rounded-full mr-2"></div>
        <p class="text-gray-700 font-semibold">${textoEstado}</p>
    </div>
    
    
     

    <h2 class="text-xl  font-medium  text-sky-950 mt-3">Nombre: ${miPerfil.nombreApellidos}</h2>

    <h3 class=" font-semibold text-center text-2xl mt-4">Datos del contacto</h3>
    <hr class=" border border-sky-800">
    <p class="font-medium text-xl text-sky-950 mb-2">Edad: ${miPerfil.edad} años</p>
    <p class="  font-medium text-xl text-sky-950 mb-2">Correo: ${miPerfil.correo}</p>
    <p class="font-medium text-xl text-sky-950 mb-2">Celular: ${miPerfil.celular}</p>
  
    <p class="font-medium text-xl text-sky-950 mb-2">Colores Favoritos:</p>
    

`;

miPerfil.coloresFavoritos.forEach((color) => {
  if (color.toLocaleLowerCase() === "azul") {
    colorClase = "bg-blue-500";
  } else if (color.toLowerCase() === "rosita") {
    colorClase = "bg-pink-500";
  } else if (color.toLowerCase() === "morado") {
    colorClase = "bg-purple-500";
  } else if (color.toLowerCase() === "amarillo") {
    colorClase = "bg-yellow-500";
  } else if (color.toLowerCase() === "verde") {
    colorClase = "bg-green-500";
  }

  html += `<div class="inline-flex   w-6 h-6 ${colorClase} rounded-full m-1"></div>`;
});

perfilContainer.innerHTML = html;
