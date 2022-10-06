// INPUT

// Chiedere all'utente quanti kilometri vuole percorrere
const km = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
console.log(km, typeof(km));

// Chiedere all'utente l'età
const age = parseInt(prompt("Quanti anni hai?"));
console.log(age, typeof(age));
// ELABORAZIONE
// calcolo prezzo del biglietto (kilometri * 0.21)
const price = km * 0.21
console.log(price, typeof (price));
// SE l'età dell'utente è < 18 allora applica sconto 20%
// ALTRIMENTI SE l'età dell'utente è > 65 allora applica sconto 40%

// OUTPUT
// comunica il prezzo finale all'utente