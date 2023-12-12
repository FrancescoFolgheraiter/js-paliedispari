/*
CONSEGNA
Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

SVOLGIMENTO
1)prendo in input se l'utento ha scelto pari o dispari
2)prendo in input un numero dall'utemte da 1 a 5
3)genero numero random per il pc
4)sommo i due numeri
5)creo la funzione che controlla se la somma è pari o dispari
    -prendo come argomento la somma
    -uso operatore modulo per verificare se è pari o dispari
    -restituisco 0 per pari
    -restituisco 1 per dispari;
6) dichiaro chi ha vinto
*/

//input dati
const gioca = document.querySelector("button");

gioca.addEventListener("click", function(){
    //input dati
    const numeroUtente = parseInt(document.getElementById("user-number").value);
    const evenOdd = document.getElementById("even-odd").value;
    const numeroPc = generateRandom(1,5);

    //calcolo somma
    const sum = numeroUtente + numeroPc;
    //richiamo funzione di controllo even-odd;
    const risultato = ifEven(sum); 
    
    //controllo se il risultato corrisponde ha ciò che ha inserito l'utente
    if (risultato == evenOdd){
        document.getElementById("result").innerHTML = "Numero generato: "+ numeroPc +"; Numero scelto: " + numeroUtente + "; Selezione pari o dispari: " + evenOdd;
        alert("hai vinto")
    }
    else{
        document.getElementById("result").innerHTML = "Numero generato: "+ numeroPc +"; Numero scelto: " + numeroUtente + "; Selezione pari o dispari: " + evenOdd;
        alert("hai perso")
    }
})
//funzione di controllo se è pari
function ifEven (n){
    if (n % 2 == 0){
        return("pari");
    }
    return("dispari");   
}
//funzione generatrice di numeri random
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

