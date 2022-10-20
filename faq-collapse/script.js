const faqToggle = document.querySelectorAll(".faqToggle");

faqToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
