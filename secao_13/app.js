//FLUXO DE EXECUÇÃO - SINCRONO E ASSINCRONO
/*
console.log("O Impossível");
setTimeout(console.log, 3000, "Karate Kid"); //realiza um comando apos um tempo em millisegundos
console.log("Os Vingadores");


//nome estará fora de ordem por causa do setTimeout
console.log("Olá");
setTimeout(console.log, 2000, "Manuel");
console.log("Silva");
*/


function exibeNome(nome){
    //criando uma promise
    const promise = (resolve, rejected) => {
        setTimeout(() => {
            resolve(nome);
        }, 1500)
    }
    return new Promise(promise);
}

function exibeSobrenome(){
    console.log("Silva");
}

console.log("Olá, ");
exibeNome("Manuel")
    .then((resposta) => {
        console.log(resposta);
    })
    .then(exibeSobrenome)
    .then(() => {
        console.log("Tudo bem?");
    })
    .then(() => {
        console.log("Quantos anos você tem?");
    })