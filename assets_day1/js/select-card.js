/* 
DAY 2

Milestone2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .

Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.

Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

-----------------------------------

Milestone 3

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
*/

// imposto un timer per permettere alla chiamata AJAX di darmi la risposta prima di andare a selezionare gli elementi cards, altrimenti non l'eventListener no funzionerebbe
setTimeout(() => {
  // seleziono gli elementi della DOM
  const cardsElement = document.querySelectorAll(".cards");
  //console.log(cardsElement);
  const overlayElement = document.getElementById("overlay")
  const closeButtonElement = document.getElementById("close-overlay");
  const bodyElement = document.getElementById("body");
  const overlayImageElement = document.getElementById("overlay-image");

  // scorro nel nodo delle cards
  cardsElement.forEach((card) => {
    // ad ogni card aggiungo un evento click
    card.addEventListener("click", () => {
      // rimuovo la classe d-none all'overlay
      overlayElement.classList.remove("d-none");
      // aggiungo la classe d-block all'overlay
      overlayElement.classList.add("d-block");
      // aggiungo la classe per bloccare lo scroll della pagina all'apparire dell'overlay
      bodyElement.classList.add("stop-scroll");
      // modifico la sorgente dell'immagine nell'overlay con la sorgente dell'immagine dell'elemento card
      overlayImageElement.src = card.querySelector(".card-img-top").src;
    })
  });
  
  // aggiungo un evento click al bottone per "chiudere" l'overlay
  closeButtonElement.addEventListener("click", () => {
    // aggiungo nuovamente la classe d-none
    overlayElement.classList.add("d-none");
    // rimuovo la classe, così la pagina torna a scorrere quando chiudo l'overlay
    bodyElement.classList.remove("stop-scroll");
  });
}, 100);


