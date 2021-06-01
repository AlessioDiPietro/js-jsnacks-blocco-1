// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var listaInvitati = ["jaafar", "Thanos", "Voldemort", "Darth Vader", "David Jones"];

var nomeInvitato = prompt("Inserisci il TUO NOME QUI!");

var nomeInvitato = nomeInvitato.charAt(0).toUpperCase() + nomeInvitato.substring(1).toLowerCase();
console.log(nomeInvitato);

for (var i = 0; i < listaInvitati.length; i++) {

    if (listaInvitati = nomeInvitato) {
        document.getElementById("esito_invito").innerHTML = "HEY! " + nomeInvitato + " BENVENUTO ALLA FESTA!"
    }else {
        document.getElementById("esito_invito").innerHTML = "HEY! " + nomeInvitato + " CI DISPIACE MA NON SEI STATO INVITATO!"
    }
}