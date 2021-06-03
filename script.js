var output = document.getElementById("surnames")
var outputdue = document.getElementById("position")
var surname = prompt("inserisci il tuo cognome")
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
surnameList.push(surname)
output.innerHTML = surnameList.sort()
var surnamePosition = surnameList.indexOf(surname) +1;
outputdue.innerHTML = surnamePosition






