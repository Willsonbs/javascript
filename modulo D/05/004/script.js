document.getElementById('execute-btn').addEventListener('click', function () {
    const action = document.getElementById('action-select').value;
    const output = document.getElementById('output');

    switch (action) {
        case 'criar':
            output.textContent = 'Usuário criado com sucesso!';
            break;
        case 'editar':
            output.textContent = 'Usuário editado com sucesso!';
            break;
        case 'excluir':
            output.textContent = 'Usuário excluído com sucesso!';
            break;
        case 'visualizar':
            output.textContent = 'Exibindo informações do usuário.';
            break;
        default:
            output.textContent = 'Por favor, selecione uma ação válida.';
    }
});