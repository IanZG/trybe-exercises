let porcentagem;
porcentagem = 100;
if (porcentagem >= 90 && porcentagem < 101) {
    console.log("A");
} else if (porcentagem >= 80 && porcentagem < 101) {
    console.log("B");
} else if (porcentagem >= 70 && porcentagem < 101) {
    console.log("C");
} else if (porcentagem >= 60 && porcentagem < 101) {
    console.log("D");
} else if (porcentagem >= 50 && porcentagem < 101) {
    console.log("E");
} else if (porcentagem < 50 && porcentagem > -1) {
    console.log("F");
} else {
    console.log("erro: nota invalida")
}

//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F