const skateContainer = document.querySelector("#skate-container");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");


 const skates = [
    {
        name: "Reidell Solaris",
        id: "product-0",
        type: "Roller Derby",
        price: 300,
        picUrl: "./images/solaris.png",
        descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish.",
      

    },
    {
        name: "Bont Quad Star",
        id: "product-1",
        type: "Roller Derby",
        price: 600,
        picUrl: "./images/bontquadstar.png",
        descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through.",
    
    },
    {
        name: "Chaya Emerald Soft",
        id: "product-2",
        type: "Roller Derby",
        price: 150,
        picUrl: "./images/chayaemeraldsoft.jpg",
        descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable.",
  
    },
    {
        name: "Moxi Lolly",
        id: "product-3",
        type: "Park Skate",
        price: 300,
        picUrl: "./images/lolly.png",
        descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating.",

    },
    {
        name: "Chaya Karma ",
        id: "product-4",
        type: "Park Skate",
        price: 380,
        picUrl: "./images/chaya.jpg", 
        descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun.",
   
    },
    {
        name: "Custom Van Skates",
        id: "product-5",
        type: "Park Skate",
        price: 540,
        picUrl: "./images/vans.png",
        descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes.",
        
    },

];

let cart = [];

let skatesToString = JSON.stringify(skates);

localStorage.setItem("skates", skatesToString);

let storedSkates = JSON.parse(localStorage.getItem("skates"));

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


function addProductToCart(event) {
    let buttonID = event.target.id;
    let product = skates.find(el => el.id === buttonID);

    cart.push(product);


    updateCart()
}

buttons.forEach(button => { button.addEventListener("click", addProductToCart) } );


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

function hideCart() {
    shopcartOverlay.innerHTML = ""
    shopcartOverlay.style.visibility = "hidden";
}


shopBag.addEventListener("click", displayCart)
shopBag.addEventListener("mouseover", hideCart)

//LOOK INTO EVENT BUBBLING

