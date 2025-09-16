const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    // Impede envio automático
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();

    // Condição de valição 
    if (email === "") {
        alert("Por favor, insira um e-mail");
        return false;
    }


    // Limpa o campo
    form.reset(); 
});