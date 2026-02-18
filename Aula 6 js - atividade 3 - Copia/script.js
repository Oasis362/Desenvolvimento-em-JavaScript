let inputTexto = document.getElementById('texto');
let espacoCor = document.getElementById('cor');
let resultado = document.getElementById('resultado');

let btnMostrar = document.getElementById('mostrar');
let btnApagar = document.getElementById('apagar');
let btnEnviar = document.getElementById('enviar');

btnMostrar.onclick = function() {
    console.log("clicou mostrar");
    resultado.innerText = inputTexto.value;
    resultado.style.color = espacoCor.value || "#ooo";
};

btnApagar.onclick = function() {
    console.log("clicou apagar");
    resultado.innerText = '';
};

btnEnviar.onclick = function() {
    console.log("clicou enviar");
    alert("Mensagem enviada!");
};
