const myForm = document.querySelector("form");
const formNumber = document.getElementById("number-choice");

myForm.addEventListener("submit", function (event) {
    
    document.querySelector("body").classList.remove("bg-success");
    document.getElementById("printResult").innerText = "Guess my number";

    event.preventDefault();

    console.log(formNumber.value);

    let numberToGuess = getRndInteger(1, 20);

    if (formNumber.value == numberToGuess) {
        //Cambia background in verde
        document.querySelector("body").classList.add("bg-success");

        //Mostra il numero indovinato
        document.getElementById("result").innerText = numberToGuess;
        document.getElementById("printResult").innerText = "Hai vinto";
    }

    else{
        document.getElementById("printResult").innerText = "Riprova";
    }

    formNumber.value = null;

})


//FUNCTIONS

/**
* Genera un numero intero random compreso tra min e max intrambi inclusi
* @param {number} min
* @param {number} max
* @returns {number}
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}