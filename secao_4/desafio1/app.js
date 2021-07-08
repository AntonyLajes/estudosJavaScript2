let corredor1, corredor2, corredor3;

corredor1 = 6;
corredor2 = 7;
corredor3 = 5;

if(corredor1 < corredor2 && corredor1 < corredor3){
    console.log("Corredor 1 foi o vencedor");
}else if(corredor2 < corredor1 && corredor2 < corredor3){
    console.log("Corredor 2 foi o vencedor");
}else{
    console.log("Corredor 3 foi o vencedor");
}