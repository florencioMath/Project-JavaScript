function incrementingCounter() {
  const counters = document.querySelectorAll("#counter");

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = Number(counter.getAttribute("data-target"));
      const count = Number(counter.innerText);
      const increment = target / 300;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

incrementingCounter();
