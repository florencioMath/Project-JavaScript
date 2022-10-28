const IMAGES_URL = "https://image.tmdb.org/t/p/original";
const movie = JSON.parse(localStorage.getItem("movie"));
const container = document.getElementById("container");
const wrapperMovie = document.getElementById("wrapperMovie");
const wrapperImg = document.getElementById("wrapperImg");
const wrapperInfos = document.getElementById("wrapperInfos");
const paragraph = document.getElementById("paragraph");
const movieTitle = document.getElementById("movieTitle");
const wrapperStats = document.getElementById("wrapperStats");
const popularity = document.getElementById("popularity");
const releaseDate = document.getElementById("releaseDate");
const voteAverage = document.getElementById("voteAverage");

console.log(movie);

document.title = movie.title;

wrapperImg.style.backgroundImage = `url("${IMAGES_URL}${movie.backdrop_path}")`;
console.log(typeof movie.release_date);

movieTitle.innerText = movie.title;
paragraph.innerText = movie.overview;
popularity.innerText = Math.round(movie.popularity);
voteAverage.innerText = movie.vote_average;
releaseDate.innerText = movie.release_date;
