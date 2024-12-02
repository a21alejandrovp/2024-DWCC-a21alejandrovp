const añadirElementos = document
  .querySelector("input[class = 'buttonEngadir']")
  .addEventListener("click", () => {
    const value = document.querySelector("input[class = 'inputEngadir']").value;
    const ul = document.querySelector("ul[class = 'items']");
    const divul = document.createElement("div");
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = value;

    const input = document.createElement("input");
    input.type = "button";
    input.value = "X";
    input.classList.add("X");

    li.append(p, input);
    divul.append(li);
    ul.append(divul);

    if (document.querySelector("input[class = 'X']") != null) {
      const eliminarElementos = document
        .querySelector("input[class = 'X']")
        .addEventListener("click", (event) => {
          if (event.target.tagName == "INPUT") {
          }
        });
    }
  });
