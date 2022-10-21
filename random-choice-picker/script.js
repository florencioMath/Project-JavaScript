const textarea = document.getElementById("choices");
const tags = document.getElementById("tags");

let tagsArray = [];

textarea.addEventListener("input", (event) => {
  console.log(
    event.target.value
      .split(",")
      .map((string) => string.trim())
      .filter((string) => string !== ",")
  );

  tags.innerText = event.target.value.split(",").map((string) => string.trim());

  //   let text = textarea.value.split(",").toString().trim();
  //   //   console.log(event.target.value);
  //   //   tagsArray = text.trim();
  //   tagsArray = [text.trim()];
  //   console.log("textare", textarea.value.split(",").toString().trim());
  //   console.log("tagsArray", tagsArray);
  //   tags.innerHTML = tagsArray;
});

// console.log(tagsArray);
