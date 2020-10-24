let salarioBruto;
let inss;
let ir;
let salarioInss;
let salarioLiquido;
salarioBruto = 3000;
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



