let peca;
peca = "bobo da corte";
switch (peca) {
    case "peão":
        console.log("anda para frente, batalha na diagonal, sempre avante");
        break;
    case "torre":
        console.log("anda o quanto quiser, para frente, para tras, para esquerda e para a direita");
        break;
    case "cavalo":
        console.log("anda 3 casas em forma de L, em qualquer direção");
        break;
    case "bispo":
        console.log("anda o quanto quiser nas diagonais");
        break;
    case "rainha":
        console.log("anda o quanto quiser em qualquer direção do tabuleiro");
        break;
    case "rei":
        console.log("anda uma casa em qualquer direção do tabuleiro");
        break;
    default:
        console.log("erro: peça inválida");
}