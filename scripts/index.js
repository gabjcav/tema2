const skateContainer = document.querySelector("#skate-container");
const cartCounter = document.querySelector("span")
const shopBag = document.querySelector("#shop-bag");
const shopcartOverlay = document.querySelector("#shopCart-overlay");

 const skates = [
    {
        name: "Reidell Solaris",
        id: "product-0",
        type: "Roller Derby",
        price: 3700,
        picUrl: "./images/solaris.png",
        descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish.",
      

    },
    {
        name: "Bont Quad Star",
        id: "product-1",
        type: "Roller Derby",
        price: 5400,
        picUrl: "./images/bontquadstar.png",
        descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through.",
    
    },
    {
        name: "Chaya Emerald Soft",
        id: "product-2",
        type: "Roller Derby",
        price: 1400,
        picUrl: "./images/chayaemeraldsoft.jpg",
        descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable.",
  
    },
    {
        name: "Moxi Lolly",
        id: "product-3",
        type: "Park Skate",
        price: 2700,
        picUrl: "./images/lolly.png",
        descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating.",

    },
    {
        name: "Chaya Karma ",
        id: "product-4",
        type: "Park Skate",
        price: 3500,
        picUrl: "./images/chaya.jpg", 
        descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun.",
   
    },
    {
        name: "Custom Van Skates",
        id: "product-5",
        type: "Park Skate",
        price: 5000,
        picUrl: "./images/vans.png",
        descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes.",
        
    },

];

let cart = [];

let skatesToString = JSON.stringify(skates);

localStorage.setItem("skates", skatesToString);

let storedSkates = JSON.parse(localStorage.getItem("skates"));


//the i inside ((skate, i)) creates an index number that I have attached to each button. It does this because it is a .forEach method. 

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

//Here I am targeting all the buttons that I have created above and referring to them in the variable "buttons"
let buttons = document.querySelectorAll("button");


//Here I am creating a function called addProductToCart. 
//I test each piece of the function along the way to make sure it is all working. 
//The word "(event)" after the function name I am not sure sure about...I think it is a parameter that is passing in...something. 
//the first variable is creating a buttonID that is which button is clicked on, which is picking up the id I gave the button in HTML.
//the second variable is having a value that is finding the element in my skates array equal to which button is pressed, so that they match.
//In the second variable, the word after .find (which is "el") can be any word. It is just referring to the element/item/thing in the array. Then the .id in el.id is finding the key name that I want to find. 

function addProductToCart(event) {
    let buttonID = event.target.id;
    //console.log(buttonID);
    //console.log(skates);
    let product = skates.find(el => el.id === buttonID);
    //console.log(product);
    //console.log("Name of product: " + product.name + " " + product.price);

    //Here, I ampushing the product into the cart array.
    cart.push(product);

    //Here, I am making the cartCounter span which is next to the shopping bag equal the length of the cart, which would show how many items have been selected.
    cartCounter.innerText = cart.length;

}



//Here I am using a .forEach method on the (node)list of buttons that I have created. 
//The word 'button' after .forEach() is just a parameter that refers to the first element/thing in the nodelist. I could have called it whatever I wanted.
//then I am using an arrow function to tell each element in the list of buttons to listen for an event, which is click, and perform the addProductToCart function.

buttons.forEach(button => {
    button.addEventListener("click", addProductToCart)

});


function displayCart() {
    shopcartOverlay.style.visibility = "visible";
    shopcartOverlay.style.display = "block";
    shopcartOverlay.style.width = "90vw";
    shopcartOverlay.style.height = "50rem";

    cart.forEach((item) => {
        //console.log(item.name)
        shopcartOverlay.innerHTML += `
        <p>${item.name}</p>`
    });
    
}

function hideCart() {
    shopcartOverlay.innerHTML = ""
    shopcartOverlay.style.visibility = "hidden";
}


shopBag.addEventListener("mouseover", displayCart)
document.body.addEventListener("click", hideCart)












































































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






//FOR MANY BUTTONS -----------------------

// 1)Make references to the buttons
//Example:  let btn1 =...., let btn2=....., let btn3-----
// 2) ADD EVENT LISTENERS FOR EACH
// example


// function myFunction(eventt) {
//     console.log(event.target.id);
// }

//YOU CAN DO .forEACH on nodelists!!! 

//buttons.forEach(function(el, index){

//});

//dont need parantheses if you have only 1 element.