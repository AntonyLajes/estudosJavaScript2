let relatorioEscolar = [[prompt("Digite o nome do aluno:"), parseFloat(prompt("Digite a nota do aluno:"))], [prompt("Digite o nome do aluno:"), parseFloat(prompt("Digite a nota do aluno:"))], [prompt("Digite o nome do aluno:"), parseFloat(prompt("Digite a nota do aluno:"))]];

let aprovado = 0;
let reprovado = 0;

for(let dados of relatorioEscolar){
    if(dados[1] >= 7){
        console.log(dados[0] + " aprovado com nota: " + dados[1]);
        aprovado++;
    }else{
        reprovado++;
    }
}

console.log("Numero de aprovados: " + aprovado);
console.log("Numero de reprovados: " + reprovado);
