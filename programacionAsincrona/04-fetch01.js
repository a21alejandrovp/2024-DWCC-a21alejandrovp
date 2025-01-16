function leerFichero() {
  const url =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);

      let header = document.querySelector("header");
      let h1 = document.createElement("h1");
      h1.innerText = json.squadName;
      header.append(h1);

      let p = document.createElement("p");
      p.innerText = "Hometown: " + json.homeTown + " // Formed: " + json.formed;
      header.append(p);

      let section = document.querySelector("section");

      for (let i = 0; i < json.members.length; i++) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        h2.innerText = json.members[i].name;
        let p1 = document.createElement("p");
        p1.innerText = json.members[i].secretIdentity;
        let p2 = document.createElement("p");
        p2.innerText = json.members[i].age;
        let p3 = document.createElement("p");
        p3.innerText = "Superpowers:";
        let ul = document.createElement("ul");

        for (let j = 0; j < json.members[i].powers.length; j++) {
          let li = document.createElement("li");
          li.innerText = json.members[i].powers[j];
          ul.append(li);
        }

        article.append(h2);
        article.append(p1);
        article.append(p2);
        article.append(p3);
        article.append(ul);

        section.append(article);
      }
    });
}

leerFichero();
