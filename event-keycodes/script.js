function eventKeycode() {
  const container = document.getElementById("container");

  window.addEventListener("keydown", ({ key, keyCode, code }) => {
    const keysPressed = [key, keyCode, code];

    if (
      keyCode == "32" ||
      keyCode == "9" ||
      keyCode == "38" ||
      keyCode == "40"
    ) {
      event.preventDefault();
    }

    const div = document.createElement("div");
    div.classList.add("containerKey");
    container.appendChild(div);

    container.innerText = "";
    keysPressed.forEach((key) => {
      creatKeyElement(div);
    });
    container.appendChild(div);
  });

  function creatKeyElement(div) {
    return (div.innerHTML = `
            <div class="key">
                <span>event.key</span>
                ${event.key === " " ? "Space" : event.key}
            </div> 
            <div class="key">
                <span>event.keyCode</span>
                ${event.keyCode}
            </div>
            <div class="key">
                <span>event.key</span>
                ${event.code}
            </div>`);
  }
}

eventKeycode();
