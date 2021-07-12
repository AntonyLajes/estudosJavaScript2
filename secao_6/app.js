//declarar funcoes
/*
function calculaArea(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;

    return media;
}

console.log(calculaArea(2, 5, 1));
console.log(calculaArea(20, 11, 2));
console.log(calculaArea(2, 4, 31));
console.log(calculaArea(22, 12, 31));
*/
//melhorando sistema de banco com funcoes

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;

function cadastroCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente){

    nome = nomeCliente;
    sobrenome = sobrenomeCliente;
    idade = idadeCliente;
    valorEmprestimo = valorEmprestimoCliente;
    taxaDeJuros = defineTaxa(idadeCliente);
    numAnos = numAnosCliente;
    ehBomPagador = ehBomPagadorCliente;

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

cadastroCliente("Antonio", "Silva", 21, 150000, 3, true);
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);

cadastroCliente("Maria", "Alencar", 45, 210000, 5, false);
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);

//Expressao de funcao
const media = function calculaMedia(num1, num2, num3){
    let mediaDosNumeros = (num1 + num2 + num3) / 3;

    return mediaDosNumeros;
}
/*Função anonima (nao sofre hoisting)
const media = function(num1, num2, num3){
    let mediaDosNumeros = (num1 + num2 + num3) / 3;

    return mediaDosNumeros;
}
*/

console.log(media(7, 8, 9));
console.log(media(70, 18, 29));
console.log(media(17, 38, 90));

/* Arrow function
const media = (num1, num2, num3) => {
    let mediaDosNumeros = (num1 + num2 + num3) / 3;

    return mediaDosNumeros;
}

ou com 1 parametro apenas

const areaQuadrado = lado => {
    return lado * lado;
}

ou apenas

const areaQuadrado = lado => lado * lado;

DEVE-SE TOMAR CUIDADO AO USAR ARROW FUNCTION POR QUESTAO DE LEGIBILIDADE
EXISTEM OUTRAS FORMAS DE PASSAR PARAMETROS COMO PADROES E REST
*/