
function omiteSenha(senha){
    let tamSenha = senha.length;
    let novaSenha = "";

    for(let i = 0; i < tamSenha; i++){
        novaSenha += "*";
    }

    return novaSenha;
}

const usuario = {
    nome: "Jose",
    email: "jose@email.com",
    senha: "123"
};

usuario.senha = omiteSenha(usuario.senha);

console.log(usuario);

