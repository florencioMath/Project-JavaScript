async function getDataGithub() {
  let response = await fetch("https://api.github.com/users/florencioMath");
  let data = await response.json();
  return data;
}

getDataGithub();
