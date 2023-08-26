/* ANIMANDO O MENU */
const divMenu = document.getElementById('menu-mobile')

/* ANIMANDO O BOTÃO HAMBURGER */
const btnMenu = document.getElementById('btn-burger')

divMenu.addEventListener('click', openMenu)

function openMenu(){ 
     divMenu.classList.toggle('abrirMenu')
     btnMenu.classList.toggle('ativar')     
}