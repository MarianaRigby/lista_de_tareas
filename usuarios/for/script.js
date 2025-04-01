// Imprimir los números pares del 1 al 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Sumar los elementos de un array
const numeros = [5, 8, 12, 20, 15];
// imprimir en consola solo los numeros impares
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let suma = 0;
numeros.forEach((num) => {
  suma += num;
});
console.log("Suma total:", suma);
// Encontrar el número más grande
const valores = [34, 67, 12, 89, 45];
let max = valores[0];

for (const valor of valores) {
  if (valor > max) {
    max = valor;
  }
}
console.log("Número más grande:", max);
// Intercambiar valores de dos variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log("a:", a, "b:", b);
//Validar si un número es positivo, negativo o cero
// const numero = parseFloat(prompt("Ingresa un número:")); // parseFloat: lo covierte a un numero con decimales
// console.log(numero);
// if (numero > 0) {
//   console.log("El número es positivo");
// } else if (numero < 0) {
//   console.log("El número es negativo");
// } else {
//   console.log("El número es cero");
// }
// Validar si una contraseña es segura
// const contraseña = prompt("Ingresa una contraseña:");
// const tieneNumero = /\d/.test(contraseña); // usando expresion regular \d
// const tieneMayuscula = /[A-Z]/.test(contraseña); // usando expresion regulat [A-Z]
// if (contraseña.length >= 8 && tieneNumero && tieneMayuscula) {
//   console.log("Contraseña válida");
// } else {
//   console.log("Contraseña no válida");
// }
