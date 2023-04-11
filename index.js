function getCharacters(done, url) {
  fetch(url)
    .then(response => response.json())
    .then(data => done(data));
}

function showCharacters(data) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  
  if (data.results.length > 0) {
    data.results.forEach(personaje => { 
      const article = document.createElement("article");

      const imagenContainer = document.createElement("div");
      imagenContainer.classList.add("imagen-container");
      const imagen = document.createElement("img");
      imagen.src = personaje.image;
      imagen.alt = "personaje";
      imagenContainer.appendChild(imagen);

      const h2 = document.createElement("h2");
      h2.textContent = personaje.name;

      const span = document.createElement("span");
      span.textContent = personaje.status;

      article.appendChild(imagenContainer);
      article.appendChild(h2);
      article.appendChild(span);
      main.appendChild(article);
    });
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se encontraron resultados.";
    main.appendChild(mensaje);
  }
}


const input = document.querySelector("input");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const busqueda = input.value;
    const url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;
    getCharacters(showCharacters, url);
  }
});


getCharacters(showCharacters, "https://rickandmortyapi.com/api/character");

setTimeout(function() {
  document.querySelector("#loader").style.opacity = "0";
  setTimeout(function() {
    document.querySelector("#loader").style.display = "none";
  }, 1000);
}, 3000);
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const searchValue = searchInput.value;
  const url = `https://rickandmortyapi.com/api/character/?name=${searchValue}`;

  getCharacters(data => {
    if (data.results.length > 0) {
      const main = document.querySelector("main");
      main.innerHTML = "";

      data.results.forEach(personaje => {
        const article = document.createElement("article");

        const imagenContainer = document.createElement("div");
        imagenContainer.classList.add("imagen-container");
        const imagen = document.createElement("img");
        imagen.src = personaje.image;
        imagen.alt = "personaje";
        imagenContainer.appendChild(imagen);

        const h2 = document.createElement("h2");
        h2.textContent = personaje.name;

        const span = document.createElement("span");
        span.textContent = personaje.status;

        article.appendChild(imagenContainer);
        article.appendChild(h2);
        article.appendChild(span);
        main.appendChild(article);
      });
    } else {
      const main = document.querySelector("main");
      main.innerHTML = "<p>No results found.</p>";
    }
  }, url);
});


