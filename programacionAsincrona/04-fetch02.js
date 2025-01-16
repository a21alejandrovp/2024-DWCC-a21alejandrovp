function mostrarDatos() {
  const url = "https://randomuser.me/api/";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let nome = document.createElement("p");
      let apelidos = document.createElement("p");
      let correo = document.createElement("p");
      let tel = document.createElement("p");
      let cidade = document.createElement("p");
      let pais = document.createElement("p");
      let idade = document.createElement("p");

      nome.innerText = json.results[0].name.first;

      document.body.append(nome);
    });
}

mostrarDatos();
