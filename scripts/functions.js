//HERE IS MY ADD TO CART FUNCTION ----------------------------------------

function addProductToCart(event) {
    hideCart();
    let buttonName = event.target.dataset.name;
    let item = skates.find(el => el.name === buttonName) 

    if(item.qty === 0) {
        item.qty++
        cart.push(item);

    } else {
        item.qty++

    }
    updateCart()
}

//HERE IS MY UPDATE CART FUNCTION--------------------------------------------

function updateCart() {
    let counter = 0;
    cart.forEach(item => {counter += item.qty});
    cartCounter.innerText = counter;
    let sum = 0

   cart.forEach((item) => {
       shopcartOverlay.innerHTML +=  `
       <div class="displayItem-container">
       <div class="name-box">
       <h5>${item.name}</h5> 
       <img class="cart-prdt-img" src=${item.picUrl}>
       <div class="deleteButton" data-name="${item.name}">X</div></div>
       <div class="price-box">$${item.price}.00</div>
       <div class="qty-box"><i class="fas fa-angle-down" data-name="${item.name}"></i>${item.qty}<i class="fas fa-angle-up" data-name="${item.name}"></i></div>
       <div class="totalPrice-box">$${item.price * item.qty}.00</div>
       </div>
       `;

       sum += item.price * item.qty
   });

   shopcartOverlay.innerHTML += `
   <div id="display-subTot-container">
   <p id="subTot-text">Sub total is: $${sum}.00</p>
   </div>
   `
}

//HERE IS MY DISPLAY CART FUNCTION---------------------------------------------

function displayCart() {
    shopcartOverlay.style.right = 0;

    shopBag.src = "/tema2/images/xicon.png";
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
     deleteButtons.forEach(button => {button.addEventListener("click", removeFromCart)});

     let upArrow = document.querySelectorAll(".fa-angle-up")
     let downArrow = document.querySelectorAll(".fa-angle-down");
     upArrow.forEach(button =>{button.addEventListener("click", addMore)});
     downArrow.forEach(button => {button.addEventListener("click", reduce)});

     
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
    shopcartOverlay.style.right = "-100vw";
    shopBag.src="/tema2/images/shopbag.svg";
}

//HERE IS MY ADDMORE ARROW FUNCTION -------------------------------

function addMore(event) {
    let upArrowName = event.target.dataset.name;
    let product = cart.find(el => el.name === upArrowName);
    product.qty++;
    
    shopcartOverlay.innerHTML = ""
    displayCart();
}
  
//HERE IS MY REDUCE ARROW FUNCTION --------------------------------
function reduce(event) {
    let downArrowName = event.target.dataset.name;
    let product = cart.find(el => el.name === downArrowName);
    product.qty--;

    shopcartOverlay.innerHTML = ""
    displayCart();
}

//HERE IS MY SKATE ANIMATION FUNCTION

function onScroll() {
let yPos = window.pageYOffset;
    if(yPos > 125) {
        leftSkate.style.transform = "translate(-400px)";
        rightSkate.style.transform = "translate(400px)";
    } else {
        leftSkate.style.transform = "translate(0)";
        rightSkate.style.transform = "translate(0)";
    }
}

//HERE IS MY BURGERMENU FUNCTION
function revealMenu() {
    if (burgerMenu.style.right === "100vw") {
        burgerBars[0].style.transform = "translateY(10px) rotate(45deg)"
        burgerBars[1].style.transform = "translateX(727px)"
        burgerBars[2].style.transform = "translateY(-10px) rotate(-46deg)"
        burgerMenu.style.right = 0;
    } else {
        burgerBars.forEach(bar => bar.style.transform = "");
        burgerMenu.style.right = "100vw";
    }
   
};



