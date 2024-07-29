// Enhanced mock data for kids movies
const kidsMovies = [
    { title: "Toy Story", year: 1995, rating: "G", poster: "https://example.com/toy-story.jpg" },
    { title: "Finding Nemo", year: 2003, rating: "G", poster: "https://example.com/finding-nemo.jpg" },
    { title: "The Lion King", year: 1994, rating: "G", poster: "https://example.com/lion-king.jpg" },
    { title: "Frozen", year: 2013, rating: "PG", poster: "https://example.com/frozen.jpg" },
    { title: "Moana", year: 2016, rating: "PG", poster: "https://example.com/moana.jpg" },
    { title: "Zootopia", year: 2016, rating: "PG", poster: "https://example.com/zootopia.jpg" },
    { title: "The Incredibles", year: 2004, rating: "PG", poster: "https://example.com/incredibles.jpg" },
    { title: "Up", year: 2009, rating: "PG", poster: "https://example.com/up.jpg" },
];

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');
const ratingFilter = document.getElementById('rating-filter');

// Event listeners
searchButton.addEventListener('click', searchMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchMovies();
});
ratingFilter.addEventListener('change', searchMovies);

// Function to search movies
function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRating = ratingFilter.value;
    
    const filteredMovies = kidsMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) &&
        (selectedRating === 'all' || movie.rating === selectedRating)
    );
    
    displayMovies(filteredMovies);
}

// Function to display movies
function displayMovies(movies) {
    movieList.innerHTML = '';
    if (movies.length === 0) {
        movieList.innerHTML = '<p>No movies found. Try a different search!</p>';
        return;
    }
    
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');
        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <h3>${movie.title}</h3>
            <p>Year: ${movie.year}</p>
            <p>Rating: ${movie.rating}</p>
        `;
        movieList.appendChild(movieElement);
    });
}

// Initial display of all movies
displayMovies(kidsMovies);