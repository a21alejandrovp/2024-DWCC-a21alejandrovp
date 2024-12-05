const modificarWidth = document
  .querySelector("input[class='width']")
  .addEventListener("input", (event) => {
    if (
      parseInt(event.target.value) <= 1000 &&
      parseInt(event.target.value) >= 0
    ) {
      const container = document.querySelector("div[class='container']");
      container.style.width = event.target.value + "px";
    }
  });

const modificarHeight = document
  .querySelector("input[class='height']")
  .addEventListener("input", (event) => {
    if (
      parseInt(event.target.value) <= 1000 &&
      parseInt(event.target.value) >= 0
    ) {
      const container = document.querySelector("div[class='container']");
      container.style.height = event.target.value + "px";
    }
  });
