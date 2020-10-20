const skateContainer = document.querySelector("#skate-container");
const gearContainer = document.querySelector("#gear-container");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");
const navBar = document.querySelector("#nav-bar");
const leftSkate = document.querySelector("#leftskate");
const rightSkate = document.querySelector("#rightskate");
const burgerIcon = document.querySelector("#burger");
const burgerBars = document.querySelectorAll(".burgerBars")
let burgerMenu = document.createElement("div");
burgerMenu.id ="menu";
document.body.appendChild(burgerMenu);

burgerMenu.innerHTML += `
<a href="">HOME</<a>
<a href="">ABOUT</a>
<a href="">SKATER-NAME GENERATOR</a>
`


storedSkates.forEach((skate,) => {
    skateContainer.innerHTML += `
    <article class="skate-box">
    <img src=${skate.picUrl}>
    <div class="descrip-box"><h4>${skate.name}</h4>
    <p class="type-box">Type: ${skate.type}</p>
    <p class="price-box">Price: ${skate.price}</p>
    </div>
    <div data-name="${skate.name}" class="buy-btn"><a href="pages/productpage.html?name=${skate.id}">Select</a></div>
    </article>
    `
});

storedGear.forEach((item) => {
    gearContainer.innerHTML += `
    <article class="gear-box">
    <img src=${item.picUrl}>
    <div class="descrip-box" id="gear-descrip-box"><h4>${item.name}</h4>
    <p class="type-box">Type: ${item.type}</p>
    <p class="price-box">Price: ${item.price}</p>
    </div>
    <button data-name="${item.name}" class="buy-btn">Select</button>
    </article>
    `
});

//let buttons = document.querySelectorAll("button");

//buttons.forEach(button => { button.addEventListener("click", addProductToCart) } );

shopBag.addEventListener("click", displayCart);
shopBag.addEventListener("mouseover", hideCart);

window.addEventListener("scroll", onScroll);

burgerIcon.addEventListener("click", revealMenu);
//burgerIcon.addEventListener("mouseover", hideMenu);
















//LOOK INTO EVENT BUBBLING
//OLD SELECT BUTTON BELOW: 

{/* <button data-name="${skate.name}" class="buy-btn"><a href="pages/productpage.html?name=${skate.name}">Select</a></button> */}