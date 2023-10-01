import Word from "./word.js";

class Game {
    constructor() {
        this.wordInstance = new Word();
        this.word = this.wordInstance.randomWord().toUpperCase().split('');
        this.elementWord = document.getElementById("hiddenWord");
        this.secondsRemaining = 60;
    }


    stop() {
        this.secondsRemaining = -1;
    }

    winner() {
        console.log("GANASTE")
        this.stop();
        countdown.innerHTML = "YOU WIN";
        countdown.style.color = 'green';
    }

    // LLeva a cabo la generacion de una cuenta atras 
    countdown() {

        const interval = setInterval(() => {
            if (this.secondsRemaining === -1) {
                clearInterval(interval); // Detiene la cuenta regresiva cuando llegue a 0
                let countdown = document.getElementById("countdown");
                // countdown.innerHTML = "GAME OVER";

                var buttons = document.getElementsByClassName("button");

                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                }

            } else {
                let cont = document.getElementById("countdown");
                cont.textContent = this.secondsRemaining;
                if (this.secondsRemaining <= 30) {
                    cont.style.color = "orange";
                    if (this.secondsRemaining <= 10) {
                        cont.style.color = "crimson";
                    }
                }
                this.secondsRemaining--;
            }
        }, 1000); // 1000 milliseconds = 1 second
    }

    play() {
        // Saco la palabra aleatoria y divido sus caracteres y los meto en un array
        for (let index = 0; index < this.word.length; index++) {
            this.elementWord.textContent += "_";
        }
        this.countdown();

        document.getElementById('restart').onclick = () => {
            window.location.reload();
        };

    }

    load(letter) {
        // Encuentra todas las posiciones en las que aparece la letra en 'word'
        const positions = [];
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                positions.push(i);
            }
        }

        // Actualiza 'this.elementWord.textContent' para mostrar la letra en las posiciones encontradas
        const wordArray = this.elementWord.textContent.split('');
        for (const index of positions) {
            wordArray[index] = letter;
        }
        this.elementWord.textContent = wordArray.join('');

        if (!this.elementWord.textContent.includes("_")) {
            this.winner();
        }
    }
}
const wordInstance = new Word();
export default Game;