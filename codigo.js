// En este caso primero vamos a trabajar sobre el body

document.body.children.length; //Aquí lo que nos devolvería sería 1
document.body.children;        //Esto nos arroja el primer div con el id aplicacion
document.body.parentElement;   //Esto sería el HTML

const app = document.querySelector("#aplicacion")

app.children;    // En un array nos arrojara div, header, p y a
app.firstElementChild; // El primer elemento que seria div con la class header
app.lastElementChild; // Ultimo elemento a href

const a = app.querySelector("a")

a.previousElementSibling; 
// Aqui nos ubicamos sobre el ultimo elemento de aplicacion, entonces nos devolvera "<p>" que es el anterior a
// <a> que era donde nos encontrabamos.

a.nextElementSibling; // Aqui devuelve null porque luego de a no hay mas elementos.