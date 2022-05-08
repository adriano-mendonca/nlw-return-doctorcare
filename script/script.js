function onScrool(){
  showNavOnScroll()
  showBackToTopButton()
  activateMenu(home)
  activateMenu(services)
  activateMenu(about)
  activateMenu(contact)
}

function activateMenu(section){
  const targetLine = scrollY + innerHeight / 2
  
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReach = targetLine >= sectionTop
  const sectionEnd = sectionTop + sectionHeight

  const sectionEndPassed = sectionEnd <= targetLine

  const sectionBoundaries = sectionTopReach && !sectionEndPassed

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries){
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const menuMobile = document.querySelector('#navigation')
  if(scrollY > 5){
    menuMobile.classList.add('scroll')
  } else {
    menuMobile.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  const backToTopButton = document.querySelector('#backToTopButton')
  if(scrollY > 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', onScrool)

const btnOpen = document.querySelector('.open-menu')
const btnClose = document.querySelector('.close-menu')
const menuServices = document.querySelectorAll('.item-menu')
const imgLogo = document.querySelector('.logo')

btnOpen.addEventListener('click', openMenu)

Array.from(menuServices).forEach(link => {
  link.addEventListener('click', closeMenu)
})

function openMenu(){
  document.body.classList.add('menu-expanded')
  btnClose.addEventListener('click', closeMenu)
  imgLogo.addEventListener('click', closeMenu)
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 800,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content, #contact, #contact .header, #contact .content, #contact .content img, footer')