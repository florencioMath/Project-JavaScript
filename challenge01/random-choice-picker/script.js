function randomChoicePicker() {
  const textarea = document.getElementById("textarea");
  const tagsField = document.getElementById("tagsField");
  const btnChoicePicker = document.getElementById("btnChoicePicker");
  const btnChoicePickerClear = document.getElementById("btnChoicePickerClear");

  textarea.focus();

  textarea.addEventListener("keyup", (event) => {
    creatTags(event.target.value);

    pickRandomTag();
    if (textarea.value.length > 0) {
      btnChoicePickerClear.disabled = false;
    }
  });

  btnChoicePickerClear.addEventListener("click", (e) => {
    e.preventDefault(e);
    textarea.value = "";
    tagsField.innerHTML = "Your tags will show here.";
    btnChoicePickerClear.disabled = true;
    btnChoicePicker.disabled = true;
  });

  btnChoicePicker.addEventListener("click", (e) => {
    e.preventDefault(e);
    setTimeout(() => {
      textarea.value = "";
    }, 100);

    randomSelect();
  });

  function creatTags(input) {
    const tags = input
      .split(",")
      .map((string) => string.trim())
      .filter((string) => string !== "");

    if (tags.length > 0) {
      btnChoicePicker.disabled = false;
      tagsField.innerHTML = "";
    } else {
      tagsField.innerHTML = "Your tags will show here.";
    }

    tags.forEach((tag) => {
      const span = document.createElement("span");
      span.classList.add("span");
      span.innerHTML = tag;
      tagsField.appendChild(span);
    });
  }

  function randomSelect() {
    const times = 50;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      if (randomTag !== undefined) {
        highlightTag(randomTag);

        setTimeout(() => {
          unHighlightTag(randomTag);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  }

  function pickRandomTag() {
    const tags = document.querySelectorAll(".span");
    return tags[Math.floor(Math.random() * tags.length)];
  }

  function highlightTag(tag) {
    tag.classList.add("highlight");
  }

  function unHighlightTag(tag) {
    tag.classList.remove("highlight");
  }
}

randomChoicePicker();
