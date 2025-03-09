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