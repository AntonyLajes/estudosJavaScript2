/*
//EXPRESSOES REGULARES

const stringTest = 'Hello World!!!';
const regex = /Hello/; //a expressao regular fica entre barras
console.log(regex.test(stringTest)); //Ve se possui a palavra "Hello" na StringTest

const regexH = /H/;
const regexl = /l/;
const regexll = /ll/;
const regexw = /w/;

console.log(regexH.test(stringTest)); //Ve se a string possui a letra "H"
console.log(regexl.test(stringTest)); //Ve se a string possui a letra "l"
console.log(regexll.test(stringTest)); //Ve se a string possui as letras "ll" seguidas uma da outra
console.log(regexw.test(stringTest)); //Ve se a string possui a letra "w" - retorna false pois JS é case sensetive

//se quisermos ignorar o case sensetive em algum caractere utilizamos o "i" apos a expressao
const regexwNoCaseSensetive = /w/i;
console.log(regexwNoCaseSensetive.test(stringTest));

const stringTest1 = 'Exemplo: Hello World!!!';

//se quisermos saber se alguma palavra/caractere está no inicio da frase utilizamos o sinal "^" antes da expressao regular
const helloInicio = /^Hello/;
console.log(helloInicio.test(stringTest)) //-true
console.log(helloInicio.test(stringTest1)); //-false

//se quisermos saber se alguma palavra/caractere está no final da frase utilizamos o sinal "$" apos a expressao regular
const exclamaçãoFinal = /!!!$/;
console.log(exclamaçãoFinal.test(stringTest)); //-true

const produtos = "84797893-A\n171616908-C\n44370151-B\n176244201-C\n61489773-A\n54348631-A\n10501-A"; //usamos o \n para quebrar linha no console
console.log(produtos);
const regexProdutos = /[0-9]+[-][C]/g; //o "g" retorna todas as ocorrencias solicitadas em um array

const resultadoMatch = produtos.match(regexProdutos); //METODO MATCH = retorna resultados de uma string em outra string
console.log(resultadoMatch);

const resultadoExec = regexProdutos.exec(produtos); //METODO EXEC = retorna um padrão em uma determinada string.
console.log(resultadoExec);

//VALIDAR DADOS COM Expressoes regulares
*/

//realizar substituições com REGEX
//replace
const valor = "R$ 1899,99"
const regexValor = /(R\$) ([0-9]{4})[,]([0-9]{2})/; //usamos o "()"" para separar em grupos

console.log(valor.replace(regexValor, '$ $2.$3'));

//dar nome aos grupos 
const regexValorNome = /(?<moeda>R\$) (?<inteiro>[0-9]{4})[,](?<centavos>[0-9]{2})/; //usamos ?<> para dar nome a um grupo
const data = regexValorNome.exec(valor);
console.log(data);
console.log(data.groups.moeda);
console.log(data.groups.inteiro);
console.log(data.groups.centavos);