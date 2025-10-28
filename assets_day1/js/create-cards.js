/* 
Milestone 3 (day 1)

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
    // creo una variabile di supporto di tipo stringa, vuota
    let items = "";
    // utilizzando il metodo forEach(), ciclo nell'array del dato
    result.forEach((object) => {
      // ad ogni iterazione, concateno gli elementi html per creare una card, usando però i valori degli oggetti all'interno dell'array
      items += `
        <div class="col-4 cards">
          <div class="card p-4 pb-0 rounded-0">
            <img class="pin" width="32" src="./assets_day1/img/pin.svg" alt="">
            <img width="300" src="${object.url}" alt="" class="card-img-top rounded-0">
            <div class="card-body px-0">
              <span class="card-subtitle text-body-secondary date">${object.date}</span>
              <h5 class="card-title">${object.title}</h5>
            </div>
          </div>
        </div>
      `
    // modifico il contenuto dell'elemento con le cards
    rowElement.innerHTML = items;
    })
  })