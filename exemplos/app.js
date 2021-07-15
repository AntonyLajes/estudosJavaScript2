/*

//função em callback

function sumNum(){
    let sum = 1 + 2;

    if(sum == 2){
        success();
    }else{
        fail();
    }
}

function success(){
    console.log("Sucesso");
}

function fail(){
    console.log("Falha");
}

sumNum();

*/

//função em promise

let p = new Promise((resolve, reject) => {

    let sum = 1 + 2;

    if(sum == 2){
        resolve("Sucesso");
    }else{
        reject("Erro");
    }
})

p.then((mensagem) => {
    console.log(mensagem);
})
.catch((mensagem) => {
    console.log(mensagem);
})



