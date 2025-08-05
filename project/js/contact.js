const currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = currentYear;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContacto');
  const mensajeExito = document.getElementById('mensajeExito');

  // Cargar datos guardados si existen
  cargarDatosGuardados(form);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!validarCampos(nombre, mensaje, mensajeExito)) return;

    guardarDatosContacto(nombre, mensaje);
    mostrarMensaje('Redirigiendo a WhatsApp...', 'green', mensajeExito);
    enviarWhatsApp(nombre, mensaje);
    limpiarFormulario(form);
  });
});

function cargarDatosGuardados(form) {
  const datosGuardados = JSON.parse(localStorage.getItem('contactoRayitos'));
  if (datosGuardados) {
    form.nombre.value = datosGuardados.nombre || '';
    form.mensaje.value = datosGuardados.mensaje || '';
  }
}

function validarCampos(nombre, mensaje, mensajeExito) {
  if (!nombre || !mensaje) {
    mostrarMensaje('Por favor, completa todos los campos.', 'red', mensajeExito);
    return false;
  }
  return true;
}

function guardarDatosContacto(nombre, mensaje) {
  const datos = { nombre, mensaje };
  localStorage.setItem('contactoRayitos', JSON.stringify(datos));
}

function mostrarMensaje(texto, color, mensajeExito) {
  mensajeExito.textContent = texto;
  mensajeExito.classList.remove('hidden');
  mensajeExito.style.color = color;
  mensajeExito.style.opacity = '0';
  mensajeExito.style.transition = 'opacity 0.5s, transform 0.5s';
  mensajeExito.style.transform = 'translateY(-10px)';
  // Forzar reflow para que la transición funcione
  void mensajeExito.offsetWidth;
  mensajeExito.style.opacity = '1';
  mensajeExito.style.transform = 'translateY(0)';
  // Ocultar automáticamente después de 3 segundos
  clearTimeout(mostrarMensaje._timeout);
  mostrarMensaje._timeout = setTimeout(() => {
    mensajeExito.style.opacity = '0';
    mensajeExito.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      mensajeExito.classList.add('hidden');
      mensajeExito.textContent = '';
    }, 500);
  }, 3000);
}

function enviarWhatsApp(nombre, mensaje) {
  const numeroWhatsApp = "584245189761";
  const texto = `Hola, soy ${nombre}. ${mensaje}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}

function limpiarFormulario(form) {
  form.reset();
}
