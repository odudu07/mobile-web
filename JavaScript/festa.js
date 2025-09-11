// variavies
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// função
  

function resultadoidadeClick(event) {
    event.preventDefault();

     // validaçãode formulário
    if (inputIdade.value == "") {
        message.style.display="block";
        return false;
    }
    
    message.style.display="none";
    // logica - condição

    if (inputIdade.value >= 18) {
        resultado.innerHTML = "ACESSO LIBERADO ✅";
    } else {
        resultado.innerHTML = "ACESSO NEGADO ❌";
    }

    inputIdade.value = ""

  

}