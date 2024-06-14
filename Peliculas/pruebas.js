const inputMovie = document.querySelector("input")


async function fetchMoviesApi(page) {
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${inputMovie.value}&r=json&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5a1de45b35msh28c5a2f63c8e81ap13c4d9jsna15abbf2c933',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options)
    const movies = await response.json()
    console.log(movies.totalResults)

    const movieElement = document.querySelector("#main")
    movieElement.innerHTML = '';

    if (inputMovie.value === "" || movies.response==="False" || movies.Erro) {
        movieElement.innerHTML = `
            <div class="containerMovies">
                <h2>No se encontraron resultados</h2>
            </div>
        `
        return
    }else{
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
        }
            
            
        )
    }

}

function paginationMovies(){
    const paginationMovies = document.querySelector("#pagination")
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

const btnSearchMovie = document.querySelector("button")
 

function handleEvent(event){
    if(event.type === "click" || (event.type === "keydown" && event.key === "Enter")){
        fetchMoviesApi()
    }
}

btnSearchMovie.addEventListener("click", handleEvent)
inputMovie.addEventListener("keydown", handleEvent)

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
    imageElement.setAttribute('alt', title)
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
const totalMovies = 10
function getPagination(totalMovie){
    const pagination = document.querySelector("#pagination");

    for (let i = 0; i < totalMovie; i++) {
        const pagina = document.createElement("li");
        pagina.textContent = i+1
        pagina.setAttribute("style", "cursor:pointer");
        
        pagination.append(pagina);
        console.log(pagina.textContent);
    }
    
}
getPagination(totalMovies)