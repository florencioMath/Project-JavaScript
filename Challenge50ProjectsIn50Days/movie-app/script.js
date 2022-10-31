const API_KEY = "api_key=934ac50f08c8f20204bbaf41bc00f59e";
const BASE_URL = "https://api.themoviedb.org/3/";
const FINAL_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMAGES_URL = "https://image.tmdb.org/t/p/original";
const SEARCH_API = BASE_URL + "search/movie?" + API_KEY + "&query=";
const timeout = 2000;

const requests = {
  fetchPopular: `${BASE_URL}discover/movie?certification_country=BR&certification.lte=G&sort_by=popularity.desc&${API_KEY}`,
  fetchHorrorMovies: `${BASE_URL}discover/movie?${API_KEY}&with_genres=27`,
  fetchComedyMovies: `${BASE_URL}discover/movie?${API_KEY}&with_genres=35`,
  fetchActionMovies: `${BASE_URL}discover/movie?${API_KEY}&with_genres=28`,
  fetchDocumentaries: `${BASE_URL}discover/movie?${API_KEY}&with_genres=27`,
};

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

const container = document.getElementById("container");
const containerResultSearch = document.getElementById("containerResultSearch");

btnSearch.addEventListener("click", (e) => {
  e.preventDefault(e);

  if (inputSearch.classList.contains("inputSearchExpand")) {
    inputSearch.classList.remove("inputSearchExpand");
    btnSearch.classList.remove("btnSearchClick");
    containerResultSearch.style.display = "none";
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
    containerResultSearch.style.display = "flex";
  }
  containerResultSearch.style.display = "none";
});

async function getMovies() {
  const response = await fetch(FINAL_URL);
  const data = await response.json();
}

async function getMoviesTrending() {
  const response = await fetch(requests.fetchPopular);
  const data = await response.json();
  const trendingMovies = await data.results;

  createMovie(trendingMovies, "Trending");
}

async function getMoviesHorror() {
  const response = await fetch(requests.fetchHorrorMovies);
  const data = await response.json();
  const horrorMovies = await data.results;

  createMovie(horrorMovies, "Horror");
}

async function getMoviesComedy() {
  const response = await fetch(requests.fetchComedyMovies);
  const data = await response.json();
  const comedyMovies = await data.results;

  createMovie(comedyMovies, "Comedy");
}

async function getMoviesAction() {
  const response = await fetch(requests.fetchActionMovies);
  const data = await response.json();
  const actionMovies = await data.results;

  createMovie(actionMovies, "Action");
}

async function getMoviesDocumentaries() {
  const response = await fetch(requests.fetchDocumentaries);
  const data = await response.json();
  const documentariesMovies = await data.results;

  createMovie(documentariesMovies, "Documentaries");
}

function createMovie(movieList, movieType) {
  const containerMovie = document.createElement("div");
  containerMovie.classList.add("containerMovie");

  const genreTitle = document.createElement("h2");
  genreTitle.classList.add("genreTitle");
  genreTitle.innerHTML = movieType;

  const row = document.createElement("div");
  row.classList.add("row");

  movieList.forEach((movie) => {
    const movieImg = document.createElement("div");
    movieImg.classList.add("movieImg");

    if (movieType != "Trending") {
      movieImg.classList.add("movieImgHorizontal");
      movieImg.style.backgroundImage = `url("${IMAGES_URL}${movie.backdrop_path}")`;
    } else {
      movieImg.style.backgroundImage = `url("${IMAGES_URL}${movie.poster_path}")`;
    }

    const a = document.createElement("a");
    a.classList.add("movieName");
    a.innerHTML = movie.title;
    a.href = "./movie/index.html";
    a.addEventListener("click", (e) => {
      window.localStorage.setItem("movie", JSON.stringify(movie));
    });

    row.appendChild(movieImg);
    movieImg.appendChild(a);
  });

  container.appendChild(containerMovie);
  containerMovie.appendChild(genreTitle);
  containerMovie.appendChild(row);
}

getMoviesTrending();

const interval = setInterval(() => {
  getMoviesHorror();

  getMoviesComedy();

  getMoviesAction();

  getMoviesDocumentaries();

  clearInterval(interval);
}, 1000);

getMovies();

async function getMoviesSearch(movie) {
  const response = await fetch(SEARCH_API + movie);
  const data = await response.json();
  const findedMovies = data.results;

  if (findedMovies.length > 0) containerResultSearch.style.display = "flex";
  else containerResultSearch.style.display = "none";
  findedMovies.forEach((movie) => {
    const a = document.createElement("a");
    a.classList.add("movieSearchAnchor");
    a.innerText = movie.title;

    a.href = "./movie/index.html";
    a.addEventListener("click", () => {
      window.localStorage.setItem("movie", JSON.stringify(movie));
    });

    containerResultSearch.appendChild(a);
  });
}

// getMoviesSearch("Halloween");
