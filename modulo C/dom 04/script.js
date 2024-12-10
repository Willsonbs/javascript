/*
function somar () {
    var num1 = parseInt(document.getElementById('txtn1').value);
    var num2 = parseInt(document.getElementById('txtn2').value);
    var resultado = window.document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor insira dois números válidos."
        return;
    }
    var soma = num1 + num2;
    document.getElementById('resultado').textContent = `Resultado: ${soma}`;
    
}
*/

function somar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = document.getElementById('resultado');
    var n1 = Number.parseInt(tn1.value);
    var n2 = Number.parseInt(tn2.value);
    var s = n1 + n2
    res.innerHTML = `( ${n1} + ${n2} ) = ${s}`;
}