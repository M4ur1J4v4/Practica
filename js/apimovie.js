const cardsContainer = document.getElementById('cards-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentPage = 1;
const cardsPerPage = 10; 
const apiKey = '682f849c'; 
const searchQuery = 'movie';

async function fetchData(page) {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}&page=${page}`);
    const data = await response.json();
    return data.Search;
}

function createCard(movie) {
    return `
        <div class="col-md-4">
            <div class="card" style= "margin-bottom: 15px; height:630px;" id="tarjeta2">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}" class="card-img-top" alt="${movie.Title}">
                <div class="card-body" id="tarjeta">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text"><strong>Año:</strong> ${movie.Year}</p>
                </div>
            </div>
        </div>
    `;
}

async function loadCards(page) {
    const data = await fetchData(page);
    cardsContainer.innerHTML = data.map(createCard).join('');

    prevButton.disabled = page === 1;
    nextButton.disabled = data.length < cardsPerPage;

    cardsContainer.scrollIntoView({ behavior: 'smooth' });
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadCards(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    currentPage++;
    loadCards(currentPage);
});

// Initial load
loadCards(currentPage);
