const cambiarDiv = document
  .querySelector("div")
  .addEventListener("click", () => {
    const div = document.querySelector("div");
    const input = document.createElement("textarea");
    input.style.height = div.clientHeight + "px";
    input.style.width = div.clientWidth + "px";
    input.value = div.innerText;
    input.type = "textarea";
    document.body.append(input);
    div.remove();

    const cambiarValor = function cambiarValor(event) {
      if (event.key == "Enter" || event.type == "focusout") {
        div.innerText = input.value;
        document.body.append(div);
        input.remove();
      }
    };

    input.addEventListener("keypress", cambiarValor);
    input.addEventListener("focusout", cambiarValor);
  });
