//import {} from 
let size = 5;
let ini = "";
for (var i = 0; i < size; i++) {
    ini = ini + "_ ";
}

document.getElementById("check").onclick = function palabra() {
    document.getElementById("word").innerHTML = ini
}
