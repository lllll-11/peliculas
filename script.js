document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const movieResults = document.getElementById('movieResults');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchTerm = document.getElementById('search').value;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=780b739607748501f4abe2c9d24c5dd1&query=${searchTerm}`);
        const data = await response.json();

        displayResults(data.results);
    });

    function displayResults(results) {
        movieResults.innerHTML = '';

        results.forEach(movie => {
            const movieResult = document.createElement('div');
            movieResult.classList.add('movieResult');

            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;

            const title = document.createElement('p');
            title.textContent = movie.title;

            movieResult.appendChild(img);
            movieResult.appendChild(title);

            movieResults.appendChild(movieResult);
        });
    }
});
