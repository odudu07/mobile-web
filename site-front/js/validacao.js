const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    const email = document.querySelector("#email").value;

        console.log("email");

    //condição de validação 
    if(email ==="") {
        alert("escreva seu email.");
        return false;
    }

    
//limpa o formulário
form.reset();
});