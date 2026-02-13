function Soma(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    document.getElementById("resultado").innerHTML = parseFloat(valor1) + parseFloat(valor2);
}
function Subtração(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    document.getElementById("resultado").innerHTML = parseFloat(valor1) - parseFloat(valor2);
}
function Multiplicação(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    document.getElementById("resultado").innerHTML = parseFloat(valor1) * parseFloat(valor2);
}
function Divisão(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    document.getElementById("resultado").innerHTML = parseFloat(valor1) / parseFloat(valor2);
}