//criando variaveis e constantes /-/ para variaveis usamos o let para evitar problemas
let nome;
let sobrenome;
let idade;
const telefone = 23151253434; //o valor da const deve ser atribuida no momento em q é declarada

//atribuindo valores as variaveis
nome = 'Eduardo';
sobrenome = 'Santos';
idade = 32;

//operações em js
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
let ehBomPagador = true;

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;

//estruturas condicionais if-else

if(ehBomPagador){
    console.log("O cliente " + nome + " é um bom pagador");
}else{
    console.log("O cliente " + nome + " não é um bom pagador")
}

//else if

/*
18~25 anos -> 9%
26~35 anos -> 8%
36~50 anos -> 7%
51 ou mais -> 6%
*/

if(idade >= 18 && idade<=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade<=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

console.log(taxaDeJuros)

//switch 

/*
Programador Júnior -> 4 Mil
Programador Pleno -> 5 Mil
Programador Senior -> 6 Mil
Testador -> 5 mil
Arquiteto -> 8 mil
Analista -> 7 mil
Gerente -> 10 mil
*/

let cargo = "Testador";

switch(cargo){
    case "Programador Júnior":
        console.log("O " + cargo + " recebe R$4000.");
        break;
    case "Programador Pleno":
        console.log("O " + cargo + " recebe R$5000.");
        break;
    case "Programador Senior":
        console.log("O " + cargo + " recebe R$6000.");
        break;
    case "Testador":
        console.log("O " + cargo + " recebe R$5000.");
        break;
    case "Arquiteto":
        console.log("O " + cargo + " recebe R$5000.");
        break;
    case "Analista":
        console.log("O " + cargo + " recebe R$5000.");
        break;
    case "Gerente":
        console.log("O " + cargo + " recebe R$5000.");
        break;
    default:
        console.log("Cargo não encontrado");
}

//operador condicional ternario

ehBomPagador ? console.log("O cliente " + nome + " é um bom pagador") : console.log("O cliente " + nome + " não é um bom pagador")
