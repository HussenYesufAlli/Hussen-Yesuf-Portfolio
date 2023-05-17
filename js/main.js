const menuBtn = document.querySelector("button");
const menu = document.querySelector(".main-nav-mobile");
const closeBtn = document.querySelector(".close-btn-menu");
const menuItems = document.querySelectorAll("#menu-list li a");

const openMenu = () => {
  menu.classList.add("open-nav-links");
};

menuBtn.addEventListener("click", () => openMenu());
closeBtn.addEventListener("click", () => {
  menu.classList.remove("open-nav-links");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menu.classList.remove("open-nav-links");
  });
});
