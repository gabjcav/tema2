//EXPORT THIS


//HERE IS MY ADD TO CART FUNCTION ----------------------------------------
function addProductToCart(event) {

    let buttonID = event.target.id;
    let product = skates.find(el => el.id === buttonID);

    if(product.qty === 0) {
        product.qty++
        cart.push(product);

    } else {
        product.qty++

    }

    updateCart()
}

//HERE IS MY UPDATE CART FUNCTION--------------------------------------------
function updateCart() {

    let counter = 0;
    cart.forEach(item => {counter += item.qty});
    cartCounter.innerText = counter;
    let sum = 0
// <div class="deleteButton" data-name="${item.name}">X</div>
   cart.forEach((item) => {
       shopcartOverlay.innerHTML +=  `
       <div class="displayItem-container">
       <div class="name-box"> 
       <img src=${item.picUrl}><h5>${item.name}</h5><div class="deleteButton" data-name="${item.name}">X</div></div>
       <div class="price-box">$${item.price}.00</div>
       <div class="qty-box">${item.qty}</div>
       <div class="totalPrice-box">$${item.price * item.qty}.00</div>
       </div>
       `;

       sum += item.price * item.qty
   });

   shopcartOverlay.innerHTML += `
   <div id="display-subTot-container">
   <p>Subtotal is: $${sum}.00</p>
   </div>
   `
}

//HERE IS MY DISPLAY CART FUNCTION---------------------------------------------
function displayCart() {
    shopcartOverlay.style.visibility = "visible";
    shopcartOverlay.style.width = "90vw";
    shopcartOverlay.style.height = "auto";

    let displayLabel = document.createElement("div");

    shopcartOverlay.appendChild(displayLabel);
    displayLabel.id = "display-label-container";

    displayLabel.innerHTML += `
        <h5>PRODUCTS</h5>
        <h5>PRICE</h5>
        <h5>QUANTITY</h5>
        <h5>TOTAL</h5>
     `
     updateCart()

     let deleteButtons = shopcartOverlay.querySelectorAll(".deleteButton");
     deleteButtons.forEach(button => {button.addEventListener("click", removeFromCart)
     });
}


//HERE IS MY REMOVE FROM CART FUNCTION ----------------------------------------
function removeFromCart(event) {
    let buttonName = event.target.dataset.name
    for (let i = 0; i < cart.length; i+= 1) {
        if(cart[i].name === buttonName) {
            cart.splice(i, 1)
        }
    }

    shopcartOverlay.innerHTML = ""

    displayCart()
}

//HERE IS MY HIDECART FUNCTION--------------------------------------------------
function hideCart() {
    shopcartOverlay.innerHTML = ""
    shopcartOverlay.style.visibility = "hidden";
}