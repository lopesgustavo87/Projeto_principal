// Construir um programa onde o usuário saberá o valor do seu colesterol. Caso o valor seja menor ou igual que 180, o programa irá escrever na tela “Saúde Ok”; caso contrário, o programa escreverá na tela “Vamos procurar uma ajuda médica?”


let colesterolUsuario = 150;
const taxaColesterol = 180;

if (colesterolUsuario > taxaColesterol){
    console.log( " Vamos procurar uma ajuda médica. " );
}
else if (colesterolUsuario <= taxaColesterol) { 
    console.log( " Saúde ok. ");

}else {
    console.log("@@@ Dado inválido@@@");
}