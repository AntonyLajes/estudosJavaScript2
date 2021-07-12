/*
//LIDANDO COM ERROS 
try {
    //tente executar esse codigo
    //let x = y + 10;
    //console.log(x);
    let num = 1;
    num.toUpperCase();
} catch (erro) {
    //se der errado, execute esse código
    console.log(erro);
    console.log(erro.name); //nome do erro
    console.log(erro.message); //mensagem do erro
} finally {
    //de toda forma, execute esse código
    //independente se o try der erro ou nao, o finally será executado
    //finally é uma clausula opcional do bloco catch
    console.log("Fim da instrução try/catch/finally");
}

//LANÇAR EXCESSOES - THROW
function soma(num1, num2){
    if(typeof num1 !== "number"){
        throw TypeError("O primeiro argumento deve ser um numero.");
    }
    if(typeof num2 !== "number"){
        throw TypeError("O segundo argumento deve ser um numero.");
    }
    return num1 + num2;
}

try{
    console.log(soma(10, 20));
}catch(erro){
    console.log(erro);
}

try{
    console.log(soma("Jose", 20));
}catch(erro){
    console.log(erro);
}

try{
    console.log(soma(10, "Jose"));
}catch(erro){
    console.log(erro);
}
*/

function cadastroCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente, avalistasCliente){

    cliente = {
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            taxaDeJuros: defineTaxa(idadeCliente),
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            avalistas: avalistasCliente
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista);
        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop();
        },
        editaAvalistas: function(indiceAntigoAvalista, nomeNovoAvalista){
            this.emprestimo.avalistas[indiceAntigoAvalista] = nomeNovoAvalista; 
        },
        ordenaAvalista: function(){
            this.emprestimo.avalistas.sort();
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.forEach((avalista, indice) => {
                console.log(`O ${indice + 1}º avalista é ${avalista}`);
            })
        }
    }   
    return cliente;
}

function defineTaxa(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente<=25){
        return 0.09;
    }else if(idadeCliente >= 26 && idadeCliente<=35){
        return 0.08;
    }else if(idadeCliente >= 36 && idadeCliente<=50){
        return 0.07;
    }else{
        return 0.06;
    }
}
function credenciaisInvalidas(mensagem){ //criando erro
    this.nome = "Credenciais Inválidas";
    this.mensagem = mensagem;
}
function adicionaInformacoesLogin(cliente, email, senha){
    if(email.indexOf("@") !== -1 && senha.length > 5){ //comparacao para validar login
        cliente.login = {
            email: email,
            senha: senha
        };
        return cliente;
    }else if(email.indexOf("@") === -1){
        throw new credenciaisInvalidas("Erro de cadastro - Email inválido");
    }else{
        throw new credenciaisInvalidas("Erro de cadastro - Senha Inválida");
    }
}

try{
    const cliente1 = cadastroCliente("Antonio", "Silva", 21, 150000, 3, true, ["Manuel", "Rafael", "Bruno"]);
    adicionaInformacoesLogin(cliente1, "emailemail.com", "bataaaaaa");
}catch(erro){
    console.log(erro);
    console.log(erro.nome);
    console.log(erro.mensagem);
}finally{
    console.log("Deseja realizar uma nova operação");
}