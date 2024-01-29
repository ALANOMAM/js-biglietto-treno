/* 
Scrivi un programma che prende tre numeri in input usando prompt. 
Calcola la media di questi numeri e visualizza il risultato con almeno due decimali.
*/

let firstNumber = prompt("Inserisci il primo numero : ");
let secondNumber = prompt("Inserisci il secondo numero : ");
let thirdNumber =  prompt("Inserisci il terzo numero : ");


let media = (( Number(firstNumber)+ Number(secondNumber)+ Number(thirdNumber))/3).toFixed(2);

document.getElementById("average").innerHTML = media;

document.getElementById("num1").innerHTML = firstNumber;
document.getElementById("num2").innerHTML = secondNumber;
document.getElementById("num3").innerHTML = thirdNumber;
