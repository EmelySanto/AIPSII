var numero = 0
function onOff() {
    var imgInt = document.getElementById("button")
    var imgLam = document.getElementById("luzinha")

    if (numero % 2 == 0) {
        imgInt.src = "imagens/on.jpg";
        imgLam.src = "imagens/xlamp_on.png";
    } else {
        imgInt.src = "imagens/off.jpg";
        imgLam.src = "imagens/xlamp_off.png";

    } numero++
}
