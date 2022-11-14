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

// console.log("result: ", result);

inputSearch.addEventListener("keyup", filterMovies);

async function filterMovies(e) {
  const result = await searchMovie(e.target.value);
  searchResultList.innerHTML = "";
  // console.log("e.target.value", e.target.value);

  const filtered = result?.filter((movie) => {
    const movieNormalized = movie.toLowerCase();
    const searchNormalized = e.target.value.toLowerCase();
    return movieNormalized.includes(searchNormalized);
  });
  // console.log("filtered: ", filtered);

  creatList(filtered);
  if (e.target.value <= 0) searchResultList.innerHTML = "";
}

function creatList(movies) {
  movies?.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = movie;
    searchResultList.appendChild(li);
  });
  // console.log(searchResultList);
}
