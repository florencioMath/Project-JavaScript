import apiMovie from "./api/apiMovie.js";
const inputSearch = document.getElementById("search");
const searchResultList = document.getElementById("searchResultList");

async function searchMovie(movie) {
  let moviesArray = [];
  const response = await fetch(apiMovie.SEARCH_API + movie);
  const data = await response.json();
  const movieResult = await data.results;
  moviesArray = movieResult?.map((movie) => (moviesArray = movie.title));
  return moviesArray;
}

inputSearch.addEventListener("keyup", filterMovies);

async function filterMovies(e) {
  if (e.target.value.length != 0) {
    const result = await searchMovie(e.target.value);
    searchResultList.innerHTML = "";

    const filtered = result?.filter((movie) => {
      const movieNormalized = movie.toLowerCase();
      const searchNormalized = e.target.value.toLowerCase();
      return movieNormalized.includes(searchNormalized);
    });
    creatList(filtered);
  }

  if (e.target.value <= 0)
    searchResultList.innerHTML = `<li>Movies will be show here</li>`;
}

function creatList(movies) {
  movies?.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = movie;
    searchResultList.appendChild(li);
  });
}
