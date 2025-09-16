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

// validação simples: tem @ e.
    if(!email.includes("@") || !email.includes(".")) {
        alert("email inválido.");
        return false;
    }

    alert("email cadastrado com sucesso!✅");
    
//limpa o formulário
form.reset();
});