const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')
const navLink1 = document.getElementById('nav-link1')
const navLink2 = document.getElementById('nav-link2')
const navLink3 = document.getElementById('nav-link3')
const navLink4 = document.getElementById('nav-link4')
const navLink5 = document.getElementById('nav-link5')

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav')
})

navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
navLink1.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
navLink2.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
navLink3.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
navLink4.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})
navLink5.addEventListener('click', () => {
  navbar.classList.remove('showNav')
})

const date = document.getElementById('date')
date.textContent = new Date().getFullYear()
