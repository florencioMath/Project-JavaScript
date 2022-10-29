const API_KEY = "api_key=934ac50f08c8f20204bbaf41bc00f59e";
const BASE_URL = "https://api.themoviedb.org/3/";
const FINAL_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMAGES_URL = "https://image.tmdb.org/t/p/original";
const SEARCH_API = BASE_URL + "search/movie?" + API_KEY + "&query=";
const timeout = 2000;

const requests = {
  fetchPopular: `${BASE_URL}discover/movie?certification_country=BR&certification.lte=G&sort_by=popularity.desc&${API_KEY}`,
};

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

const containerMovie = document.getElementById("containerMovie");
containerMovie.classList.add("containerMovieTrending");

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
}

async function getMoviesTrending() {
  const response = await fetch(requests.fetchPopular);
  const data = await response.json();
  const trendingMovies = data.results;

  const genreTitle = document.getElementById("genreTitle");
  genreTitle.innerHTML = "Trending Moveis";

  const row = document.getElementById("row");
  row.classList.add("row");

  trendingMovies.forEach((movie) => {
    const movieImg = document.createElement("div");
    movieImg.classList.add("movieImg");
    const a = document.createElement("a");
    a.classList.add("movieName");

    movieImg.style.backgroundImage = `url("${IMAGES_URL}${movie.poster_path}")`;
    a.innerHTML = movie.title;

    a.href = "./movie/index.html";

    a.addEventListener("click", (e) => {
      window.localStorage.setItem("movie", JSON.stringify(movie));
    });
    console.log(a);
    row.appendChild(movieImg);
    movieImg.appendChild(a);
  });
}

getMoviesTrending();

getMovies();

async function getMoviesSearch(movie) {
  const response = await fetch(SEARCH_API + movie);
  const data = await response.json();
  console.log(data);
}

// getMoviesSearch("Halloween");
