var texto1 = "/gifss";
var texto2 = "entra ai pow";
var elemento = document.getElementById("linkUser");
var underline = document.createElement("span");
underline.innerHTML = "";
elemento.appendChild(underline);

var indice = 0;
var intervalo;

function digitarTexto() {
    intervalo = setInterval(function() {
        if (indice < texto1.length) {
            elemento.innerHTML = elemento.innerHTML.replace("", "") + texto1.charAt(indice) + "";
            indice++;
        } else if (indice === texto1.length) {
            clearInterval(intervalo);
            setTimeout(function() {
                apagarTexto();
            }, 1000);
        }
    }, 100);
}

function apagarTexto() {
    indice = texto1.length - 1;
    intervalo = setInterval(function() {
        if (indice >= 0) {
            elemento.innerHTML = elemento.innerHTML.slice(0, -1);
            indice--;
        } else {
            clearInterval(intervalo);
            setTimeout(function() {
                digitarTexto2();
            }, 1000);
        }
    }, 100);
}

function digitarTexto2() {
    var indice2 = 0;
    intervalo = setInterval(function() {
        if (indice2 < texto2.length) {
            elemento.innerHTML = elemento.innerHTML.replace("", "") + texto2.charAt(indice2) + "";
            indice2++;
        } else {
            clearInterval(intervalo);
            elemento.innerHTML = elemento.innerHTML.replace("", "");
        }
    }, 100);
}

digitarTexto();

var conteudoRetangulo = document.querySelector(".conteudo-retangulo");

conteudoRetangulo.addEventListener("click", function() {
    window.location.href = "https://google.com";
});