/// 1. Cambiar el color del carrito y el color del botón addToCart cuando un color es seleccionado
/// - Seleccionando elementos
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedBack = document.querySelector(".feedback");
// 2. Modificando elementos
// - Agregando detectores de eventos
// - COLOR ROJO
redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  /*imageCard.style.backgroundImage = "";*/
});
// - COLOR GRIS
grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  /*imageCard.style.backgroundImage = "";*/
});
// - COLOR NEGRO
blackColor.addEventListener("clik", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  /*imageCard.style.backgroundImage = "";*/
});
// 3. Implementando el evento clic en el botón
// - Botón del Carrito
const cart = () => {
  cartButton.style.display = "none";
  feedBack.style.display = "block";
};
cartButton.addEventListener("click", cart);
// - Botón de retroalimentación
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
