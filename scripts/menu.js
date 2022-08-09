const hamburgerBtn = document.querySelector(".hamburger-menu");
const hamburgerRow = document.querySelectorAll(".hamburger-row");
const navbar = document.querySelector("#navbar");

hamburgerBtn.addEventListener("click", function(){
  if (navbar.style.display === "block"){
    navbar.style.display = "none";
    for (let i = 0; i < hamburgerRow.length; i++)
      hamburgerRow[i].classList.remove("hamburger-toggled");
      hamburgerRow[1].style.display = "block";
      hamburgerBtn.firstElementChild.style.transform = "rotate(0)";
      hamburgerBtn.lastElementChild.style.transform = "rotate(0)";
  } else{
      navbar.style.display = "block";
      for (let i = 0; i < hamburgerRow.length; i++)
        hamburgerRow[i].classList.add("hamburger-toggled");
      hamburgerRow[1].style.display = "none";
      hamburgerBtn.firstElementChild.style.transform = "rotate(45deg)";
      hamburgerBtn.lastElementChild.style.transform = "rotate(-45deg)";
  }
  for (let i = 0; i < hamburgerRow.length; i++)
     hamburgerRow[i].style.transition = ".2s";
});