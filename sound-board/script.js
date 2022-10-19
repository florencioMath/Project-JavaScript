function soundBoard() {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  sounds.forEach((sound) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "wrapper";

    const song = document.createElement("div");
    song.classList.add("buttonCreated");
    song.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

    const btnPlay = document.createElement("button");
    btnPlay.classList.add("btnPlay");
    btnPlay.id = "btnPlay";

    const btnStop = document.createElement("button");
    btnStop.classList.add("btnStop");

    btnPlay.addEventListener("click", () => {
      document.getElementById(sound).play();

      btnPlay.style.display = "none";
      btnStop.style.display = "flex";
    });

    btnStop.addEventListener("click", () => {
      songStop();
      btnPlay.style.display = "flex";
      btnStop.style.display = "none";
    });

    document.getElementById("buttons").appendChild(wrapper);
    wrapper.appendChild(btnPlay);
    wrapper.appendChild(btnStop);
    wrapper.appendChild(song);
  });

  function songStop() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
      song.pause();
    });
  }
}

soundBoard();
