const skateContainer = document.querySelector("#skate-container");
//let cartCounter = document.querySelector(".nav-item span");
const shopBag = document.querySelector("#shop-bag");

 const skates = [
    {
        name: "Reidell Solaris",
        type: "Roller Derby",
        price: 3700,
        picUrl: "./images/solaris.png",
        descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish.",
        inCart: 0

    },
    {
        name: "Bont Quad Star",
        type: "Roller Derby",
        price: 5400,
        picUrl: "./images/bontquadstar.png",
        descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through.",
        inCart: 0
    },
    {
        name: "Chaya Emerald Soft",
        type: "Roller Derby",
        price: 1400,
        picUrl: "./images/chayaemeraldsoft.jpg",
        descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable.",
        inCart: 0
    },
    {
        name: "Moxi Lolly",
        type: "Park Skate",
        price: 2700,
        picUrl: "./images/lolly.png",
        descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating.",
        inCart: 0
    },
    {
        name: "Chaya Karma ",
        type: "Park Skate",
        price: 3500,
        picUrl: "./images/chaya.jpg", 
        descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun.",
        inCart: 0
    },
    {
        name: "Custom Van Skates",
        type: "Park Skate",
        price: 5000,
        picUrl: "./images/vans.png",
        descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes.",
        inCart: 0
    },

];

//let key = "";
//let value = "";

let skatesToString = JSON.stringify(skates);

localStorage.setItem("skates", skatesToString);

//localStorage.setItem(key, value);
//let localValue = localStorage.getItem(key);

let storedSkates = JSON.parse(localStorage.getItem("skates"));

storedSkates.forEach(skate => {
    skateContainer.innerHTML += `
    <article class="skate-box">
    <img src=${skate.picUrl}>
    <div class="descrip-box"><h4>${skate.name}</h4>
    <p class="type-box">Type: ${skate.type}</p>
    <p class="price-box">Price: ${skate.price}</p>
    </div>
    <button class="buy-btn">Select</button>
    </article>
    `
});

//let skateName = document.querySelectorAll("h4");
//let skateNameChoice = skateName.innerTEXT;


let buyBTN = document.querySelectorAll(".buy-btn");

//console.log(skateName[1]);

for (let i = 0; i < buyBTN.length; i++) {
    buyBTN[i].addEventListener("click", () => {
        //console.log("added to cart");
        cartNumbers(skates[i]);
        totalCost(skates[i])
    }) 
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers)  {
        document.querySelector(".nav-item span").textContent = productNumbers;
    }
}

function cartNumbers(skate) {
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".nav-item span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".nav-item span").textContent = 1;
    }
    
    setItems(skate);
}

function setItems(skate) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[skate.name] == undefined) {
            cartItems = {
                ...cartItems,
                [skate.name]: skate
            }
        }
        cartItems[skate.name].inCart += 1;
    } else {
        skate.inCart = 1;
        cartItems = {
            [skate.name]: skate
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product price is", product.price, "of", product.name);
    let cartCost = localStorage.getItem("totalCost");
    

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}

// function displayCart() {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(carItems);
//     console.log(carItems);
// };

onLoadCartNumbers();
//displayCart();


//console.log(shopBag);

// function displayCart() {
//     document.body.innerHTML += `<div id="cart-container">test test </div>`
//     let cartContainer = document.querySelector("#cart-container");
    //shopBag.style.backgroundColor = "blue";

//}

// function hideCart() {
//     let cartContainer = document.querySelector("#cart-container");
//     cartContainer.display = "none";
//     //shopBag.style.backgroundColor = "white";

// }


// shopBag.addEventListener("mouseenter", displayCart)
//shopBag.addEventListener("mouseout", hideCart)


















































































// let skates = [
//     {
//         name: "Reidell Solaris",
//         type: "Roller Derby",
//         price: 3700,
//         picUrl: "./images/solaris.png",
//         descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish."
//     },
//     {
//         name: "Bont Quad Star",
//         type: "Roller Derby",
//         price: 5400,
//         picUrl: "./images/bontquadstar.png",
//         descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through."
//     },
//     {
//         name: "Chaya Emerald Soft",
//         type: "Roller Derby",
//         price: 1400,
//         picUrl: "./images/chayaemeraldsoft.jpg",
//         descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable."
//     },
//     {
//         name: "Moxi Lolly",
//         type: "Park Skate",
//         price: 2700,
//         picUrl: "./images/lolly.png",
//         descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating."
//     },
//     {
//         name: "Chaya Karma ",
//         type: "Park Skate",
//         price: 3500,
//         picUrl: "./images/chaya.jpg", 
//         descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun."
//     },
//     {
//         name: "Custom Van Skates",
//         type: "Park Skate",
//         price: 5000,
//         picUrl: "./images/vans.png",
//         descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes."
//     },

// ];

//let skatesToString = JSON.stringify(skates);

//localStorage.setItem("skates", skatesToString);