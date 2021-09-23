function adicionarTarefa() {
    var tarefa = document.getElementById("tarefinha").value;
    var tarefaNode = document.createTextNode(tarefa);
    document.getElementById("tarefinha").value = "";

    var check = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("change", (event) => marcarEdesmc(event))

    var texto = document.createElement("span");
    texto.innerHTML = tarefaNode.nodeValue;

    var caixa = document.createElement("div");
    caixa.appendChild(check);
    caixa.appendChild(texto);

    var li = document.createElement("li");
    li.appendChild(caixa);
    var ul = document.getElementById("lista");
    ul.appendChild(li)
}
function marcarEdesmc(checkbox) {
    if (checkbox.srcElement.checked == true) {
        var span = checkbox.srcElement.nextElementSibling;
        span.style.textDecorationLine = "line-through"
        
    } else {
        var span = checkbox.srcElement.nextElementSibling;
        span.style.textDecorationLine = "none";
        
    }

}

