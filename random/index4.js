/*
Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer.
 Determina il vincitore o se c'è un pareggio 
*/ 
let objectPrompt = "sasso";
let randomNumber = Math.floor( Math.random()*10);
let object;

if(randomNumber >= 0 && randomNumber<=3 ){
   console.log("sasso",randomNumber)
   object = "sasso";
   if(objectPrompt="sasso"){
     console.log("hai pereggiato")
   }else if(objectPrompt="carta"){
     console.log("hai vinto")
   }else{
    console.log("hai perso")
   }

}else if(randomNumber >3 && randomNumber <= 6){
    console.log("carta",randomNumber)
    object = "carta";
    if(objectPrompt="sasso"){
        console.log("hai perso")
      }else if(objectPrompt="carta"){
        console.log("hai pareggiato")
      }else{
       console.log("hai vinto")
      }


} else {
    console.log("forbici",randomNumber)
    object = "forbici";
    if(objectPrompt="sasso"){
        console.log("hai vinto")
      }else if(objectPrompt="carta"){
        console.log("hai perso")
      }else{
       console.log("hai pareggiato")
      }
}

