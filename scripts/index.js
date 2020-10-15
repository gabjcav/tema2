const skateContainer = document.querySelector("#skate-container");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");


storedSkates.forEach((skate, i)=> {
    skateContainer.innerHTML += `
    <article class="skate-box">
    <img src=${skate.picUrl}>
    <div class="descrip-box"><h4>${skate.name}</h4>
    <p class="type-box">Type: ${skate.type}</p>
    <p class="price-box">Price: ${skate.price}</p>
    </div>
    <button id="product-${i}" class="buy-btn">Select</button>
    </article>
    `
});

let buttons = document.querySelectorAll("button");

buttons.forEach(button => { button.addEventListener("click", addProductToCart) } );

shopBag.addEventListener("click", displayCart)
shopBag.addEventListener("mouseover", hideCart)

// TO MAKE A QUANTITY COUNTER/ADJUSTER:
// ADD QUANTITY AS A PROPERTY TO EACH PRODUCT IN THE SKATES ARRAY AND START IT AT 0
// THEN MAKE THE UPDATE CART THING CHECK TO SEE IF THERE IS ONE PRE-EXISTING? AND THEN ADD OR SOMETHING.....




















//LOOK INTO EVENT BUBBLING

