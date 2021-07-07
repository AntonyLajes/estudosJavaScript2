//criando variaveis e constantes /-/ para variaveis usamos o let para evitar problemas

let nome;
let sobrenome;
let idade;
const telefone = 23151253434; //o valor da const deve ser atribuida no momento em q é declarada

//atribuindo valores as variaveis
nome = 'Eduardo';
sobrenome = 'Santos';
idade = 21;

//mostrando variaveis/constantes no console
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(telefone);

//alterando uma variavel
idade - 23;
console.log(idade)

let valorEmprestimo = 150000;
let texaDeJuros = 10;
let ehBomPagador = 'sim';
ehBomPagador = true; //podemos fazer tipagem de variaveis no js, mudando o tipo de variavel quando quisermos

console.log("Boa tarde, Sr. " + nome + ' ' + sobrenome + ". Sua idade é: " + idade + ", e seu telefone é: " + telefone + "."); //concatenação de variaveis me mensagem