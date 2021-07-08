/*

//laço de repetição for

for(let i = 1; i<=50; i++){
    console.log(i)
}

for(let cont = 10; cont>=0; cont--){
    console.log(cont)
}


let nome = "Jose";
let sobrenome = "Carlos";
let idade = 21;
let valorEmprestimo = 150000;
let numAnos = 6;
let taxaDeJuros;
let juros;
let montante;

if(idade >= 18 && idade<=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade<=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

for(let i = 1; i<=3; i++){
    valorEmprestimo = parseInt(prompt('Digite o valor do emprestimo'));
    numAnos = parseInt(prompt('Digite o numero de anos desejado para pagar'))

    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;

    console.log(montante)
}

//laço de repetição while

while (soma < 100) {
    numero = parseInt(prompt('Insira um número:'))
    soma += numero;
    console.log(soma)
}

if(idade >= 18 && idade<=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade<=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

while(valorEmprestimo != 0){
    valorEmprestimo = parseInt(prompt('Digite o valor do emprestimo'));
    numAnos = parseInt(prompt('Digite o numero de anos desejado para pagar'))

    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;

    console.log(montante)
}


let nome = "Jose";
let sobrenome = "Carlos";
let idade = 21;
let valorEmprestimo = 150000;
let numAnos = 6;
let taxaDeJuros;
let juros;
let montante;
let soma = 0;
let numero;

if(idade >= 18 && idade<=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade<=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

do{
    valorEmprestimo = parseInt(prompt('Digite o valor do emprestimo'));
    numAnos = parseInt(prompt('Digite o numero de anos desejado para pagar'))

    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;

    console.log(montante)
}while(valorEmprestimo != 0);

//laço de repetiçao break
let nome = "Jose";
let sobrenome = "Carlos";
let idade = 21;
let valorEmprestimo = 150000;
let numAnos = 6;
let taxaDeJuros;
let juros;
let montante;
let soma = 0;
let numero;

if(idade >= 18 && idade<=25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade<=35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade<=50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

while(true){
    valorEmprestimo = parseInt(prompt('Digite o valor do emprestimo'));
    if(valorEmprestimo == 0){
        break;
    }
    numAnos = parseInt(prompt('Digite o numero de anos desejado para pagar'))

    juros = valorEmprestimo * taxaDeJuros * numAnos;
    montante = valorEmprestimo + juros;

    console.log(montante)
}
*/

//laço de repetição continue

let i = 0;

for(i = 1; i <= 20; i++) {
    if(i % 2 == 1){
        continue;
    }
    console.log(i)
}