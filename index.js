import { Word } from "./modules/word.js";
import { GAME } from "./modules/game.js";
import { Player } from "./modules/player.js";


//let name = prompt("Enter your user-name.");
let player = new Player(name);
let word = new Word().word();
let game = new GAME.game(word.split(''));

document.getElementById("lives").innerHTML = player.lives;
document.getElementById("word").innerHTML = game.showUnderscores(word);
document.getElementById("submit").addEventListener("click",submitLetter());
console.log(name);
console.log(word);

function submitLetter(){
    let letter = document.getElementById("submit").value;
    document.getElementById("word").innerHTML = game.showLetter(letter, word);
}
console.log(word.split(''));
