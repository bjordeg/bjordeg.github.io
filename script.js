const toggleBtn = document.getElementById('hamburbur');
const menu = document.getElementById('hamburbur-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});