function dadjokes() {
  const joke = document.getElementById("joke");
  const btnAnotherJoke = document.getElementById("btnAnotherJoke");

  async function getjoke() {
    const options = {
      headers: { Accept: "application/json" },
    };

    try {
      const response = await fetch("https://icanhazdadjoke.com", options);
      const data = await response.json();

      joke.innerText = data.joke;
    } catch (error) {
      joke.innerText = "Failed to load joke.";
      console.log(error);
    }
  }

  btnAnotherJoke.addEventListener("click", () => {
    getjoke();
  });

  getjoke();
}

dadjokes();
