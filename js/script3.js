// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var arrayNum = [];

for(var i = 0; i < 6; i++) {
    var numeroArray = parseInt(prompt("Inserisci un numero qui :"));
    console.log (numeroArray);
    if (numeroArray % 2 != 0) {
        arrayNum.push (numeroArray);
    }
}
document.getElementById("array_num_pari").innerHTML ="numeri dipari nell'array = " + arrayNum;
