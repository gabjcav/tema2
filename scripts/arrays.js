
 const skates = [
    {
        name: "Reidell Solaris",
        id: "skate1",
        type: "Roller Derby",
        price: 300,
        picUrl: "/tema2/images/solaris.png",
        qty: 0,
        descrip: "The Solaris boot from Reidell is made with cutting edge technology and design that re-defines performance and comfort standards for quad skating boots. They are comfortable, lightweight and stylish."
      

    },
    {
        name: "Bont Quad Star",
        id: "skate2",
        type: "Roller Derby",
        price: 600,
        picUrl: "/tema2/images/bontquadstar.png",
        qty: 0,
        descrip: "Brought to you from Bont, this boot featuers a a thermoplastic heel, replaceable rubber bumper toe protection, an adjustable velcro strap and rear heel loop to loop laces through."
    
    },
    {
        name: "Chaya Emerald Soft",
        id: "skate3",
        type: "Roller Derby",
        price: 150,
        picUrl: "/tema2/images/chayaemeraldsoft.jpg",
        qty: 0,
        descrip: "The perfect beginner boot that provides ventilation and extra padding for maximum comfort. It is also low cut for optimum maneurvability, and is highly durable."
  
    },
    {
        name: "Moxi Lolly",
        id: "skate4",
        type: "Park Skate",
        price: 300,
        picUrl: "/tema2/images/lolly.png",
        qty: 0,
        descrip: "Suede high top roller skates that can be used for indoor or outdoor skating. Moxi Lolly Skates are a mid-range lifestyle skate, designed for recreation and street skating."

    },
    {
        name: "Chaya Karma ",
        id: "skate5",
        type: "Park Skate",
        price: 380,
        picUrl: "/tema2/images/chaya.jpg", 
        qty: 0,
        descrip: "Perfect skatepark-ready skates that include Grind Blocks. The Grind Block is asymmetrical that opens up the skatepark to whole new array of tricks; further enhanced by the fact that you can choose to switch sides for added tricks and fun."
   
    },
    {
        name: "Custom Van Skates",
        id: "skate6",
        type: "Park Skate",
        price: 540,
        picUrl: "/tema2/images/vans.png",
        qty: 0,
        descrip: "Bring your shoes and let us max out your vans to make the pefect street-park-jam-whatever you wish skate. The price includes plates, wheels, toe-stops, Chicks in Bowls side blocks, and installation. It does not include the van shoes."
        
    },

];


const gearItems = [
    {
        name: "Lifer Helmet Matte",
        id: "item01",
        type: "S1",
        price: 60,
        picUrl: "/tema2/images/s1matte.png",
        qty: 0,
        descrip: "The S1 Lifer Helmet is one of the best fitting and safest helmets for Skateboarding, Longboarding, BMX and Roller Derby. The Lifer Helmet uses a specially formulated EPS Fusion Foam which allows it to protect your head from multiple low force impacts as well as high impacts. The Lifer Helmet is a Certified 'multi-impact' helmet and is up to 5x more protective than the soft foam non-certified helmets."
        
    },
    {
        name: "Lifer Helmet Gloss Glitter",
        id: "item02",
        type: "S1",
        price: 80,
        picUrl: "/tema2/images/s1glitter.png",
        qty: 0,
        descrip: "The S1 Lifer Helmet is one of the best fitting and safest helmets for Skateboarding, Longboarding, BMX and Roller Derby. The Lifer Helmet uses a specially formulated EPS Fusion Foam which allows it to protect your head from multiple low force impacts as well as high impacts. The Lifer Helmet is a Certified 'multi-impact' helmet and is up to 5x more protective than the soft foam non-certified helmets."
    },

    {
        name: "Lifer Helmet Tan Leopard Matte",
        id: "item03",
        type: "S1",
        price: 70,
        picUrl: "/tema2/images/s1leopard.png",
        qty: 0,
        descrip: "The S1 Lifer Helmet is one of the best fitting and safest helmets for Skateboarding, Longboarding, BMX and Roller Derby. The Lifer Helmet uses a specially formulated EPS Fusion Foam which allows it to protect your head from multiple low force impacts as well as high impacts. The Lifer Helmet is a Certified 'multi-impact' helmet and is up to 5x more protective than the soft foam non-certified helmets."
    },
    {
        name: "Lifer Helmet with Visor",
        id: "item04",
        type: "S1",
        price: 130,
        picUrl: "/tema2/images/s1visor.png",
        qty: 0,
        descrip: "This is S1 Lifer Helmet W/ Visor Gen 2. This is the second edition of this product and has been completely redesigned from the original version. Each helmet will come with a carrying bag, mounting hardware, a micro fiber cloth and three top pads in varying thickness's to effect how deep or shallow you want the helmet to sit on your head."
    },
    {
        name: "The Dual Certified Sweatsaver Holo",
        id: "item05",
        type: "Triple 8",
        price: 60,
        picUrl:"/tema2/images/triple8holo.png",
        qty: 0,
        descrip: "The Holy Grail of Comfort and Protection. The FIRST and ONLY helmet to fully integrate the best of high impact absorbing EPS Foam with thick dual density soft foam and plush Sweatsaver fabric, delivering the ultimate in comfort with dual certified protection."
    },
    {
        name: "The Dual Certified Sweatsaver Rainbow",
        id: "item06",
        type: "Triple 8",
        price: 60,
        picUrl: "/tema2/images/triple8rainbow.png",
        qty: 0,
        descrip: "The Holy Grail of Comfort and Protection. The FIRST and ONLY helmet to fully integrate the best of high impact absorbing EPS Foam with thick dual density soft foam and plush Sweatsaver fabric, delivering the ultimate in comfort with dual certified protection."
    },
];


let skatesToString = JSON.stringify(skates);
let gearItemsToString = JSON.stringify(gearItems);


localStorage.setItem("skates", skatesToString);
localStorage.setItem("gearItems", gearItemsToString);


let storedSkates = JSON.parse(localStorage.getItem("skates"));
let storedGear = JSON.parse(localStorage.getItem("gearItems"));

