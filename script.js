var output = document.getElementById("surnames")
var surname = prompt("inserisci il tuo cognome")
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
surnameList.push(surname)
output.innerHTML = surnameList.sort()

