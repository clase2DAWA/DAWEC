export class jugador {
      constructor(){
        health=8;
      }
      herir(){
        health-1;
        if (health==0) {
            return "DEAD";
        }
      }
}
