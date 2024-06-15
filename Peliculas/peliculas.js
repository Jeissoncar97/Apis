const inputMovie = document.querySelector("input");
const btnSearchMovie = document.querySelector("button");
const totalMovies = 10; // Ajusta según tus necesidades
let currentPage = 1;
const resultsPerPage = 10; // Asumimos 10 resultados por página, cambia esto según tus necesidades
let totalResults = 0; // Variable para almacenar el total de resultados

async function fetchMoviesApi(page = 1) {
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${inputMovie.value}&r=json&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5a1de45b35msh28c5a2f63c8e81ap13c4d9jsna15abbf2c933',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

  const response = await fetch(url, options);
  const movies = await response.json();

  const movieElement = document.querySelector("#main");
  movieElement.innerHTML = '';

  if (!movies.Search || movies.Response === "False" || movies.Error) {
    movieElement.innerHTML = `
      <div class="containerMovies">
        <h2>No se encontraron resultados</h2>
      </div>
    `;
    return;
  }

  totalResults = movies.totalResults;
  movies.Search.forEach((movie) => {

    if(movie.Poster !== "N/A"){
        createMovieItem(
            movie.Title,
            movie.Poster,
            movie.Type,
            movie.Year
            ) 
    }else{
        createMovieItem(
            movie.Title,
            "./image/image.png",
            movie.Type,
            movie.Year
            ) 
    }
});

  // Call paginationMovies separately after data fetch
  paginationMovies();
}

function paginationMovies() {
  const paginationContainer = document.querySelector(".pagination"); // Ensure this element exists in your HTML
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const prevButton = document.createElement('button');
  prevButton.textContent = '<<';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchMoviesApi(currentPage);
    }
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = '>>';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchMoviesApi(currentPage);
    }
  });

  const pageDisplay = document.createElement('span');
  pageDisplay.textContent = `Página ${currentPage} de ${totalPages}`;

  paginationContainer.append(prevButton, pageDisplay, nextButton);
}

function handleEvent(event) {
  if (event.type === "click" || (event.type === "keydown" && event.key === "Enter" )) {
    currentPage = 1; // Reiniciar a la primera página en una nueva búsqueda
    fetchMoviesApi(currentPage);
  }
}

btnSearchMovie.addEventListener("click", handleEvent);
inputMovie.addEventListener("keydown", handleEvent);
function createMovieItem(title, image,type, year) {
    

    const movieElement = document.querySelector('#main')
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('containerMovies')
    itemContainer.setAttribute('title', title)

    const titleElement = document.createElement("h2")
    titleElement.textContent = title
    itemContainer.append(titleElement)

    const imageElement = document.createElement('img')
    imageElement.setAttribute("src", image)
    itemContainer.append(imageElement)

    const typeMovie = document.createElement('p')
    typeMovie.innerHTML = `<strong>Tipo: </strong> ${type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}`
    itemContainer.append(typeMovie)

    const yearMovie = document.createElement("p")
    yearMovie.innerHTML = `<strong>Año: </strong>${year}`
    itemContainer.append(yearMovie)

    movieElement.append(itemContainer)

    inputMovie.values = ""
}