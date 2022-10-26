const API_KEY = "api_key=934ac50f08c8f20204bbaf41bc00f59e";
const BASE_URL = "http://api.themoviedb.org/3/";
const FINAL_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMAGES_URL = "http://image.tmdb.org/t/p/";
const SEARCH_API = BASE_URL + "search/movie?" + API_KEY + "&query=";
const timeout = 2000;

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

btnSearch.addEventListener("click", (e) => {
  e.preventDefault(e);

  if (inputSearch.classList.contains("inputSearchExpand")) {
    inputSearch.classList.remove("inputSearchExpand");
    btnSearch.classList.remove("btnSearchClick");
  } else {
    inputSearch.classList.add("inputSearchExpand");
    btnSearch.classList.add("btnSearchClick");
    inputSearch.focus();
  }
});

inputSearch.addEventListener("keyup", ({ target }) => {
  const movieToSearch = target.value;
  if (movieToSearch.length > 0) {
    getMoviesSearch(movieToSearch);
  }
});

async function getMovies() {
  const response = await fetch(FINAL_URL);
  const data = await response.json();
  // console.log(data);
}

getMovies();

async function getMoviesSearch(movie) {
  const response = await fetch(SEARCH_API + movie);
  const data = await response.json();
  console.log(data);
}

// getMoviesSearch("Halloween");
