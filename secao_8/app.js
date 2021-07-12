//CRIANDO OBJETO COM NOTAÇÃO LITERAL
const carro = {
    nome: "Fiesta", //o objeto deve ser declarado com propriedades em ":" seguido de ","
    marca: "Ford",
    cor: "Amarelo",
    ano: 2012,
    emplacado: true,
    //motor: [126, 1.6]
    //podemos "setar" objetos aninhados para nao termos que acessar arrays. ec:
    motor: {
        cavalos: 126,
        cilindradas: 1.6
    },
    kmPercorrido: () => {
        return `O ${carro.nome} percorre ${carro.consumo * carro.capacidadeDoTanque} KM com o tanque cheio`
    }
};
/*
//podemos acessar o objeto de 2 formas
console.log(carro.nome); //usando "."
console.log(carro[`marca`]); //usando "[]"

//podemos acessar objetos aninhados de 2 formas
console.log(carro.motor.cavalos);
console.log(carro[`motor`][`cilindradas`]);

//podemos alterar propriedades do objeto
carro.cor = "Azul";
console.log(carro.cor);

//adicionando propiedades ao objeto
carro.consumo = 12;
carro.capacidadeDoTanque = 45;
console.log(carro);

//removendo propriedades - n usa muito
delete carro.emplacado;
console.log(carro);

//método (ver funcao dentro do metodo)
console.log(carro.kmPercorrido());

//definindo valores a propriedades do objeto
function cadastroCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){

    cliente = {
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            avalistas: avalistasCliente
        }
    }   
    return cliente;
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


const cliente1 = cadastroCliente("Antonio", "Silva", 21, 150000, 3, true, ["Manuel", "Rafael", "Bruno"]);

console.log(cliente1);
*/

function cadastroCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){

    cliente = {
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista);
        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop();
        },
        editaAvalistas: function(indiceAntigoAvalista, nomeNovoAvalista){
            this.emprestimo.avalistas[indiceAntigoAvalista] = nomeNovoAvalista; 
        },
        ordenaAvalista: function(){
            this.emprestimo.avalistas.sort();
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.forEach((avalista, indice) => {
                console.log(`O ${indice + 1}º avalista é ${avalista}`);
            })
        }
    }   
    return cliente;
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

const cliente1 = cadastroCliente("Antonio", "Silva", 21, 150000, 3, true, ["Manuel", "Rafael", "Bruno"]);

/*
cliente1.adicionaAvalista("José");
cliente1.adicionaAvalista("Edmarcos");
cliente.exibeAvalistas();

cliente1.removeAvalista();

cliente1.editaAvalistas(1, "Mariana");
cliente.exibeAvalistas();

//Métodos Object
//keys - mostra todas as propriedades disponiveis no objeto
const chaves = Object.keys(carro);
console.log(chaves);

//values - mostra todos os valores do objeto
const valores = Object.values(carro);
console.log(valores)

//entries - retornar um array que corresponde aos parece de propriedade [chave:valor];
const entradas = Object.entries(carro);
console.log(entradas);

//assign - copia propriedades de um objeto para outro objeto
const carro2 = Object.assign(carro);
console.log(carro2);
*/

//percorrer objeto
//for of
for(const [chave, valor] of Object.entries(carro)){
    console.log(`${chave}: ${valor}`);
}
/*
for(const [chave, valor] of Object.entries(cliente1)){
    console.log(`${chave}: ${valor}`);
}
*/

