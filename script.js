const kidsMovies = [
    { id: 1, title: "Toy Story", year: 1995, rating: "G", poster: "https://m.media-amazon.com/images/I/71aBLaNiBpL._AC_SY679_.jpg", description: "A story of Woody, Buzz Lightyear, and their friends as they embark on various adventures." },
    { id: 2, title: "Finding Nemo", year: 2003, rating: "G", poster: "https://m.media-amazon.com/images/I/71F-nlfkYlL._AC_SY679_.jpg", description: "The underwater adventure of a clownfish named Marlin as he searches for his missing son, Nemo." },
    { id: 3, title: "The Lion King", year: 1994, rating: "G", poster: "https://m.media-amazon.com/images/I/81D73rMY0UL._AC_SY679_.jpg", description: "The epic tale of Simba, a young lion prince who must reclaim his kingdom from his evil uncle Scar." },
    { id: 4, title: "Frozen", year: 2013, rating: "PG", poster: "https://m.media-amazon.com/images/I/71D4E-VV9lL._AC_SY679_.jpg", description: "The story of two royal sisters, Elsa and Anna, and their adventures in the magical kingdom of Arendelle." },
    { id: 5, title: "Moana", year: 2016, rating: "PG", poster: "https://m.media-amazon.com/images/I/81c7j-7hZTL._AC_SY679_.jpg", description: "The journey of a spirited Polynesian teenager, Moana, as she sets out to save her people with the help of the demigod Maui." },
    { id: 6, title: "Zootopia", year: 2016, rating: "PG", poster: "https://m.media-amazon.com/images/I/71H3D4iKhtL._AC_SY679_.jpg", description: "A bunny cop and a con artist fox work together to solve a mysterious case in the city of Zootopia." },
    { id: 7, title: "Despicable Me", year: 2010, rating: "PG", poster: "https://m.media-amazon.com/images/I/71V6eHE9jnL._AC_SY679_.jpg", description: "The story of Gru, a supervillain who adopts three orphan girls and finds his life changed forever." },
    { id: 8, title: "Coco", year: 2017, rating: "PG", poster: "https://m.media-amazon.com/images/I/81fJ1JkRZEL._AC_SY679_.jpg", description: "A young boy named Miguel travels to the Land of the Dead to discover his family's history and pursue his dream of becoming a musician." },
    { id: 9, title: "Ratatouille", year: 2007, rating: "G", poster: "https://m.media-amazon.com/images/I/71MGm2+0ISL._AC_SY679_.jpg", description: "The story of a rat who dreams of becoming a chef in Paris and teams up with a young cook to make his dreams come true." },
    { id: 10, title: "How to Train Your Dragon", year: 2010, rating: "PG", poster: "https://m.media-amazon.com/images/I/81HLO9i9NhL._AC_SY679_.jpg", description: "A young Viking befriends a dragon and challenges his tribe's beliefs about the creatures." },
    { id: 11, title: "Kung Fu Panda", year: 2008, rating: "PG", poster: "https://m.media-amazon.com/images/I/81Y8xIqkIIL._AC_SY679_.jpg", description: "The tale of a clumsy panda who becomes a kung fu hero and must defend his valley from a dangerous enemy." },
    { id: 12, title: "The Incredibles", year: 2004, rating: "PG", poster: "https://m.media-amazon.com/images/I/71VOg7G4akL._AC_SY679_.jpg", description: "The adventures of a family of superheroes who come out of retirement to save the world from a new threat." },
    { id: 13, title: "Tangled", year: 2010, rating: "PG", poster: "https://m.media-amazon.com/images/I/91D8G1X0+5L._AC_SY679_.jpg", description: "The story of Rapunzel, a princess with magical long hair who escapes her tower with the help of a charming thief." },
    { id: 14, title: "Madagascar", year: 2005, rating: "PG", poster: "https://m.media-amazon.com/images/I/71fZq2vN5eL._AC_SY679_.jpg", description: "The adventure of four zoo animals who end up stranded on the island of Madagascar and learn to survive in the wild." },
    { id: 15, title: "Wreck-It Ralph", year: 2012, rating: "PG", poster: "https://m.media-amazon.com/images/I/71Lxmt43GFL._AC_SY679_.jpg", description: "The story of a video game villain who wants to be a hero and sets off on a journey across various game worlds." },
    { id: 16, title: "Inside Out", year: 2015, rating: "PG", poster: "https://m.media-amazon.com/images/I/71SQJd1GVHL._AC_SY679_.jpg", description: "A look inside the mind of an 11-year-old girl as her emotions, Joy, Sadness, Fear, Anger, and Disgust, navigate her life changes." },
    { id: 17, title: "The Lego Movie", year: 2014, rating: "PG", poster: "https://m.media-amazon.com/images/I/71FDQEDfoAL._AC_SY679_.jpg", description: "An ordinary Lego minifigure is mistakenly identified as the key to saving the world and goes on an epic quest." },
    { id: 18, title: "Arthur Christmas", year: 2011, rating: "PG", poster: "https://m.media-amazon.com/images/I/81ZSGzDP+KL._AC_SY679_.jpg", description: "Santa's clumsy son, Arthur, sets out to deliver a forgotten present on Christmas Eve." },
    { id: 19, title: "The Peanuts Movie", year: 2015, rating: "G", poster: "https://m.media-amazon.com/images/I/71ZPa8V7+LL._AC_SY679_.jpg", description: "Charlie Brown embarks on a quest to win the heart of the Little Red-Haired Girl, with the help of his faithful beagle, Snoopy." },
    { id: 20, title: "Paw Patrol: The Movie", year: 2021, rating: "G", poster: "https://m.media-amazon.com/images/I/71LSoqRh09L._AC_SY679_.jpg", description: "The Paw Patrol pups must save Adventure City from the nefarious Mayor Humdinger." }
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
const authModal = document.getElementById('auth-modal');
const authForm = document.getElementById('auth-form');
const authSubmit = document.getElementById('auth-submit');
const authSwitch = document.getElementById('auth-switch');
const reviewInput = document.getElementById('review-input');
const submitReview = document.getElementById('submit-review');
const reviewList = document.getElementById('review-list');
const authNav = document.getElementById('auth-nav');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const logoutButton = document.getElementById('logout-button');

let favorites = [];
let reviews = {};
let currentUser = null;

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
authSubmit.addEventListener('click', handleAuth);
authSwitch.addEventListener('click', switchAuthMode);
submitReview.addEventListener('click', addReview);
loginButton.addEventListener('click', () => openAuthModal('Login'));
registerButton.addEventListener('click', () => openAuthModal('Register'));
logoutButton.addEventListener('click', logout);

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
        <div class="rating">
            <span class="rate-btn" data-id="${movie.id}" data-rating="1">⭐</span>
            <span class="rate-btn" data-id="${movie.id}" data-rating="2">⭐⭐</span>
            <span class="rate-btn" data-id="${movie.id}" data-rating="3">⭐⭐⭐</span>
            <span class="rate-btn" data-id="${movie.id}" data-rating="4">⭐⭐⭐⭐</span>
            <span class="rate-btn" data-id="${movie.id}" data-rating="5">⭐⭐⭐⭐⭐</span>
        </div>
    `;
    movieElement.addEventListener('click', () => showMovieDetails(movie));

    const favoriteButton = movieElement.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(movie);
    });

    const rateButtons = movieElement.querySelectorAll('.rate-btn');
    rateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            rateMovie(movie, parseInt(e.target.dataset.rating));
        });
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
    displayReviews(movie.id);
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

function openAuthModal(mode) {
    document.getElementById('auth-title').textContent = mode;
    authModal.style.display = 'block';
}

function handleAuth() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (document.getElementById('auth-title').textContent === 'Login') {
        // Handle login logic (mock)
        currentUser = username;
        localStorage.setItem('user', username);
        authNav.querySelector('#login-button').style.display = 'none';
        authNav.querySelector('#register-button').style.display = 'none';
        authNav.querySelector('#logout-button').style.display = 'inline';
        authModal.style.display = 'none';
    } else {
        // Handle registration logic (mock)
        alert('Registered successfully!');
        authModal.style.display = 'none';
    }
}

function switchAuthMode() {
    const title = document.getElementById('auth-title');
    if (title.textContent === 'Login') {
        title.textContent = 'Register';
        authSubmit.textContent = 'Register';
        authSwitch.textContent = 'Login';
    } else {
        title.textContent = 'Login';
        authSubmit.textContent = 'Login';
        authSwitch.textContent = 'Register';
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('user');
    authNav.querySelector('#login-button').style.display = 'inline';
    authNav.querySelector('#register-button').style.display = 'inline';
    authNav.querySelector('#logout-button').style.display = 'none';
}

function addReview() {
    const review = reviewInput.value;
    if (currentUser && review) {
        const movieId = currentMovieId; // Assume currentMovieId is a global variable tracking the current movie
        if (!reviews[movieId]) reviews[movieId] = [];
        reviews[movieId].push({ user: currentUser, review });
        displayReviews(movieId);
        reviewInput.value = '';
    } else {
        alert('You must be logged in and write a review.');
    }
}

function displayReviews(movieId) {
    if (!reviews[movieId]) {
        reviewList.innerHTML = '<p>No reviews yet.</p>';
        return;
    }

    reviewList.innerHTML = reviews[movieId].map(r => `<p><strong>${r.user}:</strong> ${r.review}</p>`).join('');
}

function rateMovie(movie, rating) {
    alert(`Rated ${movie.title} with ${rating} stars!`);
}
