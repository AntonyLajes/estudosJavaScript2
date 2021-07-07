//operações em js

let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;

console.log(montante);

//operações unarias /-/ incremento/decremento

//Incremento
let posIncremento = 2;
posIncremento = posIncremento++; //pos incremento - o valor so mostrara a incrementação no prox operação/logica

let preIncremento = 2;
preIncremento = ++preIncremento; //pre incremento - o valor mostrara a incrementação na hora, pois ele foi pre incrementado

//Decremento
let posDecremento = 2;
posDecremento = posDecremento--; //pos decremento - o valor so mostrara a decrementação no prox operação/logica

let preDecremento = 2;
preDecremento = ++preDecremento; //pre decremento - o valor mostrara a decrementação na hora, pois ele foi pre decrementado

//operadores de comparação
//operadores relacionais sao >, <, >=, <=
//operadores de igualdade sao ==, ===, !=, !==

//operadores lógicos sao !(não), ||, &&