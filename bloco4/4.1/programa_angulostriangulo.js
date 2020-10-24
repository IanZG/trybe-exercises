let ang1;
let ang2;
let ang3;
let triangulo;
ang1 = 10;
ang2 = 30;
ang3 = 50;

if (ang1 + ang2 + ang3 == 180) {
    triangulo = true;
    console.log(triangulo);
    console.log("O seu triangulo é válido!");
} else {
    triangulo = false;
    console.log(triangulo);
    console.log("erro: triangulo inválido");
}