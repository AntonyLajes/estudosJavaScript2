let total = 0;

for(let numProduto = 1; numProduto <= 50; numProduto++){
    let preco = parseFloat(prompt('Digite o preço do produto:'));

    if(preco == 0){
        numProduto--;
        console.log('Numero de itens: ' + numProduto + ' /// Total:' + ' - R$ ' + total)

        break;
    }

    console.log(numProduto + ' - R$ ' + preco);

    total = total + preco;
}