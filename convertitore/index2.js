/*Crea un programma che chiede all'utente una temperatura 
in gradi Celsius e la converte in Fahrenheit, tramite una ricerca su 
internet potrete trovare la formula corretta per effettuare la conversione. Visualizza la temperatura convertita.*/ 

 let tempCelsuis = prompt("Ciao, dammi la temperatura in gradi celsuis");
 let tempFahrenheit = tempCelsuis*(9/5)+32;
 

 document.getElementById("Celsius").innerHTML = tempCelsuis;
 document.getElementById("Fahrenheit").innerHTML =tempFahrenheit;