
 const skates = [
    {
        name: "Reidell Solaris",
        type: "Roller Derby",
        price: 300,
        picUrl: "./images/solaris.png",
        qty: 0,
        descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish."
      

    },
    {
        name: "Bont Quad Star",
        type: "Roller Derby",
        price: 600,
        picUrl: "./images/bontquadstar.png",
        qty: 0,
        descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through."
    
    },
    {
        name: "Chaya Emerald Soft",
        type: "Roller Derby",
        price: 150,
        picUrl: "./images/chayaemeraldsoft.jpg",
        qty: 0,
        descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable."
  
    },
    {
        name: "Moxi Lolly",
        type: "Park Skate",
        price: 300,
        picUrl: "./images/lolly.png",
        qty: 0,
        descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating."

    },
    {
        name: "Chaya Karma ",
        type: "Park Skate",
        price: 380,
        picUrl: "./images/chaya.jpg", 
        qty: 0,
        descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun."
   
    },
    {
        name: "Custom Van Skates",
        type: "Park Skate",
        price: 540,
        picUrl: "./images/vans.png",
        qty: 0,
        descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes."
        
    },

];


const gearItems = [
    {
        name: "Lifer Helmet Matte",
        type: "S1",
        Price: 60,
        picUrl: "",
        qty: 0
    },
    {
        name: "Lifer Helmet Gloss Glitter",
        type: "S1",
        Price: 80,
        picUrl: "",
        qty: 0
    },
    {
        name: "Lifer Helmet Tan Leopard Matte",
        type: "S1",
        Price: 70,
        picUrl: "",
        qty: 0
    },
    {
        name: "Lifer Helmet with Visor",
        type: "S1",
        Price: 130,
        picUrl: "",
        qty: 0
    },
    {
        name: "The Dual Certified Sweatsaver Holo",
        type: "Triple 8",
        Price: 60,
        picUrl: "",
        qty: 0,
    },
    {
        name: "The Dual Certified Sweatsaver Rainbow",
        type: "Triple 8",
        Price: 60,
        picUrl: "",
        qty: 0
    }
]
let cart = [];

let skatesToString = JSON.stringify(skates);


localStorage.setItem("skates", skatesToString);

let storedSkates = JSON.parse(localStorage.getItem("skates"));
