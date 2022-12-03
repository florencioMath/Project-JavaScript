const cardHeaderEl = document.getElementById("card-header");
const cardTitleEl = document.getElementById("card-title");
const cardTextEl = document.getElementById("card-text");
const authorNameEl = document.getElementById("author-name");
const authorDataEl = document.getElementById("author-data");
const authorImageEl = document.getElementById("author-image");
const animatedBgEl = document.querySelectorAll(".animated-bg");

setTimeout(getData, 2000);

function getData() {
  cardHeaderEl.innerHTML = `<img
      class= "header-image"
      src="https://images.unsplash.com/photo-1642418379704-cee4daa4679b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
      alt="Card header"
    />`;
  cardTitleEl.innerHTML = "This is The Title!";
  cardTextEl.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis, ratione perspiciatis cumque voluptatum minus recusandae voluptate nisi magnam architecto.";
  authorNameEl.innerHTML = "Matheus";
  authorDataEl.innerHTML = "1st of December, 2022";
  authorImageEl.innerHTML = `<img
  class="author-image"
  src="https://avatars.githubusercontent.com/u/68713424?v=4"
  alt="Developer profile"
/>`;
  animatedBgEl.forEach((backgroundEl) =>
    backgroundEl.classList.remove("animated-bg")
  );
}
