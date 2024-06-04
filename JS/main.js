// chiediamo al passeggero quanti km deve percorrere
let km = parseInt(prompt("Quanti km devi percorrere?"));

console.log(km);

// chiediamo all'utente il suo età
let eta =  parseInt(prompt('Quanti anni hai?'));

console.log(eta);

// definisco il prezzo del biglietto
let prezzo = km * 0.21;

console.log(prezzo);

// definisco lo sconto del biglietto
let sconto = 0;

if (eta < 18) {
    sconto = prezzo * 20 / 100;
} else if (eta > 65) {
    sconto = prezzo * 40 / 100;
}

console.log(sconto);

// definisco il prezzo finale del biglietto
let prezzoFinale = prezzo - sconto;

console.log(sconto);

// do al cliente la risposta finale
document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2) + ' €';