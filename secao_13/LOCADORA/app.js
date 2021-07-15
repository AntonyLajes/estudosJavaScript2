const listaFilmes = document.querySelector("#listaFilmes");

const filmes = [
    {nome: "Vingadores", genero: "Ação"},
    {nome: "Karate Kid", genero: "Ação/Aventura"},
    {nome: "Velozes e Furiosos", genero: "Ação"}
];

const criaElementosUi = function(){
    let aux = "";
    filmes.forEach((filme) =>{
        aux += `<li> Nome: ${filme.nome}, Genero: ${filme.genero}`;
    })
    listaFilmes.innerHTML = aux; //usamos o innerHTML pois queremos o retorno da tag funcionando e nao em escrita apenas
}

function exibeFilmes(){
    setTimeout(criaElementosUi, 2000);
}

function adicionaFilme(filme){
    const promessa = (resolve, reject) => {
        console.log(filme)
        setTimeout(() => {
            if(filme.nome === ""){
                reject(new Error("Nome inválido"));
            }else{
                filmes.push(filme);
                resolve();
            }
        }, 3000);
    }
    return new Promise(promessa);
}

adicionaFilme({nome: "Codigo daVinci", genero: "Suspense/Drama"})
    .then(() => {
        return adicionaFilme({nome: "Exterminador do Futuro 1", genero: "Suspense/Ação"})
    })
    .then(() => {
        return adicionaFilme({nome: "", genero: "Suspense/Ação"})
    })
    .then(() => {
        return adicionaFilme({nome: "Exterminador do Futuro 3", genero: "Suspense/Ação"})
    })
    .then(exibeFilmes)
    .catch((erro) => {
        console.error(erro);
    })