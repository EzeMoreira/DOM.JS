const element = document.querySelector("div"); //Aqui capturamos el elemento div con la clase container

element.id = "page" //Capturamos el id del elemento y su clase, id = page, class = container
element.style = "color: red" //Colocacion de estilo
element.className = "data"; //Ademas del estilo, aqui renombramos la clase con el nombre data

//Casos como la última linea de codigo donde indicamos className en lugar de class, esto ocurre porque
//es una palabra reservada para las clases de Javascript, como tambien ocurre con For para bucles.


const elemento = document.querySelector("#page")

elemento.hasAttribute(); //Esto nos devolvera true xq tiene 3 elementos
elemento.hasAttribute("data-number"); //Esto es true xq data number si existe
elemento.hasAttribute("disabled"); //Falso, xq disabled no existe.

elemento.getAttributeNames(); //Esto nos va a devolver en un array los atributos o sea id, class y data number
elemento.getAttribute("id"); //Esto nos devolvera page


// Continuamos utilizando el mismo codigo HTML modificando solo el JS

const elementos = document.querySelector("page");

elementos.setAttribute("data-number", "10"); //Esta funcion cambia data number a 10
elementos.removeAttribute("id"); //Elimina el atributo id
elementos.setAttribute("id", "page"); //Vuelve a añadir los atributos



//                          ACLARACION PARA LOS ATRIBUTOS BOOLEANOS

const button = document.querySelector("button");

button.setAttribute("disabled", true); //Aqui dara error
button.disabled = true; //Aqui dara correcto
button.setAttribute("disabled", ""); //Aqui dara correcto tambien