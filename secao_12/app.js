const container = document.querySelector(".container"); //usamos o querySelector pois ele retorna um objeto e nao um array 
const listaDeAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const paletasDiv = document.querySelector(".paletas_div")
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");

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
//parentNode - obtem nó que está a um nivel acima na hierarquia da árvore DOM (pai)
console.log(paleta1.parentNode);
//children - obtem nós que estão a um nivel abaixo na hierarquia da árvore DOM (filhos)
console.log(paletasDiv.children);

//firstElementChild - obtem o primeiro nó que esta a um nivel abaixo na hierarquia da árvore DOM (filho primogenito)
console.log(paletasDiv.firstElementChild);
//lastElementChild - obtem o ultimo nó que esta a um nivel abaixo na hierarquia da árvore DOM (filho caçula)
console.log(paletasDiv.lastElementChild);

//previousElementSibling - obtem o irmao antecessor do nó que está no mesmo nivel da hierarquia da árvore DOM
console.log(paleta2.previousElementSibling);
//nextElementSibling - obtem o irmao sucessor do nó que está no mesmo nivel da hierarquia da árvore DOM
console.log(paleta2.nextElementSibling);

//SURGIMENTO DE ELEMENTOS
//createElement() - cria um elemento tag html
const titulo = document.createElement("h1"); //atribui a tag h1 a constante titulo
titulo.textContent = "To Do List"; //atribui o conteudo texto da constante titulo (tambem podemos usar innerHTML)
titulo.classList.add("titulo") //adiciona classe ao elemento
//titulo.classList.remove("titulo") //remove classe ao elemento

//INSERIR ELEMENTOS NO DOCUMENT DA PAGINA
//insertBefore - adiciona um elemento no começo ou meio dos elementos filhos
const body = document.querySelector("body");
body.insertBefore(titulo, paletasDiv); //elementoPai.insertBefore(elementoASerAdicionado, elementoIrmaoQueSeraSucessorDoElementoAdicionado)

//appendChild - adiciona um elemento no final dos elementos filhos
const paleta4 = document.createElement("div");
paletasDiv.appendChild(paleta4);
console.log(paletasDiv);

//INSERIR PROPRIEDADES EM ELEMENTOS
//classList - mostra as classes de um elemento em um HTMLCollection
paleta4.classList.add("paleta"); //adicionou classe ao elemento

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        //criaAtividade();
    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});