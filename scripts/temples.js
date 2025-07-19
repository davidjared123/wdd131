const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  // Cambia el icono según el estado del menú
  if (navLinks.classList.contains('show')) {
    menuToggle.textContent = '✖';
  } else {
    menuToggle.textContent = '☰';
  }
});