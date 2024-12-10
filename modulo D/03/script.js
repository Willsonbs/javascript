

function calculaMulta() {
    var vel = document.getElementById('velocidade');
    var res = document.getElementById('resultadoMulta');
    var velocidade = parseInt(vel.value);
    res.innerHTML = `<p> Sua velocidade é de ${velocidade} km/h </p>`

    if (velocidade > 80) {
        res.innerHTML += `Você foi <strong>MULTADO</strong> por exccesso de velocidade`;
    }
    res.innerHTML += `<p> Dirija sempre com sinto de segurança</p>`
}