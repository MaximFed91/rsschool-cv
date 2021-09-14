const btn = document.querySelector('.btn__menu'),
    menu = document.querySelector('.menu');

btn.addEventListener('click',()=>{
    menu.classList.toggle('menu--open');
});