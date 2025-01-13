function gerarTabuada (){
    const numero = parseInt(document.getElementById("numero").value);

    const resultado = document.getElementById("resultado");
    const actions = document.getElementById("actions");

    //limpar resultado anterior
    resultado.innerHTML = "";

    //validacão
    if (isNaN(numero) || numero < 0 || numero > 100){
        resultado.innerHTML = "<p>Informe um número entre 1 e 100</p>";
        return;
    }

    //construindo a tabuada
    let saida = `<ul>`;
    for (let i = 1; i <= 100; i++) {
        saida += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    saida += "</ul>";

    //exibe resultado
    resultado.innerHTML = saida;

    //adiciona botão de limpar
    if (!document.getElementById("clear")){
        const clearButton = document.createElement("button");
        clearButton.id = "clear";
        clearButton.textContent = "Limpar";
        clearButton.onclick = limparScreen;
        actions.appendChild(clearButton);
    }
}

function limparScreen(){
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
    const clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.remove();
    }
}