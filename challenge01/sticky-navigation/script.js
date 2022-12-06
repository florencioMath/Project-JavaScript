const devNameEl = document.getElementById("dev-name");
const devBioEl = document.getElementById("dev-bio");
const devImgEl = document.getElementById("img-dev");
const devLoginEl = document.getElementById("login-dev");
const navLinks = document.querySelectorAll("nav-links");

async function getDataGithub() {
  let response = await fetch("https://api.github.com/users/florencioMath");
  let data = await response.json();
  creatGithubCard(data);
}
getDataGithub();

function creatGithubCard(data) {
  devNameEl.innerHTML = data.name;
  devBioEl.innerHTML = data.bio;
  devImgEl.src = data.avatar_url;
  devLoginEl.innerHTML = `@${data.login}`;
}

const header = document.querySelector(".header");
window.addEventListener("scroll", fixHeader);

function fixHeader() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  if (window.scrollY > 934) {
    navLinks.forEach((navLink) => (navLink.display = none));
  }
}
