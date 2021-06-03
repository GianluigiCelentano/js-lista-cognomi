var output = document.getElementById("surnames")
var surname = prompt("inserisci il tuo cognome")
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
surnameList.push(surname)
for (i = 6; i <= surnameList.length; i++) {
    output.innerHTML += surnameList.sort()
}