
export class words {
  constructor() {
    this.palabras = ["manzana", "playa", "escritorio", "piscina", "armario", "arroz"];
    this.solucion = Math.floor(Math.random()*this.palabras.length);
};
elegir () {
    return this.solucion[this.palabras]; 
};

 
 
}