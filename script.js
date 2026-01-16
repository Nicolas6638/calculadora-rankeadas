//Função responsável pelo calcular o saldo de vitórias 
//e definir o nível do herói com base na quantidade de vitórias
function calcularRank(vitorias, derrotas) {
    
    //Calcula o saldo de rankeadas (vitorias-derrotas)
    let saldoVitorias= vitorias - derrotas

    //Variável que irá armazenar o nível do Herói
    let nivel = ""

    //Estrutura de decisão para definir o nível
    if(vitorias < 10){
        nivel = "Ferro"
    }else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bonze"
    }else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata"
    }else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro"
    }else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante"
    }else if(vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }

    //Retorna o saldo de vitórias e o nível calculado
    return {saldoVitorias, nivel}
}

//Variável que controla o laço de repetição
let confirmar = true

//Laço de repetição para permitir vários cálculos
    while (confirmar) {

        //Entradas de dados do úsuario
        let vitorias = parseInt(prompt("Digite a quantidades de Vitórias:"));
        let derrotas = parseInt(prompt("Digite a quantidades de Derrotas:"));
        
        //Chama a fução calcularRank()
        let resultado =calcularRank(vitorias, derrotas);

        // Exibe a mensagem final no console
        alert(`O Heroí tem o saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`)
        
        //Pergunta ao úsuario se ele deseja calcular novamente
        confirmar = confirm("Deseja calcular novamente?");
    
    }

    
    
