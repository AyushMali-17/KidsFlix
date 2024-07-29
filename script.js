const kidsMovies = [
    { id: 1, title: "Toy Story", year: 1995, rating: "G", poster: "https://m.media-amazon.com/images/I/71aBLaNiBpL._AC_SY679_.jpg", description: "A story of Woody, Buzz Lightyear, and their friends as they embark on various adventures." },
    { id: 2, title: "Finding Nemo", year: 2003, rating: "G", poster: "https://m.media-amazon.com/images/I/51iD9FU5hkL._AC_SY450_.jpg", description: "The story of a clownfish named Marlin who searches for his abducted son Nemo." },
    { id: 3, title: "The Lion King", year: 1994, rating: "G", poster: "https://m.media-amazon.com/images/I/81mxun+6pEL._AC_SY679_.jpg", description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery." },
    { id: 4, title: "Frozen", year: 2013, rating: "PG", poster: "https://m.media-amazon.com/images/I/81Axo4RCoJL._AC_SY679_.jpg", description: "The story of two princesses of Arendelle, Elsa and Anna, and Elsa's magical ice powers." },
    { id: 5, title: "Moana", year: 2016, rating: "PG", poster: "https://m.media-amazon.com/images/I/71Uwpdi+xSL._AC_SY679_.jpg", description: "An adventurous teenager sails out on a daring mission to save her people." },
    { id: 6, title: "Zootopia", year: 2016, rating: "PG", poster: "https://m.media-amazon.com/images/I/61nx7Vg9e8L._AC_SY679_.jpg", description: "In a city of anthropomorphic animals, a bunny cop and a cynical con artist fox must work together to uncover a conspiracy." },
    { id: 7, title: "Despicable Me", year: 2010, rating: "PG", poster: "https://m.media-amazon.com/images/I/71yXShgxvpL._AC_SY679_.jpg", description: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better." },
    { id: 8, title: "Inside Out", year: 2015, rating: "PG", poster: "https://m.media-amazon.com/images/I/71bSaQXpoQL._AC_SY679_.jpg", description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust, and Sadness - conflict on how best to navigate a new city, house, and school." }
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');
const ratingFilter = document.getElementById('rating-filter');
const favoritesList = document.getElementById('favorites-list');
const modal = document.getElementById('movie-modal');
const modalContent = document.getElementById('modal-movie-details');
const closeModal = document.getElementsByClassName('close')[0];
const suggestionsList = document.getElementById('suggestions-list');
const sortSelect = document.getElementById('sort-select');

let favorites = [];

// Event listeners
searchButton.addEventListener('click', searchMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchMovies();
    showSuggestions(e.target.value);
});
ratingFilter.addEventListener('change', searchMovies);
sortSelect.addEventListener('change', searchMovies);
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

function searchMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRating = ratingFilter.value;
    const sortBy = sortSelect.value;

    let filteredMovies = kidsMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) &&
        (selectedRating === 'all' || movie.rating === selectedRating)
    );

    filteredMovies = filteredMovies.sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'year') {
            return a.year - b.year;
        }
        return 0;
    });

    displayMovies(filteredMovies, movieList);
}

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

function toggleFavorite(movie) {
    const index = favorites.indexOf(movie.id);
    if (index === -1) {
        favorites.push(movie.id);
    } else {
        favorites.splice(index, 1);
    }
    updateFavorites();
}

function updateFavorites() {
    const favoriteMovies = kidsMovies.filter(movie => favorites.includes(movie.id));
    displayMovies(favoriteMovies, favoritesList);
    searchMovies(); // Refresh main movie list to update favorite buttons
}

function showSuggestions(term) {
    if (term === '') {
        suggestionsList.innerHTML = '';
        return;
    }
    
    const suggestions = kidsMovies.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
    suggestionsList.innerHTML = suggestions.map(movie => `<li>${movie.title}</li>`).join('');
    
    suggestionsList.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            searchInput.value = li.textContent;
            suggestionsList.innerHTML = '';
            searchMovies();
        });
    });
}

// Initial display of all movies
displayMovies(kidsMovies, movieList);
