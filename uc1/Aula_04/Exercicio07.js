// Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. Caso esse total de vendas seja maior ou igual a R$ 10.000, o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor, o programa calculará apenas 2%.


let vendaMes = 8000;
let metaMes = 10000;
let comissao = 0;

if(vendaMes >= metaMes) {
    comissao = vendaMes * 0.04;
    console.log(comissao );

} else if (vendaMes < metaMes) {
    comissao = vendaMes * 0.02;
    console.log(comissao);
} else {
    console.log("@@@DIGITE UM VALOR VALIDO @@@");
}
console.log(" Aqui é o valor da variavel comissao no global", comissao);