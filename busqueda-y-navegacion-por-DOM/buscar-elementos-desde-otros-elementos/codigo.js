// Elemento Match()

const container = document.querySelector(".container");
const bigbox = document.querySelector(".bigbox");

container.matches(".container"); // Nos debe devolver true
bigbox.matches(".container .bigbox"); // True, detecta su ancestro.


// Elemento closest()

const item3 = document.querySelector(".items-3");

item3.closest(".contenedor"); // Nos mostrara el div con la clase contenedor
item3.closest(".subitem"); // Aquí nos arrojara error xq busca elementos padres no hijos.