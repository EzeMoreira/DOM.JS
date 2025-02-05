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



//              *** Get Elements By Tag Name

const divs = document.getElementsByTagName("div");

document.write(divs);




                //     A partir de esta linea comienzan los ejemplos para querySelector()

const page = document.querySelector("#page");
const info = document.querySelector(".main .info");

//En este primer ejemplo al metodo querySelector indicamos por parametro un selector, 
// al tratarse de un id utilizamos # para capturarlo.

//En el segundo recuperamos el primer elemento con clase info que este dentro de otro clase 
//con clase main.



                //      querySelectorAll()

//Obtener todos los elementos con clase "info"
const infos = document.querySelectorAll(".info");

//Obtener todos los elementos con atributo "nombre"
const nicksNames = document.querySelectorAll('[nombre="nickNames]');

//Obtener todos los elementos div de la pagina HTML
const divS = document.querySelectorAll("div");