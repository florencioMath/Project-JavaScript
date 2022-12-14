import apiMovie from "./api/apiMovie.js";
const inputSearch = document.getElementById("search");
const searchResult = document.getElementById("searchResult");
const searchResultList = document.getElementById("searchResultList");
const icon = document.getElementById("icon");

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
    searchResult.classList.add("active");
    inputSearch.classList.add("active");
    searchResultList.innerHTML = "";
    icon.classList.add("active");
    const result = await searchMovie(e.target.value);

    const filtered = result?.filter((movie) => {
      const movieNormalized = movie.toLowerCase();
      const searchNormalized = e.target.value.toLowerCase();
      return movieNormalized.includes(searchNormalized);
    });
    creatList(filtered);
  }

  if (e.target.value <= 0) {
    searchResult.classList.remove("active");
    inputSearch.classList.remove("active");
    icon.classList.remove("active");
  }
}

function creatList(movies) {
  movies?.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("movieList");
    li.innerHTML = movie;
    searchResultList.appendChild(li);
  });
}
