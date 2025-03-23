const user = {
  name: "Mariana",
  lastName: "Rigby Castillo",
  edad: 19,
  monthOfBirth: 1,
  favoriteColors: ["green", "purple", "blue"],
};

// Ejercicio con Condicionales (if-else) -----------------
// Validar e imprimir si el usuario:
// - es menor de edad
// - mayor de edad o
// - adulto mayor
if (user.edad < 18) {
  console.log("Eres menor de edad");
} else if ((user.edad >= 18) & (user.edad < 60)) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres un adulto mayor");
}

// Ejercicio con (switch-case)
// Validar e imprime el nombre del mes de nacimiento del usuario: -----------------
switch (user.monthOfBirth) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("No se encontró el dato proporcionado");
}

//Ejercicio con Bucle (for) -----------------
// Muestra en la consola la tabla de multiplicar de un numero dado
//Numero 1
let contenedorDeTabla1 = document.getElementById("contenedorDeTabla1");
let htmlDeTabla1 = "";
const numero1 = 1;

for (let i = 1; i <= 10; i++) {
  const resultado = numero1 * i;
  htmlDeTabla1 += `<div class="font-bold text-xl">${numero1} x  ${i} = ${resultado} </div>`;
}
console.log(htmlDeTabla1);
contenedorDeTabla1.innerHTML = htmlDeTabla1;
//Numero 2
let contenedorDeTabla2 = document.getElementById("contenedorDeTabla2");
let htmlDeTabla2 = "";
const numero2 = 2;
for (let iterar = 1; iterar <= 10; iterar++) {
  const resultado = numero2 * iterar;
  htmlDeTabla2 += `<div class="font-bold text-xl">${numero2} x ${iterar} = ${resultado} </div>`;
}
console.log(htmlDeTabla2);
contenedorDeTabla2.innerHTML = htmlDeTabla2;
//Numero 3
let contenedorDeTabla3 = document.getElementById("contenedorDeTabla3");
let htmlDeTabla3 = "";
const numero3 = 3;
for (iteracion = 1; iteracion <= 10; iteracion++) {
  const resultado = numero3 * iteracion;
  htmlDeTabla3 += `<div class="font-bold text-xl">${numero3} x ${iteracion} = ${resultado}</div>`;
}
console.log(htmlDeTabla3);
contenedorDeTabla3.innerHTML = htmlDeTabla3;
//Numero 4
let contenedorDeTabla4 = document.getElementById("contenedorDeTabla4");
let htmlDeTabla4 = "";
const numero4 = 4;
for (indice = 1; indice <= 10; indice++) {
  const resultado = numero4 * indice;
  htmlDeTabla4 += `<div class="font-bold text-xl"> ${numero4} x ${indice} = ${resultado}</div>`;
}
contenedorDeTabla4.innerHTML = htmlDeTabla4;
//Numero 5
let contenedorDeTabla5 = document.getElementById("contenedorDeTabla5");
let htmlDeTabla5 = "";
const numero5 = 5;
for (contador = 1; contador <= 10; contador++) {
  const resultado = numero5 * contador;
  htmlDeTabla5 += `<div class="font-bold text-xl">${numero5} x ${contador} = ${resultado}</div>`;
}
contenedorDeTabla5.innerHTML = htmlDeTabla5;
//Numero 6
let contenedorDeTabla6 = document.getElementById("contenedorDeTabla6");
let htmlDeTabla6 = "";
const numero6 = 6;
for (ciclo = 1; ciclo <= 10; ciclo++) {
  const resultado = numero6 * ciclo;
  htmlDeTabla6 += `<div class="font-bold text-xl"> ${numero6} x ${ciclo} = ${resultado}</div>`;
}
contenedorDeTabla6.innerHTML = htmlDeTabla6;
//Numero 7
let contenedorDeTabla7 = document.getElementById("contenedorDeTabla7");
let htmlDeTabla7 = "";
const numero7 = 7;
for (recorrer = 1; recorrer <= 10; recorrer++) {
  const resultado = numero7 * recorrer;
  htmlDeTabla7 += `<div class="font-bold text-xl"> ${numero7} x ${recorrer} = ${resultado}</div>`;
}
contenedorDeTabla7.innerHTML = htmlDeTabla7;
//Numero 8
let contenedorDeTabla8 = document.getElementById("contenedorDeTabla8");
let htmlDeTabla8 = "";
const numero8 = 8;
for (j = 1; j <= 10; j++) {
  const resultado = numero8 * j;
  htmlDeTabla8 += `<div class="font-bold text-xl"> ${numero8} x ${j} = ${resultado}</div>`;
}
contenedorDeTabla8.innerHTML = htmlDeTabla8;
//Numero 9
let contenedorDeTabla9 = document.getElementById("contenedorDeTabla9");
let htmlDeTabla9 = "";
const numero9 = 9;
for (k = 1; k <= 10; k++) {
  const resultado = numero9 * k;
  htmlDeTabla9 += `<div class="font-bold text-xl"> ${numero9} x ${k} = ${resultado}</div>`;
}
contenedorDeTabla9.innerHTML = htmlDeTabla9;
//Numero 10
let contenedorDeTabla10 = document.getElementById("contenedorDeTabla10");
let htmlDeTabla10 = "";
const numero10 = 10;
for (l = 1; l <= 10; l++) {
  const resultado = numero10 * l;
  htmlDeTabla10 += `<div class="font-bold text-xl"> ${numero10} x ${l} = ${resultado}</div>`;
}
contenedorDeTabla10.innerHTML = htmlDeTabla10;
