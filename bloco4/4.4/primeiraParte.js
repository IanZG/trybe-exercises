function subtracao (a, b) {
    console.log(a - b);
}
subtracao(5, 3);

function soma (a, b) {
    console.log(a + b);
}
soma(5, 8);
function calculaSalario (salario) {
    let salarioBruto = salario;
    let inss;
    let ir;
    let salarioInss;
    let salarioLiquido;
    if (salarioBruto < 1556.95) {
        inss = salarioBruto * (8 / 100);
        } else if (salarioBruto < 2594.93) {
            inss = salarioBruto * (9 / 100);
        } else if (salarioBruto < 5189.83) {
            inss = salarioBruto * (11 / 100);
        } else {
            inss = 570.88;
        }

    salarioInss = salarioBruto - inss;

    if (salarioInss < 1903.99) {
        ir = 0;
    } else if (salarioInss < 2826.65) {
        ir = salarioInss * (7.5 / 100);
        ir -= 142.80;
    } else if (salarioInss < 3751.06) {
        ir = salarioInss * (15 / 100);
        ir -= 354.80;
    } else if (salarioInss < 4664.69) {
        ir = salarioInss * (22,5 / 100);
        ir -= 636.13;
    } else {
        ir = salarioInss * (27,5 / 100);
        ir -= 869.36;
    }
    salarioLiquido = salarioInss - ir;
    console.log("Salário liquido = R$" + salarioLiquido);

}
calculaSalario(3000);

function calculaResto (a, b) {
    console.log(a % b);
}
calculaResto(10, 2);

function qualMaior (a, b, c) {
    if (a > b && a > c){
        console.log(a);
    }
    else if (b > a && b > c){
        console.log(b);
    }else{
        console.log(c);
    
    }
}
qualMaior(40, 30, 72);

function positivoOuNegativo (num) {
    if (num > 0) {
        console.log("Positivo");
    } else if (num < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
positivoOuNegativo(-7);

function multiplica (a,b) {
    console.log(a * b);
}
multiplica(4, 8);
