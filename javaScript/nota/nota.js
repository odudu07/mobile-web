// variáveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// Função
function resultadoNotaClick(event) {
    event.preventDefault()

    // Validação de formulário
    if (inputNota.value == "") {
        message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    // Lógica - Condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }

    inputNota.value = "";

}