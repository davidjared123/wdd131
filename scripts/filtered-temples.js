// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
//   // Cambia el icono según el estado del menú
//   if (navLinks.classList.contains('show')) {
//     menuToggle.textContent = '✖';
//   } else {
//     menuToggle.textContent = '☰';
//   }
// });

const templesArray = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, June, 3",
    area: 150000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 109000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  },
  {templeName: "Venezuela Caracas",
    location: "Caracas, Venezuela",
    dedicated: "2004, March, 21",
    area: 10000,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/400x225/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 70000,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
  },
  {
    templeName: "Fort Lauderdale Florida",
    location: "Fort Lauderdale, Florida, United States",
    dedicated: "2017, July, 16",
    area: 20000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/400x250/fort-lauderdale-florida-temple-1220610-wallpaper.jpg"
  },
];



function displayTemples(templesArray) {
  const container = document.getElementById("temples");
  container.innerHTML = ""; // limpiar contenido previo
  container.classList.add("container");

  const cardsHTML = templesArray.map((temple) => {
    return `
      <figure>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
      </figure>
    `;
  }).join("");

  container.innerHTML = cardsHTML;
}

displayTemples(templesArray); // call on load

const navLinks = document.querySelectorAll("#nav-links a");

function filterTemples(filter) {
  switch (filter) {
    case "Old":
      return templesArray.filter(t => {
        // dedicated is a string like "2005, August, 7"
        // We split by comma and take the first part to get the year
        const year = parseInt(t.dedicated.split(",")[0]);
        return year <= 1900;
      });
    case "New":
      return templesArray.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year >= 2000;
      });
    case "Large":
      return templesArray.filter(t => t.area >= 90000);
    case "Small":
      return templesArray.filter(t => t.area <= 10000);
    default:
      return templesArray; // Home all temples
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // prevent page reload
    const filter = link.textContent.trim();
    const filtered = filterTemples(filter);
    displayTemples(filtered);
  });
});