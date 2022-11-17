function blurringLoading() {
  const backgroundImage = document.getElementById("backgroundImage");
  const percentagem = document.getElementById("percentagem");

  let loading = 0;
  let bluring = 100;

  function bluringThings() {
    loading++;
    bluring--;

    if (loading >= 100) {
      clearInterval(counting);
    }
    percentagem.innerText = `${loading}%`;
    backgroundImage.style.filter = `blur(${bluring}px)`;
    percentagem.style.opacity = `${bluring}%`;
  }

  let counting = setInterval(bluringThings, 20);
}

blurringLoading();
