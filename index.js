
/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Bonus:
effettuare dei controlli per capire se l'utente ha inserito correttamente il numero di km e l'età (ovvero se sono effettivamente dei numeri e non testo a caso)

*/

let name = prompt("inserisci il tuo nome");
let age = prompt(`Ciao ${name} , inserisci la tua età`); 
 let distance = prompt(`Inserisci il numero di km che vuoi fare ${name}`);
  
 /*let age = 90;
  let distance = 200;*/
 let fullPrice = 0.21 * distance;
 let price;



 if(age < 18){
     price = fullPrice - ((20/100) * fullPrice);
     document.getElementById("userAge").innerHTML = `${name} hai detto di avere ${age} anni`
     document.getElementById("travelDistance").innerHTML = `vuoi percorrere ${distance} km`
     document.getElementById("finalCost").innerHTML = "Giovanotto, visto la tua età hai 20% di sconto , il prezzo totale calcolato è quindi : "+price.toFixed(2)+" euro";
     console.log(price);
 } else if(age > 65){
    price = fullPrice - ((40/100) * fullPrice);
    document.getElementById("userAge").innerHTML = `Signore/a ${name} ha detto di avere ${age} anni`
    document.getElementById("travelDistance").innerHTML = `vuole percorrere ${distance} km`
    document.getElementById("finalCost").innerHTML = "La informiamo che ha 40% di sconto , il prezzo totale è quindi: "+price.toFixed(2)+" euro";
    console.log(price);
    
 } else{
   price = fullPrice;
   document.getElementById("userAge").innerHTML = `Signore/a ${name} ha detto di avere ${age} anni`
    document.getElementById("travelDistance").innerHTML = `vuole percorrere ${distance} km`
   document.getElementById("finalCost").innerHTML = "Il prezzo totale calcolato e pieno  è : "+price.toFixed(2)+" euro";
    console.log(price);
 }