class juego {
    introducirLetra(){
        const userInput = prompt("Ingrese una letra:");
        console.log("Introdujo:", userInput);
    }
    
    adivinarLetra() {
        const letra = userInput;
        if (letrasUtilizadas.includes(userInput)) {
          alert("Ya has intentado esta letra.");
          return;
        }
    

    if (palabraAdivinar.includes(userInput)) {
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (palabraAdivinar[i] === userInput) {
                palabraAdivinada = palabraAdivinada.substring(0, i) + userInput + palabraAdivinada.substring(i + 1);
            }
            }
        }
    }
}