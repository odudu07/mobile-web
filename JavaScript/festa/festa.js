// variáveis
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// função
function resultadoIdadeClick(event) {
    event.preventDefault();

    // validação de formulário
    if (inputIdade.value === "") {
        message.style.display = "block";
        return false;
    }
    
    message.style.display = "none";

    // lógica - condição
    if (inputIdade.value >= 18) {
        resultado.innerHTML = "ACESSO LIBERADO ✅";
    } else {
        resultado.innerHTML = "ACESSO NEGADO.❌";
    }

    inputIdade.value = "";
}
