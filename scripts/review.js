// Contador de reseñas usando localStorage
const reviewCountSpan = document.getElementById('reviewCount');
let count = Number(localStorage.getItem('reviewCount')) || 0;
count++;
localStorage.setItem('reviewCount', count);
if (reviewCountSpan) {
  reviewCountSpan.textContent = count;
}
