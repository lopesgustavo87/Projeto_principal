//Construir uma página para uma empresa de serviços. O operador irá digitar o salário de um cliente. Se o salário for maior ou igual que R$ 3.000,00, o programa irá escrever na tela “Oferecer Plano Alfa” e, caso seja menor, o programa escreverá “Oferecer Plano Beta”.

let salarioDoCliente = 2.000;
if (salarioDoCliente >= 3.000){
    console.log( "Oferecer Plano Alfa. " );
}
    else if (salarioDoCliente <= 3.000) { 
    console.log( "Oferecer Plano Delta. ");

}   else {
    console.log("DIgite um valor valido. ");
}
    
