const myForm = document.querySelector("form");
const formNumber = document.getElementById("number-choice");
const again = document.getElementById("again");
const printScore = document.getElementById("print-score");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");
const guessing = document.getElementById("start-guessing");

let numberToGuess = getRndInteger(1, 20);

let score = 20;
let highScore = 0;

myForm.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log(formNumber.value);

    if (formNumber.value == numberToGuess) {
        if (score > 0) {
            score--;

            //Update score
            printScore.innerText = score;
            
            //Cambia background in verde
            document.querySelector("body").classList.add("bg-success");

            //Mostra il numero indovinato
            result.innerText = numberToGuess;
            guessing.innerText = "Hai vinto";
        }

        checkButton.setAttribute("disabled", "");

        if (highScore < score) {
            highScore = score;
            document.getElementById("print-high-score").innerText = highScore;
        }
    }

    else {
        if (score > 0) {

            if( formNumber.value < numberToGuess )
                guessing.innerText = "Too low";
            else{
                guessing.innerText = "Too high";
            }
            score--;
            printScore.innerText = score;
        }

        else {
            guessing.innerText = "Hai perso";
        }
    }

})

//Reset
again.addEventListener("click", function () {

    document.querySelector("body").classList.remove("bg-success");
    checkButton.removeAttribute("disabled");
    guessing.innerText = "Start guessing...";

    //Nasconde il numero da indovinare
    result.innerText = "???";

    //Refresh score
    score = 20;
    printScore.innerText = score;

    //Nuovo numero random
    numberToGuess = getRndInteger(1, 20);

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