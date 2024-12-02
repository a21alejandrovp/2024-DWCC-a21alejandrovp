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
  });

const eliminarElementos = document
  .querySelector("ul[class = 'items']")
  .addEventListener("click", (event) => {
    if (event.target.tagName == "INPUT") {
      if (window.confirm("Deseas eliminar el elemento?")) {
        const li = event.target.closest("li").remove();
      }
    }
  });

const eliminarTodosElementos = document
  .querySelector("input[class = 'buttonBorrar']")
  .addEventListener("click", () => {
    const len = document.querySelector("ul[class = 'items']").children.length;
    let array = Array.from(
      document.querySelector("ul[class = 'items']").children
    );
  });
