
function calculaMulta() {
    const inputVel = document.getElementById('velocidade')
    const result = document.getElementById('multaResultado')
    const vel = parseInt(inputVel.value)
    const speedLimit = 60;
    const finePerKm = 5;
    
    if (isNaN(vel)) {
        result.innerHTML = 'Por favor insira um número válido';
        return;
    } 
    result.innerHTML = `Sua velocidade é de ${vel}. `;

    if (vel > speedLimit) {
        const excessSpeed = vel - speedLimit;
        const fine = excessSpeed * finePerKm;
        result.innerHTML += `Você excedeu o limite de velocidade em ${excessSpeed} km/h. A multa é de R$ ${fine} reais`;
    } else {
        result.innerHTML += 'Você não excedeu o limite de velocidade.';
    }
}
