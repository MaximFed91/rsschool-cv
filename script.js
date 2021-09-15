const btn = document.querySelector('.btn__menu'),
    menu = document.querySelector('.menu');

btn.addEventListener('click',()=>{
    menu.classList.toggle('menu--open');
});
menu.addEventListener('click',()=>{
    menu.classList.toggle('menu--open');
});
console.log('Выполнил все кроме видео. Использовал следующие семантические теги: aside, footer, header, main, nav, section, time, h1, h3, h4. \n Итоговая оценка 160-10=150 баллов.');