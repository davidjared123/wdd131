// Array de productos
const products = [
  { id: 'prod1', name: 'Product A' },
  { id: 'prod2', name: 'Product B' },
  { id: 'prod3', name: 'Product C' },
  { id: 'prod4', name: 'Product D' }
];

// Llenar dinámicamente el select de productos
const select = document.getElementById('productName');
if (select) {
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}
