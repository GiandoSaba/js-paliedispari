// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

const string = prompt('Scrivi una parola');
let stringReverse = '';

for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
}

if (string === stringReverse) {
    console.log('palindroma');
} else {
    console.log('non palindroma');
}