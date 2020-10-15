//EXPORT THIS


//HERE IS MY ADD TO CART FUNCTION ----------------------------------------
function addProductToCart(event) {
    let buttonID = event.target.id;
    let product = skates.find(el => el.id === buttonID);

    cart.push(product);


    updateCart()
}

//HERE IS MY UPDATE CART FUNCTION--------------------------------------------
function updateCart() {
    cartCounter.innerText = cart.length;
    let displayCart_Container = document.createElement("div");
    let sum = 0


   shopcartOverlay.appendChild(displayCart_Container)

   cart.forEach((item) => {
       displayCart_Container.innerHTML +=  `
       <div class="displayCart-container" >
       <img src=${item.picUrl}>
       <div class="deleteButton" data-name="${item.name}">X</div>
       <h5>${item.name}</h5>
       <h5 id="price-box">$${item.price}.00</h5>
       `;
       sum += item.price
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
            console.log(cart);
        }
    }

    shopcartOverlay.innerHTML = ""

    displayCart()

    shopcartOverlay.innerHTML += `
    <div id="display-subTot-container">
    <p>Subtotal is: $${sum}.00</p>
    </div>
    `
}

//HERE IS MY HIDECART FUNCTION--------------------------------------------------
function hideCart() {
    shopcartOverlay.innerHTML = ""
    shopcartOverlay.style.visibility = "hidden";
}