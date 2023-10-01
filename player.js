class Player {
    constructor(game) {
        this.game = game; // Almacenamos la instancia de Game en una propiedad
        this.life = 10;
    }

    pressedLetter() {
        // Obtengo todos los elementos con la clase button del html
        // Y obtengo un array con todos
        const buttons = document.querySelectorAll('.button');

        // Agrega un controlador de eventos de clic a cada botón
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                // Obtén el valor del botón pulsado a través del objeto event
                const letter = event.target.value;
                console.log('Botón pulsado:', letter);
                this.game.load(letter); // Llama al método load de la instancia de Game

                // Comprueba si la letra es correcta y cambia su color
                if (this.game.word.includes(letter)) {
                    event.target.style.color = 'green';
                    event.target.style.fontWeight = 'bold';
                } else {
                    event.target.style.color = 'crimson';
                    event.target.style.fontWeight = 'bold';
                    this.life--;
                    if (this.life >= 0) {
                        let countLife = document.getElementById("lifeCounter");
                        countLife.innerHTML = this.life;
                        this.replaceIMG(this.life);

                        if (this.life == 0) {
                            this.game.stop();
                            let countdown = document.getElementById("countdown");
                            countdown.innerHTML = "GAME OVER";
                            countdown.style.color = 'crimson';
                        }
                    }
                }

                // Desactiva el botón después de hacer clic en él
                button.disabled = true;
            });
        });
    }

    //Reemplaza la imagen segun las vidas que te queden
    replaceIMG(life) {
        let imagen = document.getElementById("graphics");
        imagen.src = "TimeLapse/" + life + ".png";
    }
}

export default Player;