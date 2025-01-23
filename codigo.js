const element = document.getElementById("pagina");

document.write(element);
// En la constante element guardamos la referencia al elemento div que capturamos con el id pagina,
// en caso de no encontrarlo devuelve el valor null.


//              *** Get Elements By Class Name

const elementos = document.getElementsByClassName("item");

document.write(elementos); // Muestra los divs
document.write(elementos[0]); // Primer item encontrado: los class en este caso
document.write(elementos.length);