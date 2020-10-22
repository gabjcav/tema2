const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay")
updateCartCounter();
shopBag.addEventListener("click", displayCart);
shopBag.addEventListener("mouseover", hideCart);