const productos = [
  {
    nombre: "Pantalon",
    precio: 840,
    imagen:
      "https://cdn1.coppel.com/images/catalog/mkp/6528/3000/65282243-3.jpg",
  },
  {
    nombre: "Sudadera",
    precio: 420,
    imagen:
      "https://i.ebayimg.com/thumbs/images/g/YCIAAOSwTF1mlnQq/s-l1200.jpg",
  },
  {
    nombre: "Tenis",
    precio: 2200,
    imagen:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0b005ca-3372-411f-91df-5bd42c3dc65a/W+NIKE+DUNK+LOW.png",
  },
];
const contenedor = document.getElementById("contenedorPrincipal");
function mostrarProductos() {
  productos.forEach((productos, index) => {
    const productoDiv = document.createElement("div");
    productoDiv.id = `producto-${index}`;
    productoDiv.className = "bg-white p-4 rounded-2xl shadow-lg";
    productoDiv.innerHTML = `
        <img src="${productos.imagen}" alt="${productos.nombre}" class="w-full  object-cover rounded-lg mb-4">
        <h2 class="text-xl font-semibold"> ${productos.nombre}</h2> 
        <p class="text-gray-600">$${productos.precio}</p>
        `;
    contenedor.appendChild(productoDiv);
  });
}
mostrarProductos();
