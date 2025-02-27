const cambiarAltura = document
  .querySelector("input[id='heightInput']")
  .addEventListener("input", (event) => {
    const div = document.querySelector("div");
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 1000
    ) {
      div.style.height = event.target.value + "px";
    }
  });

const cambiarAncho = document
  .querySelector("input[id='widthInput']")
  .addEventListener("input", (event) => {
    const div = document.querySelector("div");
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 1000
    ) {
      div.style.width = event.target.value + "px";
    }
  });
