/*
Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer.
 Determina il vincitore o se c'è un pareggio 
*/ 
let objectPrompt = "sasso";
let randomNumber = Math.floor( Math.random()*10);
let object;

document.getElementById("userObject").innerHTML=objectPrompt;

if(randomNumber >= 0 && randomNumber<=3 ){
   console.log("sasso",randomNumber)
   object = "sasso";
   document.getElementById("computerObject").innerHTML =object;
   if(objectPrompt="sasso"){
     console.log("hai pereggiato")
     document.getElementById("result").innerHTML = "hai pereggiato"
   }else if(objectPrompt="carta"){
     console.log("hai vinto")
     document.getElementById("result").innerHTML = "hai vinto"
   }else{
    console.log("hai perso")
    document.getElementById("result").innerHTML = "hai perso"
   }

}else if(randomNumber >3 && randomNumber <= 6){
    console.log("carta",randomNumber)
    object = "carta";
    document.getElementById("computerObject").innerHTML =object;
    if(objectPrompt="sasso"){
        console.log("hai perso")
        document.getElementById("result").innerHTML = "hai perso"
      }else if(objectPrompt="carta"){
        console.log("hai pareggiato")
        document.getElementById("result").innerHTML = "hai pereggiato"
      }else{
       console.log("hai vinto")
       document.getElementById("result").innerHTML = "hai vinto"
      }


} else {
    console.log("forbici",randomNumber)
    object = "forbici";
    document.getElementById("computerObject").innerHTML =object;
    if(objectPrompt="sasso"){
        console.log("hai vinto")
        document.getElementById("result").innerHTML = "hai vinto"
      }else if(objectPrompt="carta"){
        console.log("hai perso")
        document.getElementById("result").innerHTML = "hai perso"
      }else{
       console.log("hai pareggiato")
       document.getElementById("result").innerHTML = "hai pereggiato"
      }
}



