let windowID = window.location.search;
let productID = windowID.substring(6,12)
let product = skates.find(el => el.id === productID) || gearItems.find(el => el.id === productID);

const main = document.querySelector("main");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay")

updateCartCounter();
const imageContainer = document.createElement("div");
const infoContainer = document.createElement("div");
imageContainer.id = "imageContainer";
infoContainer.id = "infoContainer";

main.appendChild(imageContainer);
main.appendChild(infoContainer);

imageContainer.innerHTML = `
<h1>${product.name}</h1>
<img id="product-img" src="${product.picUrl}">
`

infoContainer.innerHTML = `
<h2>$${product.price}.00</h2>
<hr>
<p id="descrip-text">${product.descrip}</p>
<button class="buy-btn" data-name="${product.name}">Add to Cart +</button>
`
let button = document.querySelector(".buy-btn");

button.addEventListener("click", addProductToCart);
shopBag.addEventListener("click", displayCart);
shopBag.addEventListener("mouseover", hideCart);
