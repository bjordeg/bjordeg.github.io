const toggleBtn = document.getElementById('hamburbur');
const menu = document.getElementById('hamburbur-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Ensure the body has class="index-page" for the effect to work
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/sekryu/bjordeg.github.io/' ) {
  document.body.classList.add('index-page');
}

// Ensure the menu is transparent on page load (index.html only)
window.addEventListener('DOMContentLoaded', function() {
  if (!document.body.classList.contains('index-page')) return;
  const menuEl = document.querySelector('.menu');
  if (menuEl) {
    menuEl.style.background = 'rgba(0,0,0,0.1)';
    menuEl.style.transition = 'background 0.2s';
  }
});

// Menu scroll effect for index.html
if (document.body.classList.contains('index-page')) {
    const menu = document.querySelector('.menu');
    function updateMenuBg() {
        const scrollY = window.scrollY;
        let alpha = 0.1 + Math.min(scrollY / 300, 0.9); // 0.1 at top, up to 1.0
        menu.style.background = `rgba(0,0,0,${alpha})`;
    }
    window.addEventListener('scroll', updateMenuBg);
    // Set initial state
    updateMenuBg();
}