
function count() {
    //obtendo valores
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const step = parseInt(document.getElementById("step").value);

    const resultado = document.getElementById("resultado");
    const actions = document.getElementById("actions");

    //limpa o resultado anterior
    resultado.innerHTML = "";


    //validações
    if (isNaN(start) || isNaN(end) || isNaN(step)){
        resultado.innerHTML = "<p>Por favor, insira valores válidos!</p>";
        return;
    }
    if (step <= 0) {
        resultado.innerHTML = "<p>O passo deve ser maior que zero</p>";
        return;
    }

    //construindo a sequência de contagem
    let saida = "<p>Resultado: </p>";
    if (start <= end){
        //contagem crescente
        for (let i = start; i<= end; i += step) {
            saida += ` ${i} 👉`;
        }
    } else {
        //contagem decrescente
        for (let i = start; i >= end; i -= step){
            saida += ` ${i} 👉`;
        }
    }
    saida += " 🏁</p>";

    //exibindo o resultado
    resultado.innerHTML = saida;

    //adicionando botão de limpar
    if (!document.getElementById("clear")){
        const clearButton = document.createElement("button");
        clearButton.id = "clear";
        clearButton.textContent = "Limpar";
        clearButton.onclick = clearScreen;
        actions.appendChild(clearButton);
    }

}

function clearScreen() {
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("step").value = "";
    document.getElementById("resultado").innerHTML = "";
    const clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.remove();
    }
}
     
    



