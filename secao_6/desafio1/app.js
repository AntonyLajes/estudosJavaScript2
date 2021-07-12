function interrogatorio(){
    let numSim = 0;

    let pergunta1 = parseInt(prompt("Telefonou para a vitima? 1-Sim // 2-Não"));
    let pergunta2 = parseInt(prompt("Esteve no local do crime? 1-Sim // 2-Não"));
    let pergunta3 = parseInt(prompt("Mora perto da vitima? 1-Sim // 2-Não"));
    let pergunta4 = parseInt(prompt("Devia para a vitima? 1-Sim // 2-Não"));
    let pergunta5 = parseInt(prompt("Já trabalhou para a vitima? 1-Sim // 2-Não"));

    if(pergunta1 == 1){
        numSim++;
    }
    if(pergunta2 == 1){
        numSim++;
    }
    if(pergunta3 == 1){
        numSim++;
    }
    if(pergunta4 == 1){
        numSim++;
    }
    if(pergunta5 == 1){
        numSim++;
    }

    return numSim;
}

function classifica(numSim){

    if(numSim == 5){
        console.log("Culpado");
    }else if(numSim == 3 || numSim == 4){
        console.log("Cúmplice");
    }else if(numSim == 2){
        console.log("Suspeita");
    }else if(numSim == 1 || numSim == 0){
        console.log("Inocente");
    }
}

classifica(interrogatorio)