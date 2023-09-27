class Jugador{

    constructor (){
        this.vida=7;


    }

    letraFallada(){
        this.vida--;
    }

    dibujaVida(){
       var vidas= document.getElementById("vidas");
        vidas.textContent="Vidas " + this.vida;
    }


}


export{ Jugador};