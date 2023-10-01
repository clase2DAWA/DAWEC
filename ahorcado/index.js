import {Game} from "./game.js";
import {Player} from "./player.js";


var Ahorcado = Ahorcado || {};//namespace

Ahorcado.Game = new Game;
Ahorcado.Player = new Player(Ahorcado.Game);
Ahorcado.Game.init();
Ahorcado.Player.addKeyDown();

export {Ahorcado};