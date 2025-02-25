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