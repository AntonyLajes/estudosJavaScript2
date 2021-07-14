const container = document.querySelector(".container"); //usamos o querySelector pois ele retorna um objeto e nao um array 
const listaDeAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector("botao_adc");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const body = document.getElementsByTagName("body");
const delTodos = document.querySelector(".botao_del_todos");

/*
console.log(container);
console.log(listaDeAtividades);
console.log(input);
console.log(erro);
console.log(botaoCadastra);
console.log(paleta1);
console.log(paleta2);
console.log(paleta3);
*/

//PERCORRER ELEMENTOS
//parentNode() - obtem nó que está a um nivel acima na hierarquia da árvore DOM



//CRIANDO ELEMENTOS
function criaAtividade(){
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value;
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener('click', () => removeAtividadeSelecionada(atividade));
    listaDeAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar); 
}

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
}

paleta1.addEventListener("click", () => alteraCorDeFundo('seagreen')) //adicionador de eventos, assim ele nao precisa estar em contato direto com o html evitando futuros bugs
paleta2.addEventListener('click', () => alteraCorDeFundo('slateblue'));
paleta3.addEventListener('click', () => alteraCorDeFundo('tomato'));

delTodos.addEventListener('click', () => removeAtividades());

function alteraCorDeFundo(cor){
    container.style.background = cor;
    listaDeAtividades.style.background = cor;
}

function addNoBotaoMais(){
    cadastraAtividade();
}

function removeAtividadeSelecionada(atividade){
    listaDeAtividades.removeChild(atividade)
}

function removeAtividades(){
    while(listaDeAtividades.firstElementChild){
        listaDeAtividades.removeChild(listaDeAtividades.firstElementChild);
    }
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});
