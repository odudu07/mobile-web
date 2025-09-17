const imagens = ["../../img/img-1.jpg", "../../img/img-2.jpg", "../../img/img-3.jpg"];
//                     0                  1                  2

let index = 0; // começa na primeira imagem
const banner = document.getElementById("banner");

function trocarImagem() {
    index++; // Vai para próxima imagem

    if (index >= imagens.length) {
        index = 0; // Se passou do útimo, volta para o primeiro
    }

    banner.src = imagens[index];
}

// chamar a função
// trocarImagem();
setInterval(trocarImagem, 3000)