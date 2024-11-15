// EJERCICIOS DOM.PDF (https://mestre.iessanclemente.net/pluginfile.php/2049/mod_resource/content/65/DOM.pdf)
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------

// CLONADO DE NODOS - EJERCICIO 6 - PÁGINA 23
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------

let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

const createTree = function createTree(data) {
  let ul = document.createElement("ul");

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let li = document.createElement("li");
      li.textContent = key;

      if (typeof data[key] === "object" && Object.keys(data[key]).length > 0) {
        li.append(createTree(data[key]));
      }

      ul.append(li);
    }
  }

  return ul;
};

document.body.append(createTree(arbore));
