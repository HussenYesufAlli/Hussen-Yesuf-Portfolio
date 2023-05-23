const menuBtn = document.querySelector('.btn-humburger');
const menu = document.querySelector('.main-nav-mobile');
const closeBtn = document.querySelector('.close-btn-menu');
const menuItems = document.querySelectorAll('#menu-list li a');

const openMenu = () => {
  menu.classList.add('open-nav-links');
};

menuBtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => {
  menu.classList.remove('open-nav-links');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('open-nav-links');
  });
});
