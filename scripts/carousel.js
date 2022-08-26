const slides = document.querySelectorAll('.blog-grid')
let index = 0;
// initialized blog carousel
for (let i = 1; i < slides.length; i++)
  slides[i].style.display = "none";

document.addEventListener('DOMContentLoaded', init())
function init(){
  let query = window.matchMedia('(min-width: 67.5em)')
  if (query.matches)
    setInterval(slideChange, 7000)
}

function slideChange(){
  if (index < slides.length - 1){
    slides[index].style.display = "none"
    slides[index].style.animation = "none"
    slides[index].children[0].classList.remove('blog-animation-1')
    slides[index].children[1].classList.remove('blog-animation-2')
    slides[index].children[2].classList.remove('blog-animation-3')
    index++
    slides[index].style.display = "grid"
    slides[index].style.animation = "left-to-right 1s";
    slides[index].children[0].classList.add('blog-animation-1')
    slides[index].children[1].classList.add('blog-animation-2')
    slides[index].children[2].classList.add('blog-animation-3')
  } else{
    slides[index].style.display = "none";
    slides[index].style.animation = "none";
    slides[index].children[0].classList.remove('blog-animation-1')
    slides[index].children[1].classList.remove('blog-animation-2')
    slides[index].children[2].classList.remove('blog-animation-3')
    index = 0;
    slides[index].style.display = "grid"
    slides[index].style.animation = "left-to-right 1s";
    slides[index].children[0].classList.add('blog-animation-1')
    slides[index].children[1].classList.add('blog-animation-2')
    slides[index].children[2].classList.add('blog-animation-3')
  }
}

