const API = {
  API_KEY: "api_key=934ac50f08c8f20204bbaf41bc00f59e",
  BASE_URL: "https://api.themoviedb.org/3/",
  FINAL_URL:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=934ac50f08c8f20204bbaf41bc00f59e",
  IMAGES_URL: "https://image.tmdb.org/t/p/original",
  SEARCH_API:
    "https://api.themoviedb.org/3/search/movie?api_key=934ac50f08c8f20204bbaf41bc00f59e&query=",

  requests: {
    fetchPopular:
      "https://api.themoviedb.org/3/discover/movie?certification_country=BR&certification.lte=G&sort_by=popularity.desc&api_key=934ac50f08c8f20204bbaf41bc00f59e",
    fetchHorrorMovies:
      "https://api.themoviedb.org/3/discover/movie?api_key=934ac50f08c8f20204bbaf41bc00f59e&with_genres=27",
    fetchComedyMovies:
      "https://api.themoviedb.org/3/discover/movie?api_key=934ac50f08c8f20204bbaf41bc00f59e&with_genres=35",
    fetchActionMovies:
      "https://api.themoviedb.org/3/discover/movie?api_key=934ac50f08c8f20204bbaf41bc00f59e&with_genres=28",
    fetchDocumentaries:
      "https://api.themoviedb.org/3/discover/movie?api_key=934ac50f08c8f20204bbaf41bc00f59e&with_genres=27",
  },
};

export default API;
