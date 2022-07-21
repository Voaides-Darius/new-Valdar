const menuHamburger = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const header = document.querySelector(".header-container");

menuHamburger.addEventListener("click", function(){
  if (navbar.style.display === "block")
  {
    navbar.style.animationName = "right-to-left";
    navbar.style.display = "none";
    console.log("Meniu dezactivat");
  }else{
    navbar.style.display = "block";
    console.log("Meniu activat");
    navbar.style.animationName = "left-to-right";
  }
  
});