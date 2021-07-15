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

function exibeNome(nome, callback){
    setTimeout(() => {
        console.log(nome);
        callback();
    }, 1500)
}

console.log("Olá, ");
exibeNome("Manuel", function(){
    console.log("Silva");
})