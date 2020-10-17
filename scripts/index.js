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
    <button data-name="${skate.name}" class="buy-btn">Select</button>
    </article>
    `
});

let buttons = document.querySelectorAll("button");

buttons.forEach(button => { button.addEventListener("click", addProductToCart) } );

shopBag.addEventListener("click", displayCart)
shopBag.addEventListener("mouseover", hideCart);





















//LOOK INTO EVENT BUBBLING

