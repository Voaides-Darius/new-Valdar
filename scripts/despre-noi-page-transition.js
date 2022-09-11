document.addEventListener('DOMContentLoaded', init())
function init(){
  let query1 = window.matchMedia('(min-width: 87.5em)')
  let query2 = window.matchMedia('(min-width: 67.5em)')
  if (query1.matches)
    desktopSizeAnimation()
  else if(query2.matches)
    tabletSizeAnimation()
  else
    phoneSizeAnimation()
}

function desktopSizeAnimation(){
// Service Title Desktop 
const serviceTitleDesktop = document.querySelectorAll('.service-title-desktop')
serviceTitleDesktopOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

const serviceTitleDesktopObserver = new IntersectionObserver(serviceTitleDesktopAnimation, serviceTitleDesktopOptions)

function serviceTitleDesktopAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true)
      entry.target.classList.add('service-title-animation')
  })
}

serviceTitleDesktop.forEach((entry) => {
  serviceTitleDesktopObserver.observe(entry)
})

// Service Campaign Desktop
const campaignTitleDesktop = document.querySelectorAll('.campaign-title-desktop')
campaignTitleDesktopOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const campaignTitleDesktopObserver = new IntersectionObserver(campaignTitleDesktopAnimation, campaignTitleDesktopOptions)

function campaignTitleDesktopAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true)
      entry.target.classList.add('service-title-animation')
  })
}

campaignTitleDesktop.forEach((entry) => {
  campaignTitleDesktopObserver.observe(entry)
})

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
console.log(teamBox)
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

// Partners
const partners = document.querySelectorAll('.partners-grid img');
partnersOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const partnersObserver = new IntersectionObserver(partnersAnimation, partnersOptions)
function partnersAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true)
      entry.target.classList.add('blog-animation-1')
  })
}

partners.forEach((entry) => {
  partnersObserver.observe(entry)
})

}

// tabletSizeAnimation

function tabletSizeAnimation(){
  // Service Title Desktop 
  const serviceTitleDesktop = document.querySelectorAll('.service-title-desktop')
  serviceTitleDesktopOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  const serviceTitleDesktopObserver = new IntersectionObserver(serviceTitleDesktopAnimation, serviceTitleDesktopOptions)
  
  function serviceTitleDesktopAnimation(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  serviceTitleDesktop.forEach((entry) => {
    serviceTitleDesktopObserver.observe(entry)
  })
  
  // Service Campaign Desktop
  const campaignTitleDesktop = document.querySelectorAll('.campaigns-title')
  campaignTitleDesktopOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const campaignTitleDesktopObserver = new IntersectionObserver(campaignTitleDesktopAnimation, campaignTitleDesktopOptions)
  
  function campaignTitleDesktopAnimation(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  campaignTitleDesktop.forEach((entry) => {
    campaignTitleDesktopObserver.observe(entry)
  })
  
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
console.log(teamBox)
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

// Partners
const partners = document.querySelectorAll('.partners-grid img');
partnersOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const partnersObserver = new IntersectionObserver(partnersAnimation, partnersOptions)
function partnersAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true)
      entry.target.classList.add('blog-animation-1')
  })
}

partners.forEach((entry) => {
  partnersObserver.observe(entry)
})

}

// phoneSizeAnimation

function phoneSizeAnimation(){
  // Service Title Desktop 
  const serviceTitleDesktop = document.querySelectorAll('.service-title')
  serviceTitleDesktopOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }
  
  const serviceTitleDesktopObserver = new IntersectionObserver(serviceTitleDesktopAnimation, serviceTitleDesktopOptions)
  
  function serviceTitleDesktopAnimation(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  serviceTitleDesktop.forEach((entry) => {
    serviceTitleDesktopObserver.observe(entry)
  })
  
  // Service Campaign Desktop
  const campaignTitleDesktop = document.querySelectorAll('.campaigns-title')
  campaignTitleDesktopOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const campaignTitleDesktopObserver = new IntersectionObserver(campaignTitleDesktopAnimation, campaignTitleDesktopOptions)
  
  function campaignTitleDesktopAnimation(entries){
    entries.forEach((entry) => {
      if (entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  campaignTitleDesktop.forEach((entry) => {
    campaignTitleDesktopObserver.observe(entry)
  })
  
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
console.log(teamBox)
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

// Partners
const partners = document.querySelectorAll('.partners-grid img');
partnersOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

const partnersObserver = new IntersectionObserver(partnersAnimation, partnersOptions)
function partnersAnimation(entries){
  entries.forEach((entry) => {
    if (entry.isIntersecting === true)
      entry.target.classList.add('blog-animation-1')
  })
}

partners.forEach((entry) => {
  partnersObserver.observe(entry)
})


} 
