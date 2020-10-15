
//STUFF BELOW I GOT OFF OF YOUTUBE!-------------------------------------------------------------------------------------------------

//let skateName = document.querySelectorAll("h4");
//let skateNameChoice = skateName.innerTEXT;
let cartCounter = document.querySelector(".nav-item span");
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");


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
    

    //console.log("My cartCost is", cartCost);
    //console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}
onLoadCartNumbers();

function displayCart () {
    shopcartOverlay.style.visibility = "visible";
    shopcartOverlay.style.display = "block";
    shopcartOverlay.style.width = "90vw";
    shopcartOverlay.style.height = "50rem";

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let itemNames = Object.keys(cartItems);
    let itemPrice = 
    

    console.log(itemNames);
    console.log(cartItems);

    for(let i = 0; i <= itemNames.length; i++ ) {
        shopcartOverlay.innerHTML = ``
        shopcartOverlay.innerHTML += `
         <p>${itemNames}</p>
         `
    }




    // for (let itemNames of Object.keys((cartItems))) {
    //     shopcartOverlay.innerHTML += `
    //     <p>${itemNames}</p>
    //     `
    //     console.log(itemNames)
    // }

    // let cartItemNames = Object.keys(cartItems)[0];
    // console.log(cartItems);
    // console.log(cartItemNames);
    
}

function hideCart() {
    shopcartOverlay.style.visibility = "hidden";
}

 document.body.addEventListener("click", hideCart);
 shopBag.addEventListener("mouseenter", displayCart)
 
 //let skateName = document.querySelectorAll("h4");
//let skateNameChoice = skateName.innerTEXT;




//TIPS FROM OTHER STUDENTS
     //define the total sum (that is adding the prices of every item in the cart.) outside of the .forEach loop 
     //inside the .forEach, add totalSum += item.price.
     //then just add the price totals. 






















