const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
menu.classList.remove('active');
});

new WOW().init();

const counters = document.querySelectorAll('.percentages__main-two'),
lines = document.querySelectorAll('.percentages__line span');             //не робе, дізнатись причину
                                                                                        
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
