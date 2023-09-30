import { Word } from "/modules/Word.js";

//let word = returnWord();
let word = "adios";
let ini = "";
for (var i = 0; i < word.length; i++) {
    ini = ini + "_ ";
}

document.getElementById("check").onclick = function palabra() {
    document.getElementById("word").innerHTML = ini
}