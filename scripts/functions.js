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

    let displayCart_Container = document.createElement("div");
    let sum = 0


   shopcartOverlay.appendChild(displayCart_Container)

   cart.forEach((item) => {
       displayCart_Container.innerHTML +=  `
       <div class="displayCart-container" >
       <img src=${item.picUrl}>
       <div class="deleteButton" data-name="${item.name}">X</div>
       <h5>${item.name}</h5>
       <h5 class="price-box">$${item.price}.00</h5>
       <h5 class="qty-box">${item.qty}</h5>
       <h5 class="totalPrice-box">${item.price * item.qty}</h5>
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