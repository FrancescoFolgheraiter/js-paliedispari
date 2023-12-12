/*
CONSEGNA
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

SVOLGIMENTO
0) prendo in input il pulsatne verifica dall'html
1) all'evento click prendo in input la parola inserita dall'utente
3) creo una funzione che capisca se la parola è palindroma
    -
4) restituisco l'output
*/
const verifica = document.querySelector("button");
verifica.addEventListener("click", function(){
    //input dati
    const word = document.querySelector("input").value;
    
    if (word == reverse(word)){
        alert("la parola è palindroma")
    }
    else{
        alert("la parola non è palindroma")
    }
})
//funzione per creare una variabile con la parola in argomento al contrario
function reverse(string){
    let reverseWord="";
    for (let i = string.length - 1; i >=0; i --) {
        reverseWord += string[i];
    }
    console.log("la parola al contrario è :", reverseWord)
    return(reverseWord)
}

