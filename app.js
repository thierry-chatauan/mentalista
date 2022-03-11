var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");

var numeroTentativas = 3;
var tentativas = document.getElementById("tentativas")

function chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    if (chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "ESCREVA UM NUMERO ENTRE 0 E 10</br>" + "<button onclick='reiniciar()'>reiniciar</button></br>";        
    } else if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou!!!</br>"+"<button onclick='reiniciar()'>reiniciar</button>";
        document.getElementById("btn").style.display = "none";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML += "O numero secreto eh maior!!! </br>"
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML += "O numero secreto eh menor!!!</br>"
    }
    numeroTentativas = numeroTentativas - 1;
    tentativas.innerHTML = numeroTentativas
    if (numeroTentativas == 0) {
        tentativas.innerHTML = "GAME OVER </br>" + "<button onclick='reiniciar()'>reiniciar</button></br> O numero secreto era " + numeroSecreto + "!!!";
        document.getElementById("btn").style.display = "none";
    }
}

function reiniciar() {
    location.reload();
}