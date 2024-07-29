// Mock data for kids movies
const kidsMovies = [
    { title: "Toy Story", year: 1995, rating: "G" },
    { title: "Finding Nemo", year: 2003, rating: "G" },
    { title: "The Lion King", year: 1994, rating: "G" },
    { title: "Frozen", year: 2013, rating: "PG" },
    { title: "Moana", year: 2016, rating: "PG" },
];

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');

// Event listener for search button
searchButton.addEventListener('click', searchMovies);

// Function to search movies
function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = kidsMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

// Function to display movies
function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieList.appendChild(movieElement);
    });
}

// Initial display of all movies
displayMovies(kidsMovies);