/* 
DAY 2
Milestone2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .

Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.

Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
*/


// seleziono gli elementi della DOM
const cardsElement = document.querySelectorAll(".cards");
//console.log(cardsElement);
const overlayElement = document.getElementById("overlay")
const closeButtonElement = document.getElementById("close-overlay");
