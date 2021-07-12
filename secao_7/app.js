/*
let lista = Array(); //declarar um array

//melhorando o sistema do banco
let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function cadastroCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){

    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    taxaDeJuros = defineTaxa(idadeCliente);
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente;
    avalistas = avalistasCliente;

}

function defineTaxa(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente<=25){
        return 0.09;
    }else if(idadeCliente >= 26 && idadeCliente<=35){
        return 0.08;
    }else if(idadeCliente >= 36 && idadeCliente<=50){
        return 0.07;
    }else{
        return 0.06;
    }
}

cadastroCliente("Antonio", "Silva", 21, 150000, 3, true, ["Manuel", "Rafael", "Bruno"]);
console.log(nome);
console.log(avalistas)
console.log(avalistas[0]);
console.log(avalistas[1]);
console.log(avalistas[2]);


function adicionarAvalistas(avalista){
    avalistas.push(avalista);
}

function removeAvalista(){
    avalistas.pop();
}

function editaAvalista(novoNome, indice){
    avalistas[indice] = novoNome;
}

function ordenarAvalistas(){
    return avalistas.sort();
}

adicionarAvalistas("Andrew");
adicionarAvalistas("Marcos");
adicionarAvalistas("Carlos");
console.log(avalistas);

removeAvalista(); //remove o ultimo avalista da lista
console.log(avalistas);

editaAvalista("Manuel Silva", 0);
console.log(avalistas);

console.log(ordenarAvalistas());

//ir a 164 para entender o exibeAvalistas
function exibeAvalistas(){
    avalistas.forEach((nomesAvalistas, posicaoAvalistas) => {
        console.log(`O ${posicaoAvalistas + 1}º avalista é: ${nomesAvalistas}`); //template string
    })
}
exibeAvalistas();
//adicionar elementos
let frutas = Array();
frutas[0] = "Banana";
frutas[1] = "Maça";
frutas[2] = "Uva";
frutas[3] = "Abacaxi";
frutas[4] = "Mamão";
frutas[5] = "Pequi";
frutas[6] = "Manga";
console.log(frutas)

//alterando valores de elementos
frutas[0] = "Melancia";
frutas[2] = "Melão";
console.log(frutas);
//metodos em js - push, pop, shift, unshift, sort, etc

//push - adicionar um ou mais elementos ao fim do array
frutas.push("Cajamanga"); //podemos passar mais de um valor
console.log(frutas);

//unshift - adicionar um ou mais elementos ao inicio do array
frutas.unshift("Jaboticaba");
console.log(frutas);

//pop - remove o elemento do fim do array
frutas.pop();
console.log(frutas);

//shift - remove o elemento do inicio do array
frutas.shift();
console.log(frutas);

//splice - remove um intervalo de indices do array -/- splice(indiceASerRemovido, quantosIndicesAEsquerdaSeraoRemovidos)
frutas.splice(1,2); //assim removera o indice 1 e 2
console.log(frutas);

//podemos reservar os itens em variaveis. ex:
let removeDoInicio = frutas.shift();
console.log(removeDoInicio);
console.log(frutas);

//indexOf - achar elemento no array
let acharArray1 = frutas.indexOf("Mamão");
console.log(frutas[acharArray1]);

//sort - ordenar array em ordem alfabetica
frutas.sort();
console.log(frutas);

//reverse - mostrar o array em ordem inversa
frutas.reverse();
console.log(frutas);

//outros metodos 
//map -/- clone do array "principal"

let numeros = Array(2, 5, 11, 19, 22);
let novosNumeros = numeros.map((valores) => valores + 2)
console.log(novosNumeros);

//filter -/- gera um array com os elementos que passaram na filtragem
let impares = numeros.filter((numero) => numero % 2 === 1);
console.log(impares);

//find -/- usado para obter o primeiro elemento do array que satisfaça a condição desejada
let encontraValor = numeros.find((numero) => numero > 10)
console.log(encontraValor);

//findIndex -/- usado para obter a primeira posicao do array que satisfaça a condicao desejada
let encontraIndex = numeros.findIndex((numero) => numero > 10);
console.log(encontraIndex);

//Gerando numeros aleatorios por meio do objeto math

let nomes = Array("Jose", "Maria", "Carlos", "André", "Ana", "Bianca");
let numAleatorio = Math.floor(Math.random() * 6);

console.log(nomes[numAleatorio]);

//percorrer arry

for tradicional
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//for in /-/ a variavel recebe a posicao do array, porem ela n é recomendada
for(let posicaoAtual in nomes){
    console.log(nomes[posicaoAtual]);
}

//for of /-/ define cada elemento de array para uma variavel, dando apenas o elemento do array
for(let valorAtual of nomes){
    console.log(valorAtual);
}

//for each /-/ recebe o valor e o indice
nomes.forEach((nome, indice) => {
    console.log(nome);
    console.log("Nome " + indice + ": " + nome);
})

USAR O FOR A DEPENDER DO QUE NECESSITAMOS

//AULA 67 - ARRAYS MULTIDIMENSIONAIS

let cliente1 = [["Carlos", 25, true], ["Jose", 28, true], ["Maria", 65, false]];
console.log(cliente1[1][0])//acessando valores dentro de array dentro de array
console.log(cliente1[1][1])//acessando valores dentro de array dentro de array

cliente1.push(["Josue", 55, false]);//adiciona valores ao array
cliente1.pop();//remove o ultimo valor do array

console.table(cliente1); //mostra uma tabela
*/

//AULA 68 - ARRAYS MULTIDIMENSIONAIS CONTINUAÇÃO - LOOP ANINHADO
let quadroDeFuncionarios = Array(["Marketing", "Ana", "Bianca"], ["Serviços Gerais", "Juliana", "Jose"], ["Gerencia", "Marcia", "Carlos"]);

console.table(quadroDeFuncionarios)

quadroDeFuncionarios.forEach((departamento, indiceDepartamento) => {
    departamento.forEach((funcionario, indiceFuncionario) => {
        console.log(funcionario, indiceFuncionario);
    })
})