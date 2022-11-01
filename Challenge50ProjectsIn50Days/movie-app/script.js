import API from "./api.js";

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

async function getMoviesTrending() {
  const response = await fetch(API.requests.fetchPopular);
  const data = await response.json();
  const trendingMovies = await data.results;

  createMovie(trendingMovies, "Trending");
}

async function getMoviesHorror() {
  const response = await fetch(API.requests.fetchHorrorMovies);
  const data = await response.json();
  const horrorMovies = await data.results;

  createMovie(horrorMovies, "Horror");
}

async function getMoviesComedy() {
  const response = await fetch(API.requests.fetchComedyMovies);
  const data = await response.json();
  const comedyMovies = await data.results;

  createMovie(comedyMovies, "Comedy");
}

async function getMoviesAction() {
  const response = await fetch(API.requests.fetchActionMovies);
  const data = await response.json();
  const actionMovies = await data.results;

  createMovie(actionMovies, "Action");
}

async function getMoviesDocumentaries() {
  const response = await fetch(API.requests.fetchDocumentaries);
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
      movieImg.style.backgroundImage = `url("${API.IMAGES_URL}${movie.backdrop_path}")`;
    } else {
      movieImg.style.backgroundImage = `url("${API.IMAGES_URL}${movie.poster_path}")`;
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

async function getMoviesSearch(movie) {
  const response = await fetch(API.SEARCH_API + movie);
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
