const skateContainer = document.querySelector("#skate-container");

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

const cart = [];

let skatesToString = JSON.stringify(skates);

localStorage.setItem("skates", skatesToString);

let storedSkates = JSON.parse(localStorage.getItem("skates"));


//the i inside ((skate, i)) creates an index number that I have attached to each button.

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









// const BTN1 = document.querySelector("#btn1") 
// const BTN2 = document.querySelector("#btn2") 
// const BTN3 = document.querySelector("#btn3") 
// const BTN4 = document.querySelector("#btn4") 
// const BTN5 = document.querySelector("#btn5") 

//  function selectToCart() {
     
//  }


// BTN0.addEventListener("click", selectToCart);




// let BTN3 = document.querySelector("#btn3");

// let BUTTONS = document.querySelectorAll(".buy-btn");
// console.log(BTN3);

// console.log(BUTTONS);













































































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