/*function verificarIdade() {
    const inputIdade = document.getElementById('idade');
    const idade = parseInt(inputIdade.value);

    const mensagem = document.getElementById('mensagem');

    // Verificar se o valor é válido
    if (isNaN(idade) || idade < 0) {
        mensagem.innerHTML = 'Por favor, insira uma idade válida!';
        
    } else if (idade >= 18) {
        mensagem.innerHTML = 'Você é maior de idade!';
        
    } else {
        mensagem.innerHTML = 'Atenção, você não é maior de idade!';
        mensagem.style.color = 'black'
        
    }
}
*/

function verificarIdade() {
    const inputIdade = document.getElementById('idade');
    const idade = parseInt(inputIdade.value);

    const mensagem = document.getElementById('mensagem');

    if (isNaN(idade) || idade < 0) { 
        mensagem.innerHTML = 'Please, enter with a true value'
    
    } else  if (idade >= 18) {
    mensagem.innerHTML = 'Você é maior de idade'
    
} else {
        mensagem.innerHTML = 'Você é menor de idade'
        
    }

}