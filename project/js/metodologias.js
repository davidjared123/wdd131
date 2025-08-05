 // Render dinámico de cards de metodologías usando array, objetos, template literals y métodos de array

document.addEventListener('DOMContentLoaded', () => {
  // Paso 1: Definir el array de metodologías por defecto
  const defaultMetodologias = [
    {
      titulo: 'Estimulación Temprana',
      desc: 'Actividades sensoriales y motoras que potencian el desarrollo físico, cognitivo y emocional desde los primeros años.',
      color: 'linear-gradient(135deg, #43c97f 80%, #2e7d32 100%)' // verde
    },
    {
      titulo: 'Aprendizaje Basado en el Juego',
      desc: 'El juego libre y guiado como herramienta principal para descubrir el mundo, fomentar la curiosidad y la creatividad.',
      color: 'linear-gradient(135deg, #3a8dde 80%, #1a237e 100%)' // azul
    },
    {
      titulo: 'Educación Socioemocional',
      desc: 'Desarrollo de habilidades sociales, empatía y autorregulación emocional a través de dinámicas grupales y cuentos.',
      color: 'linear-gradient(135deg, #ffb347 80%, #ff9800 100%)' // naranja
    },
    {
      titulo: 'Exploración Sensorial',
      desc: 'Experiencias con texturas, sonidos, colores y materiales naturales para estimular los sentidos y el aprendizaje activo.',
      color: 'linear-gradient(135deg, #f76c6c 80%, #c62828 100%)' // rojo
    }
  ];

  // Paso 2: Guardar en localStorage si no existe
  if (!localStorage.getItem('metodologias')) {
    localStorage.setItem('metodologias', JSON.stringify(defaultMetodologias));
  }

  // Paso 3: Leer desde localStorage
  let metodologias = [];
  try {
    metodologias = JSON.parse(localStorage.getItem('metodologias')) || defaultMetodologias;
  } catch (e) {
    metodologias = defaultMetodologias;
  }
  // Si alguna metodología no tiene color, asignar el color por defecto según el índice
  const defaultColors = [
    'linear-gradient(135deg, #43c97f 80%, #2e7d32 100%)',
    'linear-gradient(135deg, #3a8dde 80%, #1a237e 100%)',
    'linear-gradient(135deg, #ffb347 80%, #ff9800 100%)',
    'linear-gradient(135deg, #f76c6c 80%, #c62828 100%)'
  ];
  metodologias.forEach((m, i) => {
    if (!m.color) m.color = defaultColors[i % defaultColors.length];
  });
  localStorage.setItem('metodologias', JSON.stringify(metodologias));

  // Paso 4: Renderizar usando función modular
  renderMetodologias(metodologias);
});

// Función modular para renderizar las cards de metodologías
function renderMetodologias(metodologias) {
  const grid = document.querySelector('.metodologias-grid');
  if (grid) {
    grid.innerHTML = '';
    metodologias.forEach((m, idx) => {
      const card = document.createElement('div');
      card.className = 'metodologia-card';
      card.innerHTML = `<h3>${m.titulo}</h3><p>${m.desc}</p>`;
      card.setAttribute('draggable', 'true');
      card.dataset.idx = idx;
      // Asignar color de fondo propio
      card.style.background = m.color;
      // Interacción: cambia de color al hacer clic
      card.addEventListener('click', function() {
        card.classList.add('active-metodologia');
        setTimeout(() => card.classList.remove('active-metodologia'), 600);
      });
      // Drag & drop events
      card.addEventListener('dragstart', handleDragStart);
      card.addEventListener('dragover', handleDragOver);
      card.addEventListener('drop', handleDrop);
      card.addEventListener('dragend', handleDragEnd);
      grid.appendChild(card);
    });
  }
}

let dragSrcIdx = null;
function handleDragStart(e) {
  dragSrcIdx = +this.dataset.idx;
  this.style.opacity = '0.5';
}
function handleDragOver(e) {
  e.preventDefault();
  this.style.boxShadow = '0 0 0 4px #0057AD';
}
function handleDrop(e) {
  e.preventDefault();
  this.style.boxShadow = '';
  const dropIdx = +this.dataset.idx;
  if (dragSrcIdx !== null && dragSrcIdx !== dropIdx) {
    let metodologias = JSON.parse(localStorage.getItem('metodologias'));
    const moved = metodologias.splice(dragSrcIdx, 1)[0];
    metodologias.splice(dropIdx, 0, moved);
    localStorage.setItem('metodologias', JSON.stringify(metodologias));
    renderMetodologias(metodologias);
  }
  dragSrcIdx = null;
}
function handleDragEnd(e) {
  this.style.opacity = '';
  this.style.boxShadow = '';
}
