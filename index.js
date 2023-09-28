import { Word } from "./modules/word.js";
let palabra = new Word();
let manzana = "manzana";
console.log(manzana.indexOf("z"));

let letters = [];
let position = manzana.indexOf("a");

while (position != -1) {
    letters.push(position);
    position = manzana.indexOf("a", position + 1);
}
console.log(letters);

let underscores = [];
for (let i = 0; i < manzana.length; i++) {
    underscores.push("_");

}

for (let i = 0; i < letters.length; i++) {
    let letra = "a";
    let indice = letters[i];
    underscores[indice] = letra;

}
console.log(underscores);





/*let palabras = ["pera", "banana", "platano"];
let p1 = palabras[Math.floor(Math.random()*palabras.length)];
console.log(p1);*/
