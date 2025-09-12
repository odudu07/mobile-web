function diasParaNiver() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // o=Dom, 1=Seg, ..., 4=Quin
    let diasFaltando = 4 - diaSemana; 

if (diasFaltando < 0) {
        diasFaltando += 7; 
    }
     document.getElementById("dias").textContent = diasFaltando;
   

}

// chamar a função
diasParaNiver();