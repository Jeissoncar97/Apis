function fetchMoviesApi() {
    const movie = "coco";
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${movie}&r=json&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5a1de45b35msh28c5a2f63c8e81ap13c4d9jsna15abbf2c933',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(response => {
            if (response.Search) {
                console.log(response)
                displayMovies(response.Search);
            } else {
                console.error('No movies found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayMovies(movies) {
    const main = document.querySelector('#movie-container');
    main.innerHTML = ''; // Limpiar contenedor antes de agregar nuevas películas

    movies.forEach(movie => {
        const article = document.createRange().createContextualFragment(`
            <article>
                <img src="${movie.Poster}" alt="${movie.Title}">
            </article>
        `);
        main.append(article);
    });
}

// Llama a la función fetchMoviesApi al cargar la página
document.addEventListener('DOMContentLoaded', fetchMoviesApi);