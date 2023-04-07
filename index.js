function getCharacters(done) {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => done(data));
  }
  
  getCharacters(data => {
    const main = document.querySelector("main");
  
    data.results.forEach(personaje => {
      const article = document.createElement("article");
  
      const imagenContainer = document.createElement("div");
      imagenContainer.classList.add("imagen-container");
      const imagen = document.createElement("img");
      imagen.src = personaje.image;
      imagen.alt = "PERSONAJE";
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
  });
  