//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
//   Variante: stampare solo i numeri pari (modificato) 

totale = 0;

for (var i = 0; i < 5; i++) {
    var richiesta = parseInt(prompt("inserisci valore"));
    console.log (richiesta);
    if (richiesta % 2 == 0) {
     document.getElementById("numeri_pari").innerHTML += ", questo numero è pari: " + richiesta;
     }
    var totale = totale + richiesta;
}
console.log(totale)
document.getElementById("totale_somma").innerHTML = "il totale è: " + totale;


// con while

// var i = 0;
// while (i < 5) {
//     var richiesta = parseInt(prompt("inserisci valore"));
//     console.log (richiesta);
//     var totale = totale + richiesta;
//     i++;
// }
// console.log(totale)
// document.getElementById("totale_somma").innerHTML = "il totale è: " + totale;