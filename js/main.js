
const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const link = document.querySelectorAll('#menu-link');

iconMenu.addEventListener('click', () => {
    iconMenu.firstElementChild.classList.toggle('icon-menu__bar--close');
    menu.classList.toggle('menu--active');
});

link.forEach( li => li.addEventListener('click', closeMenu));

function closeMenu() {
    iconMenu.firstElementChild.classList.remove('icon-menu__bar--close');
    menu.classList.remove('menu--active');
}