// Footer Year and Last Modified
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(2);
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windSpeed").textContent);

if (temp <= 50 && speed > 3) {
  document.getElementById("windChill").textContent = calculateWindChill(temp, speed) + " °F";
} else {
  document.getElementById("windChill").textContent = "N/A";
}
