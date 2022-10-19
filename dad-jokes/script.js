// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "83b368dd9dmsh5c9a48fe89b5871p1a712cjsn3bb4323bf068",
//     "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
//   },
// };

// fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const joke = document.getElementById("joke");

async function getjoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();

  joke.innerText = data.joke;
}

getjoke();
