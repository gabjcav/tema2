const skateContainer = document.querySelector("#skate-container");
const gearContainer = document.querySelector("#gear-container");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");
const navBar = document.querySelector("#nav-bar");
const leftSkate = document.querySelector("#leftskate");
const rightSkate = document.querySelector("#rightskate");


updateCartCounter();

storedSkates.forEach((skate,) => {
    skateContainer.innerHTML += `
    <article class="skate-box">
    <img src=${skate.picUrl} alt="${skate.alt}">
    <div class="descrip-box"><h4>${skate.name}</h4>
    <p class="type-box">Type: ${skate.type}</p>
    <p class="price-box">Price: ${skate.price}</p>
    </div>
    <div data-name="${skate.name}"class="select-btn"><a href="pages/productpage.html?name=${skate.id}">Select</a></div>
    </article>
    `
});

storedGear.forEach((item) => {
    gearContainer.innerHTML += `
    <article class="gear-box">
    <img src=${item.picUrl} alt="${item.alt}">
    <div class="descrip-box" id="gear-descrip-box"><h4>${item.name}</h4>
    <p class="type-box">Type: ${item.type}</p>
    <p class="price-box">Price: ${item.price}</p>
    </div>
    <div data-name="${item.name}"class="select-btn"><a href="pages/productpage.html?name=${item.id}">Select</a></div>
    </article>
    `
});

shopBag.addEventListener("click", displayCart);
shopBag.addEventListener("mouseover", hideCart);

window.addEventListener("scroll", onScroll);



