/* 
Scrivi un programma che prende tre numeri in input usando prompt. 
Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.
*/

/*let firstNumber = prompt("Inserisci il primo numero : ");
let secondNumber = prompt("Inserisci il secondo numero : ");
let thirdNumber =  prompt("Inserisci il terzo numero : ");*/


let firstNumber = 90
let secondNumber =7
let thirdNumber = 9

let media = ((firstNumber+secondNumber+thirdNumber)/3).toFixed(2);

document.getElementById("media").innerHTML = media;