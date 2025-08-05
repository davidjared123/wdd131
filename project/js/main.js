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

// Scroll suave para el logo al inicio de la página
document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.querySelector('.logo');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Solo aplicar scroll suave si el enlace es a la misma página (index.html o similar)
      if (href === 'index.html' || href === '/' || href === '#' || href === '') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
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

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const learnBtn = document.querySelector('.learn-btn');
  const modal = document.getElementById('modalDocente');
  const closeModalBtn = modal ? modal.querySelector('.modal-close') : null;

  function openModal() {
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      // Enfocar el modal para accesibilidad
      modal.focus();
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
      // Devolver el foco al botón que abrió el modal
      if (learnBtn) {
        learnBtn.focus();
      }
    }
  }

  // Abrir modal al hacer clic en "Saber más"
  if (learnBtn) {
    learnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Cerrar modal al hacer clic en el botón de cerrar
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  }

  // Cerrar modal al hacer clic fuera del contenido
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }
});
