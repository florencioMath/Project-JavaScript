const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("buttonCreated");
  btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

  btn.addEventListener("click", () => {
    songStop();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function songStop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();

    song.currentTime = 0;
  });
}
