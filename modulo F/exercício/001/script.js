let lista = [];
function analyzeNumber(){
    const numberInput = document.getElementById('numero');
    const numero = Number(numberInput.value);
    const select = document.getElementById('valores');

    if (numero < 1 || numero > 100 || lista.includes(numero)){
        alert('Valor inválido ou já adicionado');
        numberInput.value = "";
        numberInput.focus();
        return;
    }

    lista.push(numero);
    const option = document.createElement('option');
    option.text = `Valor: ${numero} adicionado`;
    select.add(option);
    numberInput.value = "";
    numberInput.focus();
}

function analisar() {
    if (lista.length === 0) {
        alert('Adicone números para poder analisar.');
        return;
    }

    const total = lista.length;
    const maior = Math.max(...lista);
    const menor = Math.min(...lista);
    const soma = lista.reduce((acc, num) => acc + num, 0);
    const media = soma / total;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Ao todo, temos ${total} números cadastrados!</p>
        <p>O maior valor informado foi ${maior}!</p>
        <p>O menor valor informado foi ${menor}!</p>
        <p>Somando todos os valores temos, ${soma}.</p>
        <p>A média dos valores digitados é ${media.toFixed(2)}</p>
        `
}

function limpar() {
    lista = [];
    document.getElementById("valores").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("numero").innerHTML = "";
    document.getElementById("numero").focus();
}