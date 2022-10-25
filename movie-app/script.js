const api_key = "api_key=934ac50f08c8f20204bbaf41bc00f59e";
const base_uri = "http://api.themoviedb.org/3/";
const final_url =
  base_uri + "/discover/movie?sort_by=popularity.desc&" + api_key;
const images_uri = "http://image.tmdb.org/t/p/";
const timeout = 2000;

async function getMovies() {
  const response = await fetch(final_url);
  const data = await response.json();
  console.log(data);
}

getMovies();
