// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

function isEven(number) {
    
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const sceltaUser = parseInt(prompt('1 per pari, 2 per dispari'));
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
const computerNumber = getRandomInt(1,5);
const somma = userNumber + computerNumber;

if (isEven(somma) && sceltaUser == 1) {
    console.log(`la somma dei numeri ${userNumber} e ${computerNumber} è uguale a: ${somma}.
    L'utente ha scelto pari ed è vincitore`);
} else if (!(isEven(somma)) && sceltaUser == 2) {
    console.log(`la somma dei numeri ${userNumber} e ${computerNumber} è uguale a: ${somma}.
    L'utente ha scelto dispari ed è vincitore`);
} else if (isEven(somma) && sceltaUser == 2) {
    console.log(`la somma dei numeri ${userNumber} e ${computerNumber} è uguale a: ${somma}.
    L'utente ha scelto dispari ed ha perso`);
} else if (!(isEven(somma)) && sceltaUser == 1) {
    console.log(`la somma dei numeri ${userNumber} e ${computerNumber} è uguale a: ${somma}.
    L'utente ha scelto pari ed ha perso`);
}


