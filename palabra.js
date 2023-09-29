
export class palabra {
   constructor(){
    palabras={animales,nombres};
    palabras.animales=[perro,elefante,jirafa,cocodrilo];
    palabras.nombres=[pedro,lucia,alberto,pablo];
   }
   choose(level, num) {
    if (level == 1) {
      return palabras.nombres[num];
    }else if (level==2) {
        return palabras.nombres[num];
    } 
  }
}