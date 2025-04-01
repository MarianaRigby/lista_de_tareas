const coloresFavoritos = [
  "azul",
  "amarillo",
  "verde",
  "rojo",
  "rosita",
  "morado",
];
console.log(coloresFavoritos[1]);
//for (inicializacion; condicion; actualizacion) {}
for (let i = 0; i < coloresFavoritos.length; i++) {
  console.log(coloresFavoritos[i]);
  if (coloresFavoritos[i] === "rojo") {
    console.log("El color rojo no es de mis colores favoritos");
    break;
  }
}
//array.forEach((elemento, índice, array) => {}
coloresFavoritos.forEach((colorFavorito, indice) => {
  console.log(indice, colorFavorito);
});
//for (const variable of iterable) {}
for (const colorFavorito of coloresFavoritos) {
  console.log(
    "Mi color favorito # " + colorFavorito + " es el" + " " + colorFavorito
  );
  if (colorFavorito === "rojo") {
    console.log("El color rojo no es de mis colores favoritos");
    break;
  }
}
