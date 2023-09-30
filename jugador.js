
export class jugador {
      constructor(){
        this.health=8;
        this.vivo=true;
      }
     
      herir(){
        this.health=-1;
        if (this.health==0) {
            this.vivo=false;
            return vivo;
        }
      }
}
