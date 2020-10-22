const burgerIcon = document.querySelector("#burger");
const burgerBars = document.querySelectorAll(".burgerBars")
let burgerMenu = document.createElement("div");
burgerMenu.id ="menu";
document.body.appendChild(burgerMenu);

burgerMenu.innerHTML += `
<a href="/tema2/index.html">HOME</<a>
<a href="">ABOUT</a>
<a href="/tema2/pages/name-gen.html">SKATER-NAME GENERATOR</a>
`
burgerIcon.addEventListener("click", revealMenu);