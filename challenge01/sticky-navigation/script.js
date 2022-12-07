const header = document.querySelector(".header");
const devNameEl = document.getElementById("dev-name");
const devBioEl = document.getElementById("dev-bio");
const devImgEl = document.getElementById("img-dev");
const devLoginEl = document.getElementById("login-dev");
const navLinks = document.querySelectorAll("nav-links");
const links = document.querySelectorAll(".links");

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

window.addEventListener("scroll", fixHeader);

function fixHeader() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active-black");
    links.forEach((li) => li.classList.add("active-nav-li"));
  } else {
    header.classList.remove("active-black");
    links.forEach((li) => li.classList.remove("active-nav-li"));
  }

  if (window.scrollY > header.offsetHeight + 700 + window.innerHeight) {
    header.classList.add("active-white");
    links.forEach((li) => li.classList.remove("active-nav-li"));
  } else {
    header.classList.remove("active-white");
  }
}
