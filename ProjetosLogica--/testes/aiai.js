function adicionarTarefa(){
    // PEGAR INFORMAÇÕES DO INPUT
    var tarefa = document.getElementById("tarefa").value; //pega texto usuário
    var tarefaNode = document.createTextNode(tarefa); // converte me um node

    // LIMPAR O TEXTO DIGITADO
    document.getElementById("tarefa").value = "";

    // CRIAR (COM TEXTO ADICIONADO PELO USUÁRIO) CAIXA
    var check = document.createElement("input");
    check.type = "checkbox";
    
    var texto = document.createElement("span")
    texto.innerHTML = tarefaNode.nodeValue;
    
    var caixa = document.createElement("div");
    caixa.appendChild(check);
    caixa.appendChild(texto);

    var li = document.createElement("li");
    li.appendChild(caixa);

    // LIs VOU ADICIONAR ELE DENTRO DO UL
    var ul = document.getElementById("lista");
    ul.appendChild(li);
}