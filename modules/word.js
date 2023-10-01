
 class Word{
constructor(){
    this.palabras = ["hamburguesa","hola","gustar","estrella"]
    this.respuesta =  this.palabras[Math.floor(Math.random()* this.palabras.length)];

}
getRespuesta(){
    return this.respuesta ;
}
}
export {Word};