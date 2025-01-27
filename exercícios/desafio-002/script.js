function adicionarTarefa() {
  
  let tarefa = document.getElementById("inputTarefa");
  let addTarefa = tarefa.value.trim();

  if (addTarefa === "") {
    document.getElementById("mensagem").textContent = "Por favor, preencha o campo de tarefa.";
    return;
  }
  
  let mensagem = "Tarefa adicionada com sucesso!";
  document.getElementById("mensagem").textContent = mensagem;


  let listaTarefa = document.getElementById("listaTarefa");
  

  let novoItem = document.createElement("li");
  novoItem.textContent = addTarefa;
 
  listaTarefa.appendChild(novoItem);

  tarefa.value = "";
}

