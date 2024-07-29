// Enhanced mock data for kids movies
const kidsMovies = [
    { id: 1, title: "Toy Story", year: 1995, rating: "G", poster: "https://example.com/toy-story.jpg", description: "A story of Woody, Buzz Lightyear, and their friends as they embark on various adventures." },
    { id: 2, title: "Finding Nemo", year: 2003, rating: "G", poster: "https://example.com/finding-nemo.jpg", description: "The story of a clownfish named Marlin who searches for his abducted son Nemo." },
    { id: 3, title: "The Lion King", year: 1994, rating: "G", poster: "https://example.com/lion-king.jpg", description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery." },
    { id: 4, title: "Frozen", year: 2013, rating: "PG", poster: "https://example.com/frozen.jpg", description: "The story of two princesses of Arendelle, Elsa and Anna, and Elsa's magical ice powers." },
    { id: 5, title: "Moana", year: 2016, rating: "PG", poster: "https://example.com/moana.jpg", description: "An adventurous teenager sails out on a daring mission to save her people." },
    { id: 6, title: "Zootopia", year: 2016, rating: "PG", poster: "https://example.com/zootopia.jpg", description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy." },
    { id: 7, title: "The Incredibles", year: 2004, rating: "PG", poster: "https://example.com/incredibles.jpg", description: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world." },
    { id: 8, title: "Up", year: 2009, rating: "PG", poster: "https://example.com/up.jpg", description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway." },
];

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');
const ratingFilter = document.getElementById('rating-filter');
const favoritesList = document.getElementById('favorites-list');
const modal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-movie-details');
const closeModal = document.getElementsByClassName('close')[0];

let favorites = [];

// Event listeners
searchButton.addEventListener('click', searchMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchMovies();
});
ratingFilter.addEventListener('change', searchMovies);
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Function to search movies
function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRating = ratingFilter.value;
    
    const filteredMovies = kidsMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) &&
        (selectedRating === 'all' || movie.rating === selectedRating)
    );
    
    displayMovies(filteredMovies, movieList);
}

// Function to display movies
function displayMovies(movies, container) {
    container.innerHTML = '';
    if (movies.length === 0) {
        container.innerHTML = '<p>No movies found. Try a different search!</p>';
        return;
    }
    
    movies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        container.appendChild(movieElement);
    });
}

// Function to create a movie element
function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-item');
    movieElement.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        <h3>${movie.title}</h3>
        <p>Year: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        <button class="favorite-button">${favorites.includes(movie.id) ? '❤️' : '🤍'}</button>
    `;
    movieElement.addEventListener('click', () => showMovieDetails(movie));
    
    const favoriteButton = movieElement.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(movie);
    });
    
    return movieElement;
}

// Function to show movie details in modal
function showMovieDetails(movie) {
    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}" style="max-width: 200px;">
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
    `;
    modal.style.display = 'block';
}

// Function to toggle favorite status
function toggleFavorite(movie) {
    const index = favorites.indexOf(movie.id);
    if (index === -1) {
        favorites.push(movie.id);
    } else {
        favorites.splice(index, 1);
    }
    updateFavorites();
}

// Function to update favorites list
function updateFavorites() {
    const favoriteMovies = kidsMovies.filter(movie => favorites.includes(movie.id));
    displayMovies(favoriteMovies, favoritesList);
    searchMovies(); // Refresh main movie list to update favorite buttons
}

// Initial display of all movies
displayMovies(kidsMovies, movieList);