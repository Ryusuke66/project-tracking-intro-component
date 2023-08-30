let menuIcon = document.getElementById('menu');
let nav = document.querySelector('header ul');
let body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    if (menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('active');
        menuIcon.classList.add('inactive');
        nav.classList.remove('on');
    } else {
        menuIcon.classList.add('active');
        menuIcon.classList.remove('inactive');
        nav.classList.add('on');
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    }
});

body.addEventListener('click', () => {
    if(menuIcon.classList.contains('active')) {
        menuIcon.classList.remove('active');
        menuIcon.classList.add('inactive');
        nav.classList.remove('on');
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    }
});

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
});

nav.addEventListener('click', (e) => {
    e.stopPropagation();
});