/* 

Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/

/* 
Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare. */

// output chiamata get da postman
/* 
[
  {
    "id": 1,
    "title": "Skate Park",
    "date": "01-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
  },
  {
    "id": 2,
    "title": "Passeggiata",
    "date": "16-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
  },
  {
    "id": 3,
    "title": "Alpi",
    "date": "01-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
  },
  {
    "id": 4,
    "title": "Sagra",
    "date": "21-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
  },
  {
    "id": 5,
    "title": "Watergun",
    "date": "23-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
  },
  {
    "id": 6,
    "title": "Riviera",
    "date": "30-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
  }
]
*/

// tramite axios, posso attivare la chiamata get, e farmi dare come risposta l'array di oggetti sopra citato
// una volta ottenuto l'array come risposta, lo salvo in una variabile
// con quella variabile, posso ciclare l'array
// dentro al ciclo, per ogni chiave e valore che mi servonoo (title, date), creo gli elementi html che saranno inseriti dentro la card 

console.log("Test")

const rowElement = document.getElementById("grid-element");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
  .then(response => {
    const result = response.data;
    console.log(result);
    let items = "";
    for(i = 0; i < result.length; i++){
      const object = result[i];
      console.log(object.id, object.title, object.date, object.url);
      items += `
      <div class="col-4">
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
      rowElement.innerHTML = items;
    }
  })