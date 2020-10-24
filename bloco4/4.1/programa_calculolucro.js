let custo;
let valor;
let imposto;
let fluxoDeVendas;
custo = 50;
valor = 130;
fluxoDeVendas = 1000;
if (custo < 0 | valor < 0) {
    console.log("Erro: Valores inválidos");
} else {
    imposto = (custo / 10) + (custo / 10);
    
    let custoTotal = custo + imposto;
    let lucro = valor - custoTotal;
    let lucroTotal = lucro * fluxoDeVendas;
    console.log("O lucro por produto é R$" + lucro);
    console.log("O lucro total após " + fluxoDeVendas + " vendas, será de R$" + lucroTotal);
}