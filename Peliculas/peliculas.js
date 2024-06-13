async function fetchMoviesApi() {
    const movie = "morty";
    const page = 1
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${movie}&r=json&page=${page}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5a1de45b35msh28c5a2f63c8e81ap13c4d9jsna15abbf2c933',
            'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options)
    const movies = await response.json()
    console.log(movies)

    movies.Search.forEach((movie) => 
        createMovieItem(
        movie.Title,
        movie.Poster,
        movie.Type,
        movie.Year
    ) )


}

fetchMoviesApi()

function createMovieItem(title, image,type, year) {
    const movieElement = document.querySelector('#main')
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('ContainerMovies')

    const titleElement = document.createElement("h2")
    titleElement.textContent = title
    itemContainer.append(titleElement)

    const imageElement = document.createElement('img')
    imageElement.setAttribute("src", image)
    itemContainer.append(imageElement)

    const typeMovie = document.createElement('p')
    typeMovie.textContent = type
    itemContainer.append(typeMovie)

    const yearMovie = document.createElement("p")
    yearMovie.textContent = year
    itemContainer.append(yearMovie)

    movieElement.append(itemContainer)
}


