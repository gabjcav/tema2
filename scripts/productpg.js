let windowID = window.location.search;
let productID = windowID.substring(6,12)
let product = skates.find(el => el.id === productID);
let main = document.querySelector("main");

//document.body.innerHTML = product.name;

let imageContainer = document.createElement("div");
main.appendChild(imageContainer)
imageContainer.innerHTML = `
<img src=".${product.picUrl}">

`



//imageContainer.src = "." + product.picUrl;
