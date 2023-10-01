class Player {
    constructor(game) {
        this.game = game; // Almacenamos la instancia de Game en una propiedad
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
            });
        });
    }
}

export default Player;