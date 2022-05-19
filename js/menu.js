const menuIcon = document.getElementById('hamburger');
const menu = document.getElementById('menu-links');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu() {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

menuIcon.addEventListener('click', toggleMenu);
menuLinks.forEach(
  (link) => {
    link.addEventListener('click', toggleMenu);
  },
);
