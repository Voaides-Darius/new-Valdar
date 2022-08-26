let options = {
  root: document.querySelector('.team'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options)
let target = document.querySelector('.team-grid')
observer.observe(target)

let callback = (entries, observer) => {
  entries.array.forEach((entry) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target
  
        elem.classList.add('blog-animation-1')
        }

    })
})