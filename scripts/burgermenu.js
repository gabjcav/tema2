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
burgerIcon.addEventListener("click", revealMenu);