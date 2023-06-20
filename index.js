// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// hamburg
const hamburg = document.querySelector('#hamburg');
const navMenu = document.querySelector('#nav-menu');

hamburg.addEventListener('click', function () {
    hamburg.classList.toggle('hamburg-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if(e.target != hamburg && e.target != navMenu){
        hamburg.classList.remove('hamburg-active');
        navMenu.classList.add('hidden');
    }
});

// toggle dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});