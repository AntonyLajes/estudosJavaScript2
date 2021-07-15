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

function adicionaFilme(filme, callback){
    console.log(filme)
    setTimeout(() => {
        filmes.push(filme);
        callback();
    }, 3000);
    
    console.log(filmes);
}

adicionaFilme({nome: "Codigo daVinci", genero: "Suspense/Drama"}, exibeFilmes);