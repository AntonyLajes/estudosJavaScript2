const lista = document.querySelector("#listaPosts");


/*
//HTTP
//GET - POST - PUT - PATCH - DELETE
//get - usamos para pedir informações a um servidor/api
//post - usamos para adicionar informações a um servidor/api
//put e patch - usamos para atualizar informações de um servidor/api (put para informações completas / patch para informações em parte)
//delete - usamos para deletar informações de um servidor/api

//ver sobre http status code

//-----------------------------------------------------//
//Objeto XMLHttpRequest - O Ajax usa esse objeto para enviar e receber dados de um servidor
const httpRequest = new XMLHttpRequest();

//-----------------------------------------------------//
//Abrir conecção entre a aplicação e o servidor
//httpRequest.open("METODO", "URL", FLAGOPICIONAL);
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts"); //cria uma requisição de dados

//Ativar a coneção e realiza a devida requisição - intermediador
//httpRequest.send({objeto});
httpRequest.send();

console.log(httpRequest);

//Executar algo toda vez que o status da requisição for atualizada
//onreadystatechange

let posts = "";

httpRequest.onreadystatechange = function () {
    if(httpRequest.readyState === 4 && httpRequest.status === 200){ //so executara a condicao quando o ready state for 4 (concluido) e estiver em status de sucesso
        posts = JSON.parse(httpRequest.response); //converte formato texto em objeto
        //console.log(httpRequest.response);
        exibePosts();
    }
};

function criaPosts(){
    let saida = "";

    console.log(posts)

    posts.forEach((post) => {
        saida += `<li>${post.title}</li>
                <li>${post.body}</li> <hr>`
    });
    lista.innerHTML = saida;
}

function exibePosts(){
    setTimeout(criaPosts, 3000);
};

//FETCH - Fornece uma maneira mais facil e logica para buscar recursos de forma assincrona na rede
//fetch("String_endereço", {METODO, CONFIGCORPO, CONFIGCABEÇALHO})
//o metodo fetch retorna uma promise, entao precisamos trata-la

let posts;
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePosts();
    })x

function criaPosts(){
    let saida = "";

    console.log(posts)

    posts.forEach((post) => {
        saida += `<li>${post.title}</li>
                <li>${post.body}</li> <hr>`
    });
    lista.innerHTML = saida;
}

function exibePosts(){
    setTimeout(criaPosts, 3000);
};
let posts;
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePosts();
    })

function criaPosts(){
    let saida = "";

    console.log(posts)

    posts.forEach((post) => {
        saida += `<li>${post.title}</li>
                <li>${post.body}</li> <hr>`
    });
    lista.innerHTML = saida;
}

function exibePosts(){
    setTimeout(criaPosts, 3000);
};

//GET em fetch
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "new post",
        body: "corpo do novo post",
        userId: "5"
    }),
    headers: {
        'Content-type':'application/json, charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePosts();
    })

*/ 