const div = document.querySelector(".element");

// Para poder obtener las clases CSS
div.className;  // "element shine dark-mode"
div.getAttribute("class") // "element shine dark-mode"

// Para modificar clases CSS
div.className = "element shine dark-mode";
div.setAttribute("class", "element shine dark-mode");