const firstSectionContainer = document.querySelector(".service-container")

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

let observer = new IntersectionObserver(function(entries, observer){
  entries.forEach((entry) => {
    if (entry.intersectionRatio === true)
      firstSectionContainer.classList.add("blog-animation-1")
    else
      firstSectionContainer.classList.remove("blog-animation-1")
  })
}, options)
observer.observe(firstSectionContainer)
