/*
Scrivi un programma che simula il gioco di "Carta, forbice, sasso". Chiedi all'utente di fare una scelta e confrontala con una scelta casuale del computer.
 Determina il vincitore o se c'è un pareggio 
*/ 
let objectPrompt = prompt("Scegli sasso, carta o forbici ?");
let randomNumber = Math.floor( Math.random()*10);
let object;

document.getElementById("userObject").innerHTML=objectPrompt;

if(randomNumber >= 0 && randomNumber<=3 ){
   object = "sasso";
   document.getElementById("computerObject").innerHTML =object;
   if(objectPrompt="sasso"){
     document.getElementById("result").innerHTML = "hai pereggiato"
   }else if(objectPrompt="carta"){
     document.getElementById("result").innerHTML = "hai vinto"
   }else if(objectPrompt="forbici"){
    document.getElementById("result").innerHTML = "hai perso"
   } else{
    document.getElementById("result").innerHTML = "input non valido"
   }

}else if(randomNumber >3 && randomNumber <= 6){
    object = "carta";
    document.getElementById("computerObject").innerHTML =object;
    if(objectPrompt="sasso"){
        document.getElementById("result").innerHTML = "hai perso"
      }else if(objectPrompt="carta"){
        document.getElementById("result").innerHTML = "hai pereggiato"
      }else if(objectPrompt="forbici"){
       document.getElementById("result").innerHTML = "hai vinto"
      }else{
        document.getElementById("result").innerHTML = "input non valido"
      }


} else {
    object = "forbici";
    document.getElementById("computerObject").innerHTML =object;
    if(objectPrompt="sasso"){
        document.getElementById("result").innerHTML = "hai vinto"
      }else if(objectPrompt="carta"){
        document.getElementById("result").innerHTML = "hai perso"
      }else if(objectPrompt="forbici"){
       document.getElementById("result").innerHTML = "hai pereggiato"
      }else{
        document.getElementById("result").innerHTML = "input non valido"
      }
}



