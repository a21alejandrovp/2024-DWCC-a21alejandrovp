const crearFormulario = function crearFormulario() {
  const body = document.body;

  const form = document.createElement("form");
  body.append(form);

  const input = document.createElement("input");
  input.placeholder = "ID";
  input.type = "number";
  input.min = 1;
  input.max = 10;
  form.append(input);

  const br = document.createElement("br");
  form.append(br);

  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "Enviar";
  form.append(button);

  const buscarUsuarioPorID = function buscarUsuarioPorID() {
    if (document.querySelector("table")) {
      const tableRemove = document.querySelector("table");
      tableRemove.remove();
    }

    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const value = input.value;

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const userId = document.createElement("th");
        userId.innerText = "userId";
        const id = document.createElement("th");
        id.innerText = "id";
        const title = document.createElement("th");
        title.innerText = "title";
        const body = document.createElement("th");
        body.innerText = "body";
        tr.append(userId, id, title, body);
        thead.append(tr);
        table.append(thead);

        const tbody = document.createElement("tbody");
        for (let i = 0; i < json.length; i++) {
          if (json[i].userId == value) {
            const tr = document.createElement("tr");
            const td0 = document.createElement("td");
            td0.innerText = json[i].userId;
            const td1 = document.createElement("td");
            td1.innerText = json[i].id;
            const td2 = document.createElement("td");
            td2.innerText = json[i].title;
            const td3 = document.createElement("td");
            td3.innerText = json[i].body;
            tr.append(td0, td1, td2, td3);
            tbody.append(tr);
          }
        }
        table.append(tbody);

        document.body.append(table); //PREGUNTAR
      });
  };

  const enviarDatos = document
    .querySelector("button")
    .addEventListener("click", buscarUsuarioPorID);
};

crearFormulario();
