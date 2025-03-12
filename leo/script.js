const root = document.getElementById("root");
// root.innerHTML = `<button class="bg-black text-white h-10 px-5 rounded">Leonidas</button>`;

const arrayDePrueba = ["rojo", "verde", "azul"];

let htmlDeBotones = `<button class="bg-black text-white h-10 px-5 rounded">Boton de inicio</button>`;

arrayDePrueba.forEach((valor, indice) => {
  htmlDeBotones += `<button class="block my-4 bg-blue-600 text-white h-10 px-5 rounded">Boton ${valor}</button>`;
});

root.innerHTML = htmlDeBotones;
