// var header = document.getElementById('header');

const navResponsive = document.getElementById('navResponsive')

const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    navResponsive.classList.add('nav_open');
})

closeButton.addEventListener('click', () => {
    navResponsive.classList.remove('nav_open');
})



// window.addEventListener('scroll', () => {
//     // Obtener la posición actual del scroll
//     let scrollPosition = window.scrollY || document.documentElement.scrollTop;

//     // Agregar o quitar las clases según la posición del scroll
//     if(scrollPosition > 0){
//         header.classList.remove('header');
//         header.classList.add('header_sticked');
//     } else {
//         header.classList.remove('header_sticked');
//         header.classList.add('header');
//     }
// })