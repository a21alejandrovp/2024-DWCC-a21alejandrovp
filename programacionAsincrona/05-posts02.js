function crearFormulario() {
  url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      for (let i = 0; i < json.length; i++) {
        const div = document.createElement("div");
        div.innerText = json[i].title;
        document.body.append(div);

        const x = document.createElement("input");
        x.type = "submit";
        x.value = "X";
        div.append(x);
      }
    });

  const eliminarTitulo = function eliminarTitulo(event) {
    if (event.target.tagName == "INPUT" && event.target.value == "X") {
      const div = event.target.closest("div");
      div.remove();
    }
  };

  document.body.addEventListener("click", eliminarTitulo);

  const form = document.createElement("form");
  form.method = "POST";
  document.body.append(form);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Introduce el título";
  form.append(input);

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Engadir";
  form.append(submit);

  const engadirTitulo = function engadirTitulo(e) {
    e.preventDefault(); //IMPORTANTE

    const nuevoTitulo = document.querySelector("input").value;
    const nuevoDiv = document.createElement("div");
    nuevoDiv.innerText = nuevoTitulo;

    const x = document.createElement("input");
    x.type = "submit";
    x.value = "X";
    nuevoDiv.append(x);

    document.body.append(nuevoDiv);
  };

  form.addEventListener("submit", engadirTitulo);
}

crearFormulario();
