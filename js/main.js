const menuButton = document.querySelector(".btn-humburger");
const mobileMenu = document.querySelector(".main-nav-mobile");
const closeButton = document.querySelector(".close-btn-menu");
const menuItems = document.querySelectorAll("#menu-list li a");

const openMenu = () => {
  mobileMenu.classList.add("open-nav-links");
};

menuButton.addEventListener("click", () => openMenu());
closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("open-nav-links");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("open-nav-links");
  });
});
