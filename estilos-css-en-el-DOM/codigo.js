const div = document.querySelector(".element");

// Para poder obtener las clases CSS
div.className;  // "element shine dark-mode"
div.getAttribute("class") // "element shine dark-mode"

// Para modificar clases CSS
div.className = "element shine dark-mode";
div.setAttribute("class", "element shine dark-mode");


// Como cambiar de dark-mode a light-mode

const div = document.querySelector(".element");

// Obtener clases CSS
div.className;  // "element shine dark-mode"
const classnames = div.className.split(" "); // ["element", "shine", "dark-mode"]
classnames[2] = "light-mode";
div.className = classnames.join(" "); // element shine light-mode



//                  checkVisibility()

const element = document.createElement("div");

element.checkVisibility(); // Da false xq no esta en el DOM

document.body.append(element);  // Primero lo añadimos al body
element.checkVisibility();      // Da true, xq ahora si esta en el DOM.

element.setAttribute("hidden", ""); //Añadimos el atributo hidden
element.checkVisibility();          //Da falso porque esta oculto por hidden

element.removeAttribute("hidden");
element.className = "hide";         //Le añadimos una clase que tiene display:none
element.checkVisibility();          //false esta oculto por display:none