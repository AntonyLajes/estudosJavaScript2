let temperatura;
let total = 0;
let dia = 1;

while(true){
    temperatura = parseFloat(prompt('Digite a temperatura do dia ' + dia + ':'));
    if(temperatura == 0){
        console.log('Media de temperatura: ' + (total / dia));

        break;
    }
    console.log('Dia ' + dia + ' - Temperatura: ' + temperatura);

    total += temperatura;

    dia++;
}