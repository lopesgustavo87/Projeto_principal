//Operação de deposito
//Todos os depósitos devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de saque
// 1. O sistema deve permitir realizar 3 saques diários
// 2. com limite máximo de R$ 500,00 por saque. 
// 3.Caso o usuário não tenha saldo em conta, o sistema deve exibir uma mensagem informando que não será possível sacar o dinheiro por falta de saldo. 
// 4. Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de extrato
// 1.Essa operação deve listar todos os depósitos e saques realizados na conta. 
// 2. No fim da listagem deve ser exibido o saldo atual da conta. 
// 3.Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações. Os valores devem ser exibidos utilizando o formato R$ xxx.xx, exemplo: 
// // R$ 1500.45





const limiteSaques = 3;
let saldo = 0;
let extrato = "";
let limite = 500;
let numeroSaques = 0;

while(true) {
    let menu = prompt(`
            ==========================
                Selecione uma opção: 
                [d] - Depósito
                [s] - Saque
                [e] - Extrato
                [q] - Sair
            ==========================
            `); 
    if(menu == "d") {
        let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
        if(valor > 0) {
            // saldo += valor; // Forma compactada
            saldo = saldo + valor;
            //extrato += `Depósito de R$ ${valor}`; // Forma compactada
            extrato = extrato + `Depósito de R$ ${valor}`;
            alert(`Depósito de R$ ${valor} realizado com sucesso`);
        }
        else {
            alert("@@@ Operação falhou! O valor informado é inválido!")
        }
    }
    else if(menu == "s") {
        let valor = parseFloat(prompt("Informe o valor do saque: R$"));
        if(valor > 0) {
            // saldo += valor; // Forma compactada
            saldo = saldo + valor;
            //extrato += `Depósito de R$ ${valor}`; // Forma compactada
            extrato = extrato + `Saque de R$ ${valor}`;
            alert(`Saque de R$ ${valor} realizado com sucesso`);
        }
        else {
            alert("@@@ Operação falhou! O valor informado é inválido!")
        }
        
        
    }
    
}
   