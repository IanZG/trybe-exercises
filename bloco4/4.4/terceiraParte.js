// EXERCISE 1
function verificaPalindromo (palavra) {
    let verificar = [];
    let verificarContrario = [];
    let palindromo;
    let palavraContrario = ""; 
    for (let key in palavra) {
        verificar.push(palavra[key]);
    }
    for (let i = palavra.length - 1; i > -1; i -= 1) {
        verificarContrario.push(palavra[i]);
    }
    for (let key in verificarContrario) {
        palavraContrario += verificarContrario[key];
    }
    if (palavra == palavraContrario) {
        palindromo = true;
    } else {
        palindromo = false;
    }
    console.log(verificar);
    console.log(verificarContrario);
    return palindromo;
}
//verificaPalindromo("arara")
console.log(verificaPalindromo("arara"));

//EXERCISE 2
function indiceMaior (numeros) {
    let conjunto = numeros;
    let maior = 0;
    let posicaoMaior;
    for (let key in conjunto) {
        if (conjunto[key] > maior) {
            maior = conjunto[key];
            posicaoMaior = key;
        }
    }
    return posicaoMaior;
}
console.log(indiceMaior([1, 2, 3, 5, 4]));

//EXERCISE 3
function indiceMenor (numeros) {
    let conjunto = numeros;
    let menor = 99999999999999999999999999;
    let posicaoMenor;
    for (let key in conjunto) {
        if (conjunto[key] < menor) {
            menor = conjunto[key];
            posicaoMenor = key;
        }
    }
    return posicaoMenor;
}
console.log(indiceMenor([1, 4, 5, 2, -5]));

//EXERCISE 4 
