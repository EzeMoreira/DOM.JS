const element = document.getElementById("pagina");

document.write(element);
// En la constante element guardamos la referencia al elemento div que capturamos con el id pagina,
// en caso de no encontrarlo devuelve el valor null.


//              *** Get Elements By Class Name

const elementos = document.getElementsByClassName("item");

document.write(elementos); // Muestra los divs
document.write(elementos[0]); // Primer item encontrado: los class en este caso
document.write(elementos.length); // 3 en total los elementos


//              *** Get Elements By Name

const losNombres = document.getElementsByName("nombre");

document.write(losNombres); // Muestra los inputs.


document.write("<br>", "<br>");
document.write("<br>", "<br>");

//              *** Get Elements By Tag Name

const divs = document.getElementsByTagName("div");

document.write(divs);