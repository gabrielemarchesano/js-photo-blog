/* 
Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

// seleziono l'elemento dalla pagina html
const rowElement = document.getElementById("grid-element");

// tramite la libreria axios, effettuo una chiamata GET al server per ottenere una risposta
axios.get("https://lanciweb.github.io/demo/api/pictures/")
  // se ottengo la risposta positiva
  .then(response => {
    // salvo in una variabile i dati della mia risposta
    const result = response.data;
    // stampo in console per essere sicuro che ho preso la risposta in modo corretto
    console.log(result);  
  });