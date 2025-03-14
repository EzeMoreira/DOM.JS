//                  *** .nodeName ***

// Suponiendo que tenemos un HTML con un etiqueta div con su clase container o contenedor.
// Lo que hacemos en el codigo js para utilizar esta propiedad es lo siguiente.

// const element = document.querySelector("div");

// element.nodeName;  // Aqui como resultado nos arroja en la consola la etiqueta DIV.



//                  *** textContent ***

const elementos = document.querySelector(".mensaje")

elementos.textContent;      //Aqui nos devolvera el 1° msj, "mi name is"
elementos.textContent = "Hola hola"; //Modificamos el contenido de texto
elementos.textContent;      // "Hola hola" nos devolvera.



//                  *** innerText ***

const elemen = document.querySelector(".contendor");
elemen.innerText;

// Lo cual nos devolvera:
// Hi everyone
// Mi name is
// More information



//                  *** outerText ***

const element = document.querySelector(".container");

element.innerText = "Mi name es";

element.outerText = "Me llamo ???"