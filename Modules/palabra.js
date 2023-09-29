class Palabra {
    constructor(palabraSecreta) {
      this.adivinadas=[];
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        this.adivinadas.push(false);
      }
    }
  
    intento(letra){
    let acierto = false;
  
      for (let i = 0; i < this.palabraSecreta.length; i++) {
        if (this.palabraSecreta[i] == letra) {
          this.adivinadas[i] = true;
          acierto = true;
        }
      }
  
      return acierto;
    }
}