const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});