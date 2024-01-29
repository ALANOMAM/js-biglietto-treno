/*
Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer.
 Determina il vincitore o se c'è un pareggio 
*/ 

let randomNumber = Math.floor( Math.random()*10);


if(randomNumber >= 0 && randomNumber<=3 ){
   console.log("sasso",randomNumber)
} else if(randomNumber >3 && randomNumber <= 6){
    console.log("carta",randomNumber)
} else {
    console.log("forbici",randomNumber)
}

