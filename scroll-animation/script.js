const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", animaScroll);

function animaScroll() {
  const screenPosition = (window.innerHeight / 5) * 4;
  contents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top;

    if (contentTop < screenPosition) {
      content.classList.add("animeContent");
    } else content.classList.remove("animeContent");
  });
}

animaScroll();
