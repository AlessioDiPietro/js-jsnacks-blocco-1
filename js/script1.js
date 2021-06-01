// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe. (modificato) 


var parolaUno = prompt ("inserisci prima parola");

var parolaDue = prompt ("inserisci seconda parola");

if (parolaUno.length > parolaDue.length) {
    console.log ("La prima parola è più lunga");
    document.getElementById("parola_lunga").innerHTML = parolaUno + " & " + parolaDue
} else if (parolaUno.length == parolaDue.length){
    console.log ("La prima e la seconda parola sono lunghe uguali");
    document.getElementById("parola_lunga").innerHTML = parolaDue + " & " +  parolaUno
} else {
    console.log ("La seconda parola è più lunga");
    document.getElementById("parola_lunga").innerHTML = parolaDue + " & " +  parolaUno + "sono ugualmente lunghe"
}