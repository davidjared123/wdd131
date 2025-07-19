const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').textContent = currentYear;

// Last modification date: 
const lastMod = new Date(document.lastModified);
const pad = n => n.toString().padStart(2, '0');
const formatted = `Last Modification: ${pad(lastMod.getDate())}/${pad(lastMod.getMonth()+1)}/${lastMod.getFullYear()} ${pad(lastMod.getHours())}:${pad(lastMod.getMinutes())}:${pad(lastMod.getSeconds())}`;
const lastModElem = document.querySelector('#lastModified');
if (lastModElem) lastModElem.textContent = formatted;