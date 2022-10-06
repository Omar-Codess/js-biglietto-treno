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


let finalPrice = "";
// SE l'età dell'utente è < 18 allora applica sconto 20%
if (age < 18) {
    discountUnder18 = ((price * 20) / 100);
    console.log(discountUnder18, typeof (discountUnder18));
    finalPrice = price - discountUnder18;
}

// ALTRIMENTI SE l'età dell'utente è > 65 allora applica sconto 40%
else if (age > 65) {
    discountOver65 = ((price * 40) / 100);
    console.log(discountOver65, typeof (discountOver65));
    finalPrice = price - discountOver65;
}

// OUTPUT
// comunica il prezzo finale all'utente
document.getElementById("result").innerHTML = `Il prezzo finale è ${finalPrice}`;
