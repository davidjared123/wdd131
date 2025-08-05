// Scroll suave para todos los enlaces internos (anclas)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
// Scroll suave para el enlace de contacto en el navbar
document.addEventListener('DOMContentLoaded', () => {
  const contactoLink = document.querySelector('a[href="#contacto"]');
  if (contactoLink) {
    contactoLink.addEventListener('click', function(e) {
      const target = document.getElementById('contacto');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
// Menú hamburguesa responsive
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
  });
}

// Botón "Saber más" (puedes personalizar la acción)
document.addEventListener('DOMContentLoaded', () => {
  const learnBtn = document.querySelector('.learn-btn');
  const modal = document.getElementById('modalDocente');
  const closeModalBtn = modal ? modal.querySelector('.close-modal') : null;
  let scrollListener = null;
  function closeModal() {
    const modalContent = modal.querySelector('.modal-content-full');
    if (modalContent) {
      modalContent.classList.add('hide-anim');
      setTimeout(() => {
        modal.classList.add('hidden');
        modalContent.classList.remove('hide-anim');
        learnBtn.focus();
      }, 350);
    } else {
      modal.classList.add('hidden');
      learnBtn.focus();
    }
    if (scrollListener) {
      window.removeEventListener('scroll', scrollListener);
      scrollListener = null;
    }
    document.body.style.overflow = '';
  }
  if (learnBtn && modal && closeModalBtn) {
    learnBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.focus();
      // Bloquear scroll de fondo
      document.body.style.overflow = 'hidden';
      // Cerrar al hacer scroll
      scrollListener = () => closeModal();
      setTimeout(() => window.addEventListener('scroll', scrollListener), 200);
    });
    closeModalBtn.addEventListener('click', closeModal);
    // Cerrar con Escape
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
    // Cerrar al hacer click fuera del modal-content
    modal.addEventListener('mousedown', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
