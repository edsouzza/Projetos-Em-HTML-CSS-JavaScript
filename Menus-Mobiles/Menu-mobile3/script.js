const btnHamburger = document.querySelector("#hamburgerButton")
const btnFechar    = document.querySelector("#closeButton")
const menuMobile   = document.querySelector("#mobileMenu")

btnHamburger.addEventListener('click',()=>{
    menuMobile.classList.add('open')
})
btnFechar.addEventListener('click',()=>{
    menuMobile.classList.remove('open')
})