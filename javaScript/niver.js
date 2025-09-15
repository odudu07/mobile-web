function diasParaNiver() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 0=Dom, 1=Seg, ..., 4=Quin
    let diasFaltando = 4 - diaSemana;

    if (diasFaltando < 0) {
        diasFaltando += 7;
    }
    
    document.getElementById("dias").textContent = diasFaltando;
}

function atualizarHora() {
    const horaHtml = document.getElementById("hora");
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    horaHtml.textContent = `${hora}:${minutos}:${segundos}`;
}


// chamar a função
diasParaNiver();

setInterval(atualizarHora, 1000);

atualizarHora();