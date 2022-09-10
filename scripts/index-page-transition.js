document.addEventListener('DOMContentLoaded', init())
function init(){
  let query = window.matchMedia('(min-width: 50em)')
  if (query.matches)
    desktopSizeAnimation()
  else
    phoneSizeAnimation()
}

function desktopSizeAnimation(){
// Service Title Animation
const serviceTitle = document.querySelectorAll('.service-title')

serviceTitleOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

const serviceTitleObserver = new IntersectionObserver(serviceTitleAnimation, serviceTitleOptions)

serviceTitle.forEach((entry) => {
  serviceTitleObserver.observe(entry)
})

function serviceTitleAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true){
      entry.target.classList.add('service-title-animation')
    }  
  })
}
  
// Service About Left
const serviceAboutLeft = document.querySelectorAll('.service-about-left')

serviceAboutOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const serviceAboutObserverLeft = new IntersectionObserver(serviceAboutAnimation, serviceAboutOptions)

serviceAboutLeft.forEach((entry) => {
  serviceAboutObserverLeft.observe(entry)
})

function serviceAboutAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-1')
  })
}

// Service About Right
const serviceAboutRight = document.querySelectorAll('.service-about-right')

const serviceAboutObserverRight = new IntersectionObserver(serviceAboutAnimationRight, serviceAboutOptions)

serviceAboutRight.forEach((entry) => {
  serviceAboutObserverRight.observe(entry)
})

function serviceAboutAnimationRight(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-2')
  })
}

// Service Img Right

const serviceImgRight = document.querySelectorAll('.service-img-right-side')

const serviceImgObserverRight = new IntersectionObserver(serviceImgAnimationRight, serviceAboutOptions)

serviceImgRight.forEach((entry) => {
  serviceImgObserverRight.observe(entry)
})

function serviceImgAnimationRight(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-2')
  })
}

// Service Img Left

const serviceImgLeft = document.querySelectorAll('.service-img-left-side')

const serviceImgObserverLeft = new IntersectionObserver(serviceImgAnimationLeft, serviceAboutOptions)

serviceImgLeft.forEach((entry) => {
  serviceImgObserverLeft.observe(entry)
})

function serviceImgAnimationLeft(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-1')
  })
}

// Team Box 

const teamBox = document.querySelectorAll('.team-box')

teamBoxOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const teamBoxObserver = new IntersectionObserver
(serviceBoxAnimation, teamBoxOptions)

teamBox.forEach((entry) => {
  teamBoxObserver.observe(entry)
})

function serviceBoxAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('blog-animation-1')
  })
}

// Team Img
const teamImg = document.querySelectorAll('picture')

teamImgOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.33
}

const teamImgObserver = new IntersectionObserver
(serviceImgAnimation, teamImgOptions)

teamImg.forEach((entry) => {
  teamImgObserver.observe(entry)
})

function serviceImgAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-1')
  })
}

// Bar Contact Separator
const barContactSeparator = document.querySelector('.bar-contact-separator-container')

barContactOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const barContactObserver = new IntersectionObserver
(barContactAnimation, barContactOptions)

barContactObserver.observe(barContactSeparator)

function barContactAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
  })
}
}

function phoneSizeAnimation(){
  // Service Title Animation
  const serviceTitle = document.querySelectorAll('.service-title')
  
  serviceTitleOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  const serviceTitleObserver = new IntersectionObserver(serviceTitleAnimation, serviceTitleOptions)
  
  serviceTitle.forEach((entry) => {
    serviceTitleObserver.observe(entry)
  })
  
  function serviceTitleAnimation(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting === true){
        entry.target.classList.add('service-title-animation')
      }  
    })
  }
    
  // Service About Left
  const serviceAboutLeft = document.querySelectorAll('.service-about-left')
  
  serviceAboutOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  }
  
  const serviceAboutObserverLeft = new IntersectionObserver(serviceAboutAnimation, serviceAboutOptions)
  
  serviceAboutLeft.forEach((entry) => {
    serviceAboutObserverLeft.observe(entry)
  })
  
  function serviceAboutAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-about-animation-1')
    })
  }
  
  // Service About Right
  const serviceAboutRight = document.querySelectorAll('.service-about-right')
  
  const serviceAboutObserverRight = new IntersectionObserver(serviceAboutAnimationRight, serviceAboutOptions)
  
  serviceAboutRight.forEach((entry) => {
    serviceAboutObserverRight.observe(entry)
  })
  
  function serviceAboutAnimationRight(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-about-animation-2')
    })
  }
  
  // Service Img Right
  
  const serviceImgRight = document.querySelectorAll('.service-img-right-side')
  
  const serviceImgObserverRight = new IntersectionObserver(serviceImgAnimationRight, serviceAboutOptions)
  
  serviceImgRight.forEach((entry) => {
    serviceImgObserverRight.observe(entry)
  })
  
  function serviceImgAnimationRight(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-about-animation-2')
    })
  }
  
  // Service Img Left
  
  const serviceImgLeft = document.querySelectorAll('.service-img-left-side')
  
  const serviceImgObserverLeft = new IntersectionObserver(serviceImgAnimationLeft, serviceAboutOptions)
  
  serviceImgLeft.forEach((entry) => {
    serviceImgObserverLeft.observe(entry)
  })
  
  function serviceImgAnimationLeft(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-about-animation-1')
    })
  }
  
  // Team Box 
  
  const teamBox = document.querySelectorAll('.team-box')
  
  teamBoxOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
  
  const teamBoxObserver = new IntersectionObserver
  (serviceBoxAnimation, teamBoxOptions)
  
  teamBox.forEach((entry) => {
    teamBoxObserver.observe(entry)
  })
  
  function serviceBoxAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('blog-animation-1')
    })
  }
  
  // Team Img
  const teamImg = document.querySelectorAll('picture')
  
  teamImgOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.33
  }
  
  const teamImgObserver = new IntersectionObserver
  (serviceImgAnimation, teamImgOptions)
  
  teamImg.forEach((entry) => {
    teamImgObserver.observe(entry)
  })
  
  function serviceImgAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-about-animation-1')
    })
  }
  
  // Bar Contact Separator
  const barContactSeparator = document.querySelector('.bar-contact-separator-container')
  
  barContactOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const barContactObserver = new IntersectionObserver
  (barContactAnimation, barContactOptions)
  
  barContactObserver.observe(barContactSeparator)
  
  function barContactAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
          entry.target.classList.add('service-title-animation')
    })
  }
  }
  
