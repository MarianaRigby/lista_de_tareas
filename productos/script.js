const productos = [
  {
    name: "Florero",
    imagenURL:
      "https://bouquetdepapel.mx/cdn/shop/products/Funda_Decollte_800x800_c16b2cf3-5dfa-4f5f-980f-de5610a58749_800x800.jpg?v=1708525433",
    price: 420,
    stock: 4,
  },
  {
    name: "Mesa",
    imagenURL:
      "https://m.media-amazon.com/images/I/61QNJ29Y4fL._AC_UF894,1000_QL80_.jpg",
    price: 2200,
    stock: 2,
  },
  {
    name: "Sillon",
    imagenURL:
      "https://saadamuebles.com/wp-content/uploads/2023/05/sillon-Cancun.jpg",
    price: 2000,
    stock: 10,
  },
];
//for (inicializacion; condicion; actualizacion) {}
for (let i = 0; i < productos.length; i++) {
  console.log(i);
  console.log(productos[i].name);
  if (productos[i].stock == 0) {
    console.log("El producto " + productos[i].name + " ya no tiene stock");
  }
}
//array.forEach((elemento, índice, array) => {}
productos.forEach((producto, indice) => {
  console.log(indice + " " + producto.name);
  if (productos[indice].stock == 0) {
    console.log(`El producto ${productos[indice].name} ya no tiene stock`);
  }
});
//for (const variable of iterable) {}
for (const producto of productos) {
  console.log(producto.name);
  if (producto.stock == 0) {
    console.log("El producto " + producto.name + " ya no tiene stock");
  }
}
const contenedorPrincipal = document.getElementById("contenedor-principal");
let productosHTMl = "";
const porcentajeDeDescuento = 10;
productos.forEach((producto) => {
  if (producto.stock > 0) {
    let operacionParaPrecioFinal =
      (producto.price * porcentajeDeDescuento) / 100;
    let precioFinal = producto.price - operacionParaPrecioFinal;
    productosHTMl += `<div><img class="h-[300px] w-full rounded-lg mb-2" src="${producto.imagenURL}"/>
  <div class="flex place-content-between">
  <p class="font-sans text-xl">${producto.name}</p>
  <p class="font-sans text-base"><s>$${producto.price}</s></p>
  </div>
 <div class="flex place-content-between">
  <p class="font-sans text-xl"><span class="text-gray-400 font-light">Stock:</span> ${producto.stock}</p>
  <p class="font-sans text-xl leading-3">$${precioFinal}</p>
   </div>
   </div>
 `;
  }
});
contenedorPrincipal.innerHTML += productosHTMl;
