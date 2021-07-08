for(let numProduto = 1; numProduto <= 50; numProduto++){
    let preco = parseFloat(prompt('Digite o preço do produto:'));
    let total = 0;

    if(preco == 0){
        numProduto--;
        console.log(numProduto + ' - R$ ' + total)

        break;
    }

    console.log(numProduto + ' - R$ ' + preco);

    total = total + preco;
}