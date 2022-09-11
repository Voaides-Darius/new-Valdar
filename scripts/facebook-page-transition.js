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

// Campaign Box
const campaignBox = document.querySelectorAll('.campaign-box')
campaignBoxOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const campaignBoxObserver = new IntersectionObserver(campaignBoxAnimation, campaignBoxOptions)

function campaignBoxAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
      entry.target.classList.add('service-title-animation')
  })
}

campaignBox.forEach((entry) => {
  campaignBoxObserver.observe(entry)
})

// packs
const packs = document.querySelectorAll('.pack-card')
packsOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const packsObserver = new IntersectionObserver(packsAnimation, packsOptions)
function packsAnimation(entries){
  entries.forEach((entry) => {
    if(entry.isIntersecting === true)
      entry.target.classList.add('pack-animation')
  })
}

packs.forEach((entry) => {
  packsObserver.observe(entry)
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
  
  // Campaign Box
  const campaignBox = document.querySelectorAll('.campaign-box')
  campaignBoxOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const campaignBoxObserver = new IntersectionObserver(campaignBoxAnimation, campaignBoxOptions)
  
  function campaignBoxAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  campaignBox.forEach((entry) => {
    campaignBoxObserver.observe(entry)
  })

  // packs
  const packs = document.querySelectorAll('.pack-card')
  packsOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  }

  const packsObserver = new IntersectionObserver(packsAnimation, packsOptions)
  function packsAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-1')
    })
  }

  packs.forEach((entry) => {
    packsObserver.observe(entry)
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
  
  // Campaign Box
  const campaignBox = document.querySelectorAll('.campaign-box')
  campaignBoxOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  
  const campaignBoxObserver = new IntersectionObserver(campaignBoxAnimation, campaignBoxOptions)
  
  function campaignBoxAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
        entry.target.classList.add('service-title-animation')
    })
  }
  
  campaignBox.forEach((entry) => {
    campaignBoxObserver.observe(entry)
  })

  // packs
  const packs = document.querySelectorAll('.pack-card')
  packsOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  }

  const packsObserver = new IntersectionObserver(packsAnimation, packsOptions)
  function packsAnimation(entries){
    entries.forEach((entry) => {
      if(entry.isIntersecting === true)
        entry.target.classList.add('service-about-animation-1')
    })
  }

  packs.forEach((entry) => {
    packsObserver.observe(entry)
  })
} 
