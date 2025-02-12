// En esta primera parte trabajamos sobre el body

document.body.childNodes.length; //Devuelve 3
document.body.childNodes;   // En un [text, div#aplicacion, text ]
document.body.parentNode;   // Nos mostrara el HTML 

const app = document.querySelector("#aplicacion");

app.childNodes; // Devuelve [text, div.header, text, p, text, a, text]
app.firstChild.textContent; // Devuelve " "
app.lastChild.textContent;  // Devuelve " "